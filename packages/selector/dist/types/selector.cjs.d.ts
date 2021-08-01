import React from 'react'
interface optionInterface {
  value: string
  label: string
}
interface SelectProps {
  customStyles?: any
  label: string
  disabled: boolean
  placeholder: string
  Options?: optionInterface[]
  value?: string
  type?: string
  onClick?: (args: any, type: string) => void
  className?: string
}
declare const Selector: React.FC<SelectProps>
export {optionInterface, SelectProps, Selector}
//# sourceMappingURL=selector.cjs.d.ts.map