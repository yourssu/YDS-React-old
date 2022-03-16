import React, { useState } from 'react'
import CheckIcon from '../../assets/CheckIcon'
import ClearIcon from '../../assets/ClearIcon'
import EyeoffIcon from '../../assets/EyeoffIcon'
import SearchIcon from '../../assets/SearchIcon'
import { TextFieldProps } from '../../types'
import { HelperLabel, InputContainer, Label } from './TextField.styles'

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
    <Label>
      <InputContainer
        isPositive={isPositive}
        disabled={props.disabled}
        isNegative={isNegative}
        searchPrefix={Boolean(searchPrefix)}
      >
        {searchPrefix}
        <input disabled={props.disabled} placeholder={placeholder} {...props} />
        {suffix}
      </InputContainer>
      {helperLabel && (
        <HelperLabel className="helper-label" isPositive={isPositive} disabled={props.disabled} isNegative={isNegative}>
          {helperLabel}
        </HelperLabel>
      )}
    </Label>
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
        <div className="suffix-icon" onClick={onClickClearButton}>
          <ClearIcon />
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
