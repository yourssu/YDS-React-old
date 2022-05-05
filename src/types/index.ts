import React from 'react'

export type ToggleProps = {
  isSelected: boolean
} & React.InputHTMLAttributes<HTMLInputElement>

export type ToastMessageProps = {
  /**  
     multi: more than two lines (left alignment) <br>
     single: single lines (center alignment) */
  line: 'multi' | 'single'
} & React.HtmlHTMLAttributes<HTMLDivElement>

export type TextFieldExtends = {
  suffix?: React.ReactNode
  searchPrefix?: React.ReactNode
}

export type TextFieldProps = {
  isTyping?: boolean
  isPositive?: boolean
  isNegative?: boolean
  helperLabel?: string
  placeholder?: string
} & React.InputHTMLAttributes<HTMLInputElement> &
  TextFieldExtends

export type PlainButtonProps = {
  /** Button size */
  size: 'large' | 'medium' | 'small'

  /** Button for Point */
  isPointed: boolean

  /** Button for Warnning */
  isWarned: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export type PickerProps = {
  /** Max Coulmn length 3 */
  columns: string[][]

  /** handle selected content (parameters => selectedContent) */
  onChange: (strings: string[]) => void
} & React.HtmlHTMLAttributes<HTMLDivElement>

export type CheckBoxProps = {
  isSelected: boolean
  text?: string
  size?: 'small' | 'medium' | 'large'
} & React.InputHTMLAttributes<HTMLInputElement>

export type BoxButtonProps = {
  /** Button size */
  size: 'extraLarge' | 'large' | 'medium' | 'small'

  /** Button border radius */
  rounding: 8 | 4

  /** Disabled Button */
  isDisabled: boolean

  /** Button for Warnning */
  isWarned: boolean

  // error naming to "type"
  types: 'filled' | 'tinted' | 'line'
} & React.HtmlHTMLAttributes<HTMLButtonElement>

export type BadgeProps = {
  icon: boolean
  color: 'mono' | 'green' | 'emerald' | 'aqua' | 'blue' | 'indigo' | 'violet' | 'purple' | 'pink'
} & React.HtmlHTMLAttributes<HTMLDivElement>

export type ListItemProps = {
  isPressed?: boolean
} & React.HTMLAttributes<HTMLUListElement>

export type ListToogleItemProps = {
  isSelected?: boolean
} & React.HTMLAttributes<HTMLUListElement>

export type ListProps = {
  subHeader?: React.ReactNode
  listItems?: ListItemProps[] | ListToogleItemProps[]
}
