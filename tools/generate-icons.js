#!/usr/bin/env node
'use strict'
const path = require('path')
const camelCase = require('camelcase')
const fs = require('fs-extra')
const { DOMParser, XMLSerializer } = require('xmldom')
const prettier = require('prettier')

const svg16IconsPath = path.resolve(__dirname, '../icons/16')
const svg20IconsPath = path.resolve(__dirname, '../icons/20')
const svg24IconsPath = path.resolve(__dirname, '../icons/24')
const svg48IconsPath = path.resolve(__dirname, '../icons/48')

const iconsPath = path.resolve(__dirname, '../src/icons/generated')
const iconsIndexPath = path.resolve(__dirname, '../src/icons/index.ts')

const doNotModify = `/* This is a generated file, do not modify. 이 파일은 자동 생성된 파일입니다. 수정하지 마십시오. */\n\n`

async function main() {
  const prettierConf = await prettier.resolveConfig(path.resolve(__dirname, '..'))
  /* Clean generated icons */
  await fs.emptyDir(iconsPath)
  /* Construct icon map from original svg */
  const svg16Icons = (await fs.readdir(svg16IconsPath)).map((name) => path.resolve(svg16IconsPath, name))
  const svg20Icons = (await fs.readdir(svg20IconsPath)).map((name) => path.resolve(svg20IconsPath, name))
  const svg24Icons = (await fs.readdir(svg24IconsPath)).map((name) => path.resolve(svg24IconsPath, name))
  const svg48Icons = (await fs.readdir(svg48IconsPath)).map((name) => path.resolve(svg48IconsPath, name))
  const iconFiles = {}
  const iconReadPromises = [...svg16Icons, ...svg20Icons, ...svg24Icons, ...svg48Icons].map((icon) => {
    const iconSize = path.basename(path.dirname(icon))
    const iconFileName = path.basename(icon, '.svg')
    const iconName = camelCase(iconFileName.substring(3), { pascalCase: true }) + iconSize + 'Icon'
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
    const width = svgElem.getAttribute('width')
    const height = svgElem.getAttribute('height')
    const viewBox = svgElem.getAttribute('viewBox')
    const innerSvg = Array.from(svgElem.childNodes)
      .map((v) => serializer.serializeToString(v))
      .join('')
    const template =
      doNotModify +
      `import React, { memo, forwardRef } from 'react';

export const ${name} = memo(forwardRef<SVGSVGElement>((props, ref) => (
<svg ref={ref} width="${width}" height="${height}" viewBox="${viewBox}" fill="current" xmlns="http://www.w3.org/2000/svg" {...props}>
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
