import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {SliderTable} from '@artefactos/dots'

export default {
  title: 'components/Dots',
  component: SliderTable,
  argTypes: {
    length: {
      name: 'length',
      type: {name: 'number', required: true},
      defaultValue: 1,
      description: 'the height of the dots',
      table: {
        type: {summary: 'number'},
        defaultValue: {summary: 1},
      },
      control: {
        type: 'number',
        min: 1,
        max: 14,
      },
    },
    size: {
      name: 'size',
      type: {name: 'enum', required: true},
      defaultValue: 'small',
      description: 'the size of the doots',
      table: {
        type: {summary: 'enum'},
        defaultValue: {summary: false},
      },
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    clickable: {
      name: 'clickable',
      type: {name: 'boolean', required: true},
      defaultValue: true,
      description: 'make the dots disabled or not',
      table: {
        type: {summary: 'disabling dots'},
        defaultValue: {summary: true},
      },
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof SliderTable>

const Template: ComponentStory<typeof SliderTable> = args => {
  return (
    <div className="DotsContainer">
      <SliderTable
        positionChangeListener={() => {
          console.log('hey do somenthing we i change position')
        }}
        {...args}
      />
    </div>
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
