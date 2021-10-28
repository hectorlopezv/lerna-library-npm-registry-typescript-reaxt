import React from 'react'
import {DragDropFile} from '@artefactos/draganddropfile'
import {ComponentStory, ComponentMeta} from '@storybook/react'

export default {
  title: 'components/DragDropFile',
  component: DragDropFile,
  argTypes: {},
} as ComponentMeta<typeof DragDropFile>

const Template: ComponentStory<typeof DragDropFile> = args => {
  return (
    <DragDropFile
      accept=".txt, text/plain"
      multiple={false}
      callbackFiles={value => {
        if (value.length > 0) {
          console.log('papa')
        }
      }}
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
