import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import CheckIcon from '../../assets/CheckIcon'
import EmptyCheckIcon from '../../assets/EmptyCheckIcon'
import { getTypoStyle, Typography } from '../../styles/common/typo/typo'
import ThemeProvider from '../../styles/theme'

const Label = styled.label<CheckBoxProps>`
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

  ${({ size, isDisabled }) => (size === 'small' && isDisabled ? getTypoStyle(Typography.Button4) : css``)};

  ${({ theme, isDisabled, isSelected }) =>
    isDisabled
      ? isSelected
        ? css`
            color: ${theme.color.buttonDisabled};
            fill: ${theme.color.buttonDisabled};
          `
        : css`
            color: ${theme.color.buttonDisabled};
            fill: ${theme.color.buttonDisabled};
          `
      : isSelected
      ? css`
          color: ${theme.color.buttonPoint};
          fill: ${theme.color.buttonPoint};
        `
      : css`
          color: ${theme.color.buttonNormal};
          fill: ${theme.color.buttonNormal};
        `};

  ${({ size }) =>
    size === 'small'
      ? css`
          .check-icon {
            width: 16px;
            height: 16px;
          }
          .padding-box {
            padding-right: 4px;
          }
          height: 16px;
          font-size: 12px;
        `
      : size === 'medium'
      ? css`
          .check-icon {
            width: 20px;
            height: 20px;
          }
          height: 20px;
          font-size: 14px;
        `
      : size === 'large'
      ? css`
          .check-icon {
            width: 24px;
            height: 24px;
          }

          height: 24px;
          font-size: 14px;
        `
      : css``};
`

type CheckBoxProps = {
  isDisabled: boolean
  isSelected: boolean
  size: 'small' | 'medium' | 'large'
}

interface Props extends CheckBoxProps {
  text: string
}

const Checkbox: React.VFC<Props & React.HtmlHTMLAttributes<HTMLInputElement>> = ({
  text,
  isDisabled,
  isSelected,
  size,
  ...props
}) => {
  return (
    <ThemeProvider>
      <Label isDisabled={isDisabled} isSelected={isSelected} size={size}>
        {isSelected ? <CheckIcon className="check-icon" /> : <EmptyCheckIcon className="check-icon" />}
        <div className="padding-box" />
        <input className="checkbox" type="checkbox" {...props}></input>
        {text}
      </Label>
    </ThemeProvider>
  )
}

export default Checkbox
