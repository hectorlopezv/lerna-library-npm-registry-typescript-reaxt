import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Phase1} from '@compensar-globant-projectos/phase1'

export default {
  title: 'components/Phase1',
  component: Phase1,
  argTypes: {
    className: {
      name: 'className',
      type: {name: 'string', required: false},
      defaultValue: '',
      description: 'className of container',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: 'className'},
      },
      control: {
        type: 'text',
      },
    },
    phase: {
      name: 'phase',
      type: {name: 'number', required: true},
      defaultValue: 1,
      description: 'depending on phase(1,2) interface changes',
      table: {
        type: {summary: 'number'},
        defaultValue: {summary: 1},
      },
      control: {
        type: 'number',
        min: 1,
        max: 2,
      },
    },
  },
} as ComponentMeta<typeof Phase1>

const Template: ComponentStory<typeof Phase1> = args => (
  <Phase1 {...args}>
    <p>hello im hector</p>
    <p>hello im andres</p>
  </Phase1>
)

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
