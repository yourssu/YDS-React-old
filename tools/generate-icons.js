#!/usr/bin/env node

const path = require('path')
const camelCase = require('camelcase')
const fs = require('fs-extra')
const { DOMParser, XMLSerializer } = require('xmldom')
const prettier = require('prettier')

const svg24IconsPath = path.resolve(__dirname, '../icons')

const iconsPath = path.resolve(__dirname, '../src/icons/generated')
const iconsIndexPath = path.resolve(__dirname, '../src/icons/index.ts')
const iconsStoriesPath = path.resolve(__dirname, '../src/icons/Icons.stories.tsx')

const doNotModify = `/* This is a generated file, do not modify. 이 파일은 자동 생성된 파일입니다. 수정하지 마십시오. */\n\n`

async function main() {
  const prettierConf = await prettier.resolveConfig(path.resolve(__dirname, '..'))
  /* Clean generated icons */
  await fs.emptyDir(iconsPath)
  /* Construct icon map from original svg */
  const svgIcons = (await fs.readdir(svg24IconsPath)).map((name) => path.resolve(svg24IconsPath, name))
  const iconFiles = {}
  const iconReadPromises = svgIcons.map((icon) => {
    const iconFileName = path.basename(icon, '.svg')
    const iconName = `${camelCase(iconFileName.substring(3), { pascalCase: true })}Icon`
    return fs.readFile(icon, 'utf8').then((file) => {
      iconFiles[iconName] = file.toString()
    })
  })
  await Promise.all(iconReadPromises)
  const serializer = new XMLSerializer()
  const iconWritePromises = Object.entries(iconFiles).map(([name, svg]) => {
    const dom = new DOMParser().parseFromString(svg)
    const svgElem = dom.getElementsByTagName('svg')[0]
    svgElem.setAttribute('fill', 'current')
    camelize(svgElem)
    Array.from(dom.getElementsByTagName('path')).forEach((p) => p.removeAttribute('fill'))
    const viewBox = svgElem.getAttribute('viewBox')
    const innerSvg = Array.from(svgElem.childNodes)
      .map((v) => serializer.serializeToString(v))
      .join('')
    const template = `${doNotModify}import React, { memo, forwardRef } from 'react';

export const ${name} = memo(forwardRef<SVGSVGElement>((props, ref) => (
<svg ref={ref} viewBox="${viewBox}" fill="current" xmlns="http://www.w3.org/2000/svg" {...props}>
  ${innerSvg}
</svg>
)));`
    const iconPath = path.join(iconsPath, `${name}.tsx`)
    const iconFile = prettier.format(template, {
      ...prettierConf,
      filepath: iconPath,
    })

    return fs.writeFile(iconPath, iconFile)
  })
  await Promise.all(iconWritePromises)

  const exportEntries = Object.keys(iconFiles)
    .map((v) => `export { ${v} } from './generated/${v}';`)
    .join('\n')

  await fs.writeFile(iconsIndexPath, doNotModify + exportEntries)
  const storiesImports = `import { ${Object.keys(iconFiles).join(', ')} } from '.'`
  const storiesObjects = `const iconObj = { ${Object.keys(iconFiles).join(', ')} }`
  const storiesTemplate = `import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
${storiesImports}

${storiesObjects}

interface IconWrapperProps {
  size: string
}

const IconWrapper: React.FC<IconWrapperProps> = ({ size }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '860px' }}>
    {Object.entries(iconObj).map(([key, value]) => (
      <div key={key} title={key}>{React.createElement(value, { width: size, height: size })}</div>
    ))}
  </div>
)

export default {
  title: 'Foundation/Icons',
  component: IconWrapper,
  argTypes: {},
} as ComponentMeta<typeof IconWrapper>

const Template: ComponentStory<typeof IconWrapper> = ({ size }) => <IconWrapper size={size} />

export const Primary = Template.bind({})
Primary.args = {
  size: '24px',
}
`

  await fs.writeFile(iconsStoriesPath, doNotModify + storiesTemplate)
}

function camelize(elem) {
  const queue = [elem]
  while (queue.length) {
    const curElem = queue.pop()
    if (curElem.attributes) {
      const attrs = Array.from(curElem.attributes)
      attrs.forEach((attr) => {
        if (camelCase(attr.name) !== attr.name) {
          curElem.setAttribute(camelCase(attr.name), attr.value)
          curElem.removeAttribute(attr.name)
        }
      })
    }
    if (curElem.childNodes) Array.from(curElem.childNodes).forEach((v) => queue.push(v))
  }
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
