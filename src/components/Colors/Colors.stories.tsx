import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Color } from './Colors.styled'
import { darkBasicColors } from '../../styles/foundation/colors/basicColors'


export default {
  title: 'Foundation/BasicColor',
  component: Color,
  argTypes: {},
} as ComponentMeta<typeof Color>

const Logo: ComponentStory<typeof Color> = (args) => {
  return (
    <div style={{ width: '400px', padding:"10px", backgroundColor: '#999' }}>
      <Color color={darkBasicColors.logoIndigo}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>logoIndigo</div>
      </Color>
      <Color color={darkBasicColors.logoViolet}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>logoViolet</div>
      </Color>
      <Color color={darkBasicColors.logoYellow}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>logoYellow</div>
      </Color>
    </div>
  )
}

export const Primary = Logo.bind({})
Primary.args = {
  children: '다람쥐 헌 쳇바퀴에 타고파',
}


const Point: ComponentStory<typeof Color> = (args) => {
  return (
    <div style={{ width: '400px', padding:"10px", backgroundColor: '#999' }}>
      <Color color={darkBasicColors.pointColor050}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>pointColor050</div>
      </Color>
      <Color color={darkBasicColors.pointColor100}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>pointColor100</div>
      </Color>
      <Color color={darkBasicColors.pointColor200}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>pointColor200</div>
      </Color>
      <Color color={darkBasicColors.pointColor300}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>pointColor300</div>
      </Color>
      <Color color={darkBasicColors.pointColor400}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>pointColor400</div>
      </Color>
      <Color color={darkBasicColors.pointColor500}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>pointColor500</div>
      </Color>
      <Color color={darkBasicColors.pointColor600}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>pointColor600</div>
      </Color>
      <Color color={darkBasicColors.pointColor700}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>pointColor700</div>
      </Color>
      <Color color={darkBasicColors.pointColor800}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>pointColor800</div>
      </Color>
      <Color color={darkBasicColors.pointColor900}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>pointColor900</div>
      </Color>
    </div>
  )
}

export const PointColor = Point.bind({})
PointColor.args = {
  children: '다람쥐 헌 쳇바퀴에 타고파',
}


const Warning: ComponentStory<typeof Color> = (args) => {
  return (
    <div style={{ width: '400px', padding:"10px", backgroundColor: '#999' }}>
      <Color color={darkBasicColors.warningRed050}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>warningRed050</div>
      </Color>
      <Color color={darkBasicColors.warningRed100}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>warningRed100</div>
      </Color>
      <Color color={darkBasicColors.warningRed200}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>warningRed200</div>
      </Color>
      <Color color={darkBasicColors.warningRed300}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>warningRed300</div>
      </Color>
      <Color color={darkBasicColors.warningRed400}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>warningRed400</div>
      </Color>
      <Color color={darkBasicColors.warningRed500}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>warningRed500</div>
      </Color>
      <Color color={darkBasicColors.warningRed600}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>warningRed600</div>
      </Color>
      <Color color={darkBasicColors.warningRed700}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>warningRed700</div>
      </Color>
      <Color color={darkBasicColors.warningRed800}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>warningRed800</div>
      </Color>
      <Color color={darkBasicColors.warningRed900}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>warningRed900</div>
      </Color>
    </div>
  )
}

export const WarningColor = Warning.bind({})
WarningColor.args = {
  children: '다람쥐 헌 쳇바퀴에 타고파',
}

const Gray: ComponentStory<typeof Color> = (args) => {
  return (
    <div style={{ width: '400px', padding:"10px", backgroundColor: '#999' }}>
      <Color color={darkBasicColors.gray050}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>gray050</div>
      </Color>
      <Color color={darkBasicColors.gray100}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>gray100</div>
      </Color>
      <Color color={darkBasicColors.gray200}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>gray200</div>
      </Color>
      <Color color={darkBasicColors.gray300}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>gray300</div>
      </Color>
      <Color color={darkBasicColors.gray400}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>gray400</div>
      </Color>
      <Color color={darkBasicColors.gray500}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>gray500</div>
      </Color>
      <Color color={darkBasicColors.gray600}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>gray600</div>
      </Color>
      <Color color={darkBasicColors.gray700}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>gray700</div>
      </Color>
      <Color color={darkBasicColors.gray800}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>gray800</div>
      </Color>
      <Color color={darkBasicColors.gray900}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>gray900</div>
      </Color>
    </div>
  )
}

export const GrayColor = Gray.bind({})
GrayColor.args = {
  children: '다람쥐 헌 쳇바퀴에 타고파',
}


const Alpha: ComponentStory<typeof Color> = (args) => {

  return (
    <div style={{ width: '400px', padding:"10px", backgroundColor: '#999' }}>
      <Color color={darkBasicColors.white000}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>white000</div>
      </Color>
      <Color color={darkBasicColors.black000}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>black000</div>
      </Color>
      <Color color={darkBasicColors.realBlack}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>realBlack</div>
      </Color>
      <Color color={darkBasicColors.white000A05}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>white000A05</div>
      </Color>
      <Color color={darkBasicColors.white000A10}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>.white000A10</div>
      </Color>
      <Color color={darkBasicColors.white000A30}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>white000A30</div>
      </Color>
      <Color color={darkBasicColors.white000A70}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>white000A70</div>
      </Color>
      <Color color={darkBasicColors.black000A05}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>black000A05</div>
      </Color>
      <Color color={darkBasicColors.black900A30}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>black900A30</div>
      </Color>
      <Color color={darkBasicColors.black900A70}>
       <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
       <div className='text'>black900A70</div>
      </Color>
    </div>
  )
}

export const AlphaColor = Alpha.bind({})
AlphaColor.args = {}