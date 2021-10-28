import React, {useRef, useState} from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {FilterSelect} from '@artefactos/filter'

export default {
  title: 'components/FilterSelect',
  component: FilterSelect,
  argTypes: {},
} as ComponentMeta<typeof FilterSelect>

const Template: ComponentStory<typeof FilterSelect> = args => {
  const selectorFields = useRef(null)
  const [selecteSite, setselecteSite] = useState({
    // eslint-disable-next-line no-undef
    value: 'hector placeholder',
  })
  const [title, settitle] = useState('p4')
  const handleSelect = e => {
    setselecteSite({...e})
    settitle(e.value)
  }
  return (
    <FilterSelect
      {...args}
      options={[
        {value: 'Nombre sede', label: 'Nombre sede'},
        {value: 'hector', label: 'hector'},
        {value: 'andresito', label: 'andresito'},
        {value: 'pepe', label: 'pepe'},
      ]}
      onSelected={handleSelect}
      placeholder={selecteSite.value || 'placeholder'}
      disabled={null}
    />
  )
}

export const Primary = Template.bind({})
Primary.args = {}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}
