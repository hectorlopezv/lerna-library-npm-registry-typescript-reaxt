import React, {useState} from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {RadioHv} from '@artefactos/radio'

export default {
  title: 'components/RadioHv',
  component: RadioHv,
  argTypes: {
    label: {
      name: 'label',
      type: {name: 'string', required: false},
      defaultValue: 'im label',
      description: 'set the label for radios',
      table: {
        type: {summary: 'label'},
        defaultValue: {summary: 'label im'},
      },
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof RadioHv>

const Template: ComponentStory<typeof RadioHv> = args => {
  const [selectRadio, setselectRadio] = useState(null)

  const selectedRadioHandler = radio => {
    if (radio) {
      setselectRadio(radio)
    }
  }
  return (
    <RadioHv
      {...args}
      messages={['Paciente', 'Autorizacion']}
      selectedRadioHandler={selectedRadioHandler}
      selectedRadio={selectRadio}
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
