import React, { useState } from 'react'
import { EyeclosedLineIcon, EyeopenLineIcon, SearchLineIcon, XLineIcon } from '../../icons'
import { TextFieldProps } from '../../types'
import * as Styled from './TextField.styles'

const TextFiled: React.VFC<TextFieldProps> = ({
  placeholder,
  helperLabel,
  isPositive,
  isNegative,
  suffix,
  searchPrefix,
  ...props
}) => {
  return (
    <Styled.Label>
      <Styled.InputContainer isPositive={isPositive} disabled={props.disabled} isNegative={isNegative}>
        {searchPrefix}
        <Styled.InputWrapper>
          <Styled.Input
            disabled={props.disabled}
            searchPrefix={Boolean(searchPrefix)}
            placeholder={placeholder}
            {...props}
          />
          {suffix}
        </Styled.InputWrapper>
      </Styled.InputContainer>
      {helperLabel && (
        <Styled.HelperLabel
          className="helper-label"
          isPositive={isPositive}
          disabled={props.disabled}
          isNegative={isNegative}
        >
          {helperLabel}
        </Styled.HelperLabel>
      )}
    </Styled.Label>
  )
}

export type SimpleTextFieldProps = {
  /** not in figma, maybe need onClickClearButton? */
  onClickClearButton?: () => void
} & TextFieldProps

const SimpleTextField: React.VFC<SimpleTextFieldProps> = ({ onClickClearButton, ...props }) => {
  return (
    <TextFiled
      suffix={
        <div className="suffix-icon clear-icon" onClick={onClickClearButton}>
          <XLineIcon />
        </div>
      }
      {...props}
    />
  )
}

export type SuffixTextFieldProps = {
  suffix: string
} & SimpleTextFieldProps

const SuffixTextField: React.VFC<SuffixTextFieldProps> = ({ suffix, ...props }) => {
  return <TextFiled suffix={<div className="suffix">{suffix}</div>} {...props} />
}

export type SearchTextFieldProps = {
  suffix: string
  /** not in figma, maybe need onClickClearButton? */
  onClickClearButton?: () => void
} & TextFieldProps

const SearchTextField: React.VFC<SearchTextFieldProps> = ({ suffix, onClickClearButton, ...props }) => {
  return (
    <TextFiled
      suffix={
        <div className="suffix-icon" onClick={onClickClearButton}>
          <XLineIcon />
        </div>
      }
      type="email"
      helperLabel=""
      searchPrefix={
        <div className="search-icon">
          <SearchLineIcon />
        </div>
      }
      {...props}
    />
  )
}

export type PasswordTextFieldProps = {
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
          className="suffix-icon eye-icon"
          onClick={() => {
            setIsHide((prev) => !prev)
          }}
        >
          {isHide ? <EyeclosedLineIcon /> : <EyeopenLineIcon />}
        </div>
      }
      helperLabel=""
      {...props}
    />
  )
}

export { SimpleTextField, SuffixTextField, SearchTextField, PasswordTextField }
