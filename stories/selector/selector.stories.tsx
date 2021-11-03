import React, {useState} from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Selector} from '@compensar-globant-projectos/selector'

export default {
  title: 'components/Selector',
  component: Selector,
  argTypes: {
    disabled: {
      name: 'disabled',
      type: {name: 'boolean', required: true},
      defaultValue: false,
      description: 'make the face :( --> :)',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean',
      },
    },
    label: {
      name: 'label',
      type: {name: 'string', required: true},
      defaultValue: false,
      description: 'make the face :( --> :)',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: false},
      },
      control: {
        type: 'text',
      },
    },
    placeholder: {
      name: 'placeholder',
      type: {name: 'string', required: true},
      defaultValue: false,
      description: 'make the face :( --> :)',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: false},
      },
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Selector>

const Template: ComponentStory<typeof Selector> = args => {
  const [valueSelect, setvalueSelect] = useState(null)
  const selectHandler = e => {
    console.log(e)
    setvalueSelect({...e})
  }
  return (
    <Selector
      {...args}
      Options={[
        {label: 'hola', value: 'value1'},
        {label: 'hola2', value: 'value2'},
      ]}
      onClick={selectHandler}
      value={valueSelect ? valueSelect.value : args.placeholder}
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
