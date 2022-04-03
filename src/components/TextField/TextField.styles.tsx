import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { getTypoStyle, Typography } from '../../styles/foundation/typo/typo'
import { TextFieldProps } from '../../types'

export const Label = styled.label`
  width: 350px;
  height: 48px;
`

export const InputContainer = styled.div<TextFieldProps>`
  width: 348px;
  height: 46px;
  display: flex;
  flex-direction: row;
  align-items: center;
  display: flex;

  background: ${({ theme }) => theme.color.inputFieldElevated};
  border: 1px solid ${({ theme }) => theme.color.inputFieldElevated};

  border-radius: 8px;
  user-select: none;

  input {
    ${getTypoStyle(Typography.Body1)};
    background-color: transparent;
    outline: none;
    border: 0px;
    width: 100%;
    margin: 12px 16px;
    caret-color: ${({ theme }) => theme.color.textPointed};
    color: ${({ theme }) => theme.color.textPrimary};
    &::placeholder {
      color: ${({ theme, disabled }) => (disabled ? theme.color.textDisabled : theme.color.textTertiary)};
    }

    &:disabled {
      cursor: not-allowed;
    }

    margin-left: ${({ searchPrefix }) => searchPrefix && '4px'};
  }

  .search-icon {
    width: 20px;
    height: 20px;
    margin: 16px 10px;
    margin-right: 0px;
    fill: ${({ theme }) => theme.color.buttonNormal};
  }

  .suffix-icon {
    display: none;
    margin-right: 16px;
    fill: ${({ theme }) => theme.color.buttonNormal};
    cursor: pointer;
  }

  .suffix {
    color: ${({ theme }) => theme.color.textTertiary};
    margin: 12.5px 16px;
    margin-left: 0px;
  }

  input:focus + .suffix-icon {
    display: flex;
  }

  input:active + .suffix-icon {
    display: flex;
  }

  ${({ isPositive, isNegative, theme }) =>
    isPositive
      ? css`
        border: 1px solid ${theme.color.textPointed}};
      `
      : isNegative
      ? css`
        border: 1px solid ${theme.color.textWarned}};
    `
      : css``};
`

export const HelperLabel = styled.div<TextFieldProps>`
  width: 100%;
  padding: 8px 8px 0 8px;
  color: ${({ theme }) => theme.color.textTertiary};
  ${getTypoStyle(Typography.Caption1)};

  ${({ isNegative, theme }) =>
    isNegative &&
    css`
        color: ${theme.color.textWarned}};
    `};

  ${({ disabled, theme }) =>
    disabled &&
    css`
        color: ${theme.color.textDisabled}};
        cursor: not-allowed;
    `};
`
