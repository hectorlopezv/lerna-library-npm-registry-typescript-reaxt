import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {InfoUser} from '@compensar-globant-projectos/infouser'

export default {
  title: 'components/InfoUser',
  component: InfoUser,
  argTypes: {
    sad: {
      name: 'sad',
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
  },
} as ComponentMeta<typeof InfoUser>

const Template: ComponentStory<typeof InfoUser> = args => {
  const transformUserInfo = () => {
    return [
      {label: 'el label 1', value: 'el value 1'},
      {label: 'el label 2', value: 'el value 2'},
      {label: 'el label 3', value: 'el value 3'},
    ]
  }
  return <InfoUser key="infoUser" DefaultOptions={transformUserInfo()} />
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
