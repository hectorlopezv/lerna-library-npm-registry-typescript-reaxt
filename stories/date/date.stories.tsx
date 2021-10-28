import React, {useState} from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Date} from '@artefactos/date'
import moment from 'moment'
export default {
  title: 'components/Date',
  component: Date,
  argTypes: {
    label: {
      name: 'label',
      type: {name: 'string', required: false},
      defaultValue: 'hello im label',
      description: 'change the label',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: 'hello im label'},
      },
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Date>

const Template: ComponentStory<typeof Date> = args => {
  const [date, setdate] = useState(null)
  const dateHandler = value => {
    setdate(moment(value))
  }
  return (
    <Date
      minDateSelector={null}
      maxDateSelector={null}
      disabled={false}
      Date={date}
      handleChange={dateHandler}
      {...args}
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
