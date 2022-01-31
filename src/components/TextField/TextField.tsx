import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import CheckIcon from '../../assets/CheckIcon'
import ClearIcon from '../../assets/ClearIcon'
import EyeoffIcon from '../../assets/EyeoffIcon'
import SearchIcon from '../../assets/SearchIcon'
import { getTypoStyle, Typography } from '../../styles/common/typo/typo'
import ThemeProvider from '../../styles/theme'

const Label = styled.label`
  width: 350px;
  height: 48px;
`

const InputContainer = styled.div<TextFieldProps>`
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
    background-color: transparent;
    outline: none;
    border: 0px;
    width: 100%;
    margin: 12px 16px;
    caret-color: ${({ theme }) => theme.color.textPointed};

    ${getTypoStyle(Typography.Body1)};
    &::placeholder {
      color: ${({ theme, isDisabled }) => (isDisabled ? theme.color.textDisabled : theme.color.textTertiary)};
    }

    cursor: ${({ isDisabled }) => isDisabled && 'not-allowed'};

    margin-left: ${({ searchPrefix }) => searchPrefix && '4px'};
  }

  .search-icon {
    width: 20px;
    height: 20px;
    margin: 16px 10px;
    margin-right: 0px;
  }

  .suffix-icon {
    display: none;
    margin-right: 16px;
    fill: ${({ theme }) => theme.color.buttonNormal};
    cursor: pointer;
  }

  input:focus + .suffix-icon {
    display: flex;
  }

  .suffix {
    color: ${({ theme }) => theme.color.textTertiary};
    margin: 12.5px 16px;
    margin-left: 0px;
  }

  ${({ isFocused }) =>
    isFocused &&
    css`
      .suffix-icon {
        display: flex;
      }
    `}

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

const HelperLabel = styled.div<TextFieldProps>`
  width: 100%;
  padding: 8px 8px 0 8px;
  color: ${({ theme }) => theme.color.textTertiary};
  ${getTypoStyle(Typography.Caption1)};

  ${({ isNegative, theme }) =>
    isNegative &&
    css`
          color: ${theme.color.textWarned}};
      `};

  ${({ isDisabled, theme }) =>
    isDisabled &&
    css`
          color: ${theme.color.textDisabled}};
      `};

  cursor: ${({ isDisabled }) => isDisabled && 'not-allowed'};
`

type TextFieldProps = {
  isDisabled?: boolean
  isFocused?: boolean
  isTyping?: boolean
  isPositive?: boolean
  isNegative?: boolean
  helperLabel?: string
  placeholder?: string
} & React.InputHTMLAttributes<HTMLInputElement> &
  TextFieldExtends

type TextFieldExtends = {
  suffix?: React.ReactNode
  searchPrefix?: React.ReactNode
}

const TextFiled: React.VFC<TextFieldProps> = ({
  placeholder,
  helperLabel,
  isDisabled,
  isPositive,
  isFocused,
  isNegative,
  suffix,
  searchPrefix,
  ...props
}) => {
  return (
    <ThemeProvider>
      <Label>
        <InputContainer
          isPositive={isPositive}
          isDisabled={isDisabled}
          isFocused={isFocused || Boolean(props.value)}
          isNegative={isNegative}
          searchPrefix={Boolean(searchPrefix)}
        >
          {searchPrefix}
          <input disabled={isDisabled} placeholder={placeholder} {...props} />
          {suffix}
        </InputContainer>
        {helperLabel && (
          <HelperLabel
            isPositive={isPositive}
            isDisabled={isDisabled}
            isFocused={isFocused || Boolean(props.value)}
            isNegative={isNegative}
          >
            {helperLabel}
          </HelperLabel>
        )}
      </Label>
    </ThemeProvider>
  )
}

type SimpleTextFieldProps = {
  /** not in figma, maybe need onClickClearButton? */
  onClickClearButton?: () => void
} & TextFieldProps

const SimpleTextField: React.VFC<SimpleTextFieldProps> = ({ onClickClearButton, ...props }) => {
  return (
    <TextFiled
      suffix={
        <div className="suffix-icon" onClick={onClickClearButton}>
          <ClearIcon />
        </div>
      }
      {...props}
    />
  )
}

type SuffixTextFieldProps = {
  suffix: string
} & SimpleTextFieldProps

const SuffixTextField: React.VFC<SuffixTextFieldProps> = ({ suffix, ...props }) => {
  return <TextFiled suffix={<div className="suffix">{suffix}</div>} {...props} />
}

type SearchTextFieldProps = {
  suffix: string
  /** not in figma, maybe need onClickClearButton? */
  onClickClearButton?: () => void
} & TextFieldProps

const SearchTextField: React.VFC<SearchTextFieldProps> = ({ suffix, onClickClearButton, ...props }) => {
  return (
    <TextFiled
      suffix={
        <div className="suffix-icon" onClick={onClickClearButton}>
          <ClearIcon />
        </div>
      }
      type="email"
      helperLabel=""
      searchPrefix={
        <div className="search-icon">
          <SearchIcon />
        </div>
      }
      {...props}
    />
  )
}

type PasswordTextFieldProps = {
  suffix: string
  /** not in figma, maybe need onClickClearButton? */
  onClickClearButton?: () => void
} & TextFieldProps

/** eye icon for "show" ====> check-icon (temporary) */
const PasswordTextField: React.VFC<PasswordTextFieldProps> = ({ suffix, onClickClearButton, ...props }) => {
  const [isHide, setIsHide] = useState(true)

  return (
    <TextFiled
      type={isHide ? 'password' : 'text'}
      suffix={
        <div
          className="suffix-icon"
          onClick={() => {
            setIsHide((prev) => !prev)
          }}
        >
          {isHide ? <EyeoffIcon /> : <CheckIcon />}
        </div>
      }
      helperLabel=""
      {...props}
    />
  )
}

export { SimpleTextField, SuffixTextField, SearchTextField, PasswordTextField }
