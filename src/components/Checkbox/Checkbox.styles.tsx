import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { getTypoStyle, Typography } from '../../styles/foundation/typo/typo'
import { CheckBoxProps } from '../../types'

const getSizeStyle = ({ size }: { size: CheckBoxProps['size'] }) => {
  if (size === 'small') {
    return css`
      .checkIcon-wrapper {
        width: 16px;
        height: 16px;
      }
      .padding-box {
        padding-right: 4px;
      }
      height: 16px;
      font-size: 12px;
    `
  }

  if (size === 'medium') {
    return css`
      .checkIcon-wrapper {
        width: 20px;
        height: 20px;
      }
      height: 20px;
      font-size: 14px;
    `
  }

  if (size === 'large') {
    return css`
      .checkIcon-wrapper {
        width: 24px;
        height: 24px;
      }

      height: 24px;
      font-size: 14px;
    `
  }
}

export const CheckboxWrapper = styled.div<CheckBoxProps>`
  width: fit-content;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  input[type='checkbox'] {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  .padding-box {
    padding-right: 8px;
  }

  ${getTypoStyle(Typography.Button3)};

  input:disabled + .label {
    ${({ theme, isSelected }) =>
      isSelected
        ? css`
            color: ${theme.color.buttonDisabled};
          `
        : css`
            color: ${theme.color.buttonDisabled};
          `};
    ${({ size }) => size === 'small' && getTypoStyle(Typography.Button4)};
  }

  ${({ isSelected, disabled, theme }) =>
    isSelected
      ? css`
          color: ${theme.color.buttonPoint};
          fill: ${disabled ? theme.color.buttonDisabled : theme.color.buttonPoint};
        `
      : css`
          color: ${theme.color.buttonNormal};
          fill: ${disabled ? theme.color.buttonDisabled : theme.color.buttonNormal};
        `};

  ${({ size }) => getSizeStyle({ size })}
`
