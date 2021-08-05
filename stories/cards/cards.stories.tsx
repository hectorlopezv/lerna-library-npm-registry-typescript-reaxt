import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Cards} from '@libprov/cards'

export default {
  title: 'components/Cards',
  component: Cards,
  argTypes: {
    classExtra: {
      name: 'classExtra',
      type: {name: 'string', required: true},
      defaultValue: '',
      description: 'change className of the Container',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: ''},
      },
      control: {
        type: 'text',
      },
    },
    title: {
      name: 'classExtra',
      type: {name: 'string', required: true},
      defaultValue: '',
      description: 'change className of the Container',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: ''},
      },
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Cards>

const Template: ComponentStory<typeof Cards> = args => (
  <Cards {...args}>
    <div>hello im Here</div>
  </Cards>
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
