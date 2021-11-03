import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Loader} from '@compensar-globant-projectos/loader'

export default {
  title: 'components/Loader',
  component: Loader,
  argTypes: {
    loading: {
      name: 'loading',
      type: {name: 'boolean', required: true},
      defaultValue: true,
      description: 'make the spinner go boom',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: true},
      },
      control: {
        type: 'boolean',
      },
    },
    noBack: {
      name: 'noBack',
      type: {name: 'boolean', required: true},
      defaultValue: false,
      description: 'make the background transparent',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = args => <Loader {...args} />

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
