import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Phase2} from '@compensar-globant-projectos/phase2'

export default {
  title: 'components/Phase2',
  component: Phase2,
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
} as ComponentMeta<typeof Phase2>

const Template: ComponentStory<typeof Phase2> = args => (
  <Phase2 {...args}>
    <p>hello im hector</p>
    <p>hello im andres</p>
  </Phase2>
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
