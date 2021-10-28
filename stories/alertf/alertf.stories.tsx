import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Alertf} from '@artefactos/alertf'

export default {
  title: 'components/Alertf',
  component: Alertf,
  argTypes: {
    mensaje: {
      name: 'mensaje',
      type: {name: 'string', required: true},
      defaultValue: 'hola soy un mensaje',
      description: 'change the message of the alert',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: 'change the message of the alert'},
      },
      control: {
        type: 'text',
      },
    },
    type: {
      name: 'type',
      type: {name: 'enum', required: true},
      defaultValue: 'info',
      description: 'changes the icons of the alertf',
      table: {
        type: {summary: '[info, success, warning, danger]'},
        defaultValue: {summary: 'info'},
      },

      control: {
        type: 'select',
        options: ['info', 'success', 'warning', 'danger'], // An array of serializable values
      },
    },
    className: {
      name: 'className',
      type: {name: 'string', required: false},
      defaultValue: '',
      description: 'className for the Alert Container',
      table: {
        type: {summary: ''},
        defaultValue: {summary: ''},
      },
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Alertf>

const Template: ComponentStory<typeof Alertf> = args => <Alertf {...args} />

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
