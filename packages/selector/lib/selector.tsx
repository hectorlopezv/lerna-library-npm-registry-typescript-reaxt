import React from 'react'
import {Scrollbars} from 'react-custom-scrollbars'
import Select from 'react-select'
import './styles.scss'
const stylesDefault = {
  option: (provided: any, state: any) => () => {
    let bColor = 'transparent'
    let tColor = '#777'
    if (state.isFocused) {
      bColor = '#ff944d'
      tColor = '#fff'
    }

    return {
      ...provided,
      padding: 10,
      paddingLeft: '20px',
      backgroundColor: bColor,
      color: tColor,
      ':hover': {
        backgroundColor: '#ff944d',
        color: '#fff',
      },
    }
  },
  control: (provided: any, state: any) => () => {
    // none of react-select's styles are passed to <Control />

    let border = 'hsl(0, 0%, 80%)'

    if (state.isFocused) {
      border = 'rgb(204, 204, 204)'
    }

    return {
      ...provided,
      outline: '#f60 none 0px !important',
      backgroundColor: '#fff',
      boxShadow: 'none',
      borderColor: border,
      ':active, :hover': {
        borderColor: '#f60',
      },
      width: 265,
      height: 42,
      '@media only screen and (max-width: 767px)': {
        width: 230,
      },
    }
  },
  valueContainer: (provided: any, _: any) => ({
    ...provided,
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = 'opacity 300ms'

    return {
      ...provided,
      opacity,
      transition,
      color: 'rgb(128, 128, 128)',
    }
  },
  indicatorSeparator: (__: any, _: any) => ({
    display: 'none',
  }),
  menu: (provided: any, _: any) => {
    return {
      ...provided,
      width: 265,
      left: '0%',
      '@media only screen and (max-width: 767px)': {
        width: 230,
      },

      '@media only screen and (min-width: 767px)': {
        left: '0%',
      },
      '@media only screen and (device-width: 767px)': {
        left: '0.4%',
      },
      '@media only screen and (min-width: 1200px)': {
        left: '0%',
      },
    }
  },
  placeholder: (provided: any, state: any) => {
    let tColor = '#777'
    if (state.isDisabled) {
      tColor = 'rgba(128, 128, 128, 0.5)'
    }
    return {
      ...provided,
      color: tColor,
    }
  },
  noOptionsMessage: (provided: any, _: any) => {
    return {...provided}
  },
  menuList: (provided: any, _: any) => ({
    ...provided,
  }),
}
const MenuList = (props: any) => {
  const getHeight = () => {
    if (props.children.length === undefined) return 43.1

    return 41.15 * props.children.length
  }
  return (
    <div
      style={{
        height: getHeight(),
      }}
    >
      <Scrollbars renderThumbVertical={renderThumbVertical}>
        {props.children}
      </Scrollbars>
    </div>
  )
}

// scrollbar styles
const renderThumbVertical = ({style, ...props}: any) => {
  return (
    <div
      {...props}
      style={{
        ...style,
        backgroundColor: '#59482d6b',
        borderRadius: '9999999999px',
        width: '6px',
        opacity: '1',
      }}
    />
  )
}
export interface optionInterface {
  value: string
  label: string
}

export interface SelectProps {
  styles?: any
  label: string
  disabled: boolean
  placeholder: string
  Options?: optionInterface[]
  value?: string
  type?: string
  onClick?: (args: any, type: string) => void
  className?: string
  inputId?: string
}

export const Selector: React.FC<SelectProps> = ({
  label = 'label placeholder',
  disabled = false,
  placeholder = 'im placeholder',
  Options = [
    {label: 'hola', value: 'value1'},
    {label: 'hola2', value: 'value2'},
  ],
  onClick = () => null,
  value = 'value1',
  type = 'type selector',
  className = '',
  styles = stylesDefault,
  ...props
}) => {
  return (
    <div className={`${className} selectC_simple`}>
      <div className="">
        <p className="">{label}</p>
      </div>

      <Select
        inputId={props.inputId}
        onChange={args => onClick(args, type)}
        options={Options}
        value={{value: value, label: value}}
        className={'dropDown__menu '}
        aria-labelledby="dropdownCedula"
        placeholder={placeholder}
        isDisabled={disabled}
        noOptionsMessage={() => 'No Hay Valores Disponibles'}
        styles={styles}
        captureMenuScroll={false}
        //maxMenuHeight={300}
        components={{MenuList}}
      />
    </div>
  )
}
