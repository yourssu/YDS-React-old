import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Color } from './Colors.styled'
import { darkThemeColors } from '../../styles/foundation/colors/semanticColors'


export default {
  title: 'Foundation/SemanticColor',
  component: Color,
  argTypes: {},
} as ComponentMeta<typeof Color>

const BackGround: ComponentStory<typeof Color> = (args) => {
  return (
    <div style={{ width: '400px', padding:"10px", backgroundColor: '#555' }}>
        <Color color={darkThemeColors.bgDimDark}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>bgDimDark</div>
        </Color>
        <Color color={darkThemeColors.bgElevated}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>bgElevated</div>
        </Color>
        <Color color={darkThemeColors.bgElevatedDark}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>bgElevatedDark</div>
        </Color>
        <Color color={darkThemeColors.bgNormal}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>bgNormal</div>
        </Color>
        <Color color={darkThemeColors.bgNormalDark}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>bgNormalDark</div>
        </Color>
        <Color color={darkThemeColors.bgPressed}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>bgPressed</div>
        </Color>
        <Color color={darkThemeColors.bgRecomment}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>bgRecomment</div>
        </Color>
        <Color color={darkThemeColors.bgSelected}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>bgSelected</div>
        </Color>
    </div>
  )
}

export const Primary = BackGround.bind({})
Primary.args = {
  children: '다람쥐 헌 쳇바퀴에 타고파',
}


const Button: ComponentStory<typeof Color> = (args) => {
  return (
    <div style={{ width: '400px', padding:"10px", backgroundColor: '#555' }}>
        <Color color={darkThemeColors.buttonBG}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>buttonBG</div>
        </Color>
        <Color color={darkThemeColors.buttonBright}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>buttonBright</div>
        </Color>
        <Color color={darkThemeColors.buttonDisabled}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>buttonDisabled</div>
        </Color>
        <Color color={darkThemeColors.buttonDisabledBG}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>buttonDisabledBG</div>
        </Color>
        <Color color={darkThemeColors.buttonEmojiBG}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>buttonEmojiBG</div>
        </Color>
        <Color color={darkThemeColors.buttonNormal}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>buttonNormal</div>
        </Color>
        <Color color={darkThemeColors.buttonNormalPressed}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>buttonNormalPressed</div>
        </Color>
        <Color color={darkThemeColors.buttonPoint}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>buttonPoint</div>
        </Color>
        <Color color={darkThemeColors.buttonPointBG}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>buttonPointBG</div>
        </Color>
         <Color color={darkThemeColors.buttonPointPressed}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>buttonPointPressed</div>
        </Color>
        <Color color={darkThemeColors.buttonWarned}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>buttonWarned</div>
        </Color>
        <Color color={darkThemeColors.buttonWarnedBG}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>buttonWarnedBG</div>
        </Color>
        <Color color={darkThemeColors.buttonWarnedPressed}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>buttonWarnedPressed</div>
        </Color>
    </div>
  )
}

export const ButtonColor = Button.bind({})
ButtonColor.args = {
  children: '다람쥐 헌 쳇바퀴에 타고파',
}


const Dim: ComponentStory<typeof Color> = (args) => {
  return (
    <div style={{ width: '400px', padding:"10px", backgroundColor: '#555' }}>
        <Color color={darkThemeColors.dimNormal}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>dimNormal</div>
        </Color>
        <Color color={darkThemeColors.dimPickerReverse}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>dimPickerReverse</div>
        </Color>
        <Color color={darkThemeColors.dimThick}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>dimThick</div>
        </Color>
        <Color color={darkThemeColors.dimThickReserved}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>dimThickReserved</div>
        </Color>
        <Color color={darkThemeColors.bgDimDark}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>bgDimDark</div>
        </Color>
    </div>
  )
}

export const DimColor = Dim.bind({})
DimColor.args = {
  children: '다람쥐 헌 쳇바퀴에 타고파',
}



const Input: ComponentStory<typeof Color> = (args) => {
  return (
    <div style={{ width: '400px', padding:"10px", backgroundColor: '#555' }}>
        <Color color={darkThemeColors.inputFieldElevated}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>inputFieldElevated</div>
        </Color>
        <Color color={darkThemeColors.inputFieldNormal}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>inputFieldNormal</div>
        </Color>
    </div>
  )
}

export const InputColor = Input.bind({})
InputColor.args = {
  children: '다람쥐 헌 쳇바퀴에 타고파',
}

const Text: ComponentStory<typeof Color> = (args) => {
  return (
    <div style={{ width: '400px', padding:"10px", backgroundColor: '#555' }}>
        <Color color={darkThemeColors.textBright}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>textBright</div>
        </Color>
        <Color color={darkThemeColors.textDisabled}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>textDisabled</div>
        </Color>
        <Color color={darkThemeColors.textPointed}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>textPointed</div>
        </Color>
        <Color color={darkThemeColors.textWarned}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>textWarned</div>
        </Color>
        <Color color={darkThemeColors.textPrimary}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>textPrimary</div>
        </Color>
        <Color color={darkThemeColors.textSecondary}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>textSecondary</div>
        </Color>
        <Color color={darkThemeColors.textTertiary}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>textTertiary</div>
        </Color>
    </div>
  )
}

export const TextColor = Text.bind({})
TextColor.args = {
  children: '다람쥐 헌 쳇바퀴에 타고파',
}


const Etc: ComponentStory<typeof Color> = (args) => {
  return (
    <div style={{ width: '400px', padding:"10px", backgroundColor: '#555' }}>
        <Color color={darkThemeColors.pressed}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>pressed</div>
        </Color>
        <Color color={darkThemeColors.toastBG}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>toastBG</div>
        </Color>
        <Color color={darkThemeColors.tooltipBG}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>tooltipBG</div>
        </Color>
        <Color color={darkThemeColors.tooltipPoint}>
        <div className='bg' style={{ width: '200px', height: "40px", borderRadius: "10px" }} />
        <div className='text'>tooltipPoint</div>
        </Color>
    </div>
  )
}

export const EtcColor = Etc.bind({})
EtcColor.args = {
  children: '다람쥐 헌 쳇바퀴에 타고파',
}