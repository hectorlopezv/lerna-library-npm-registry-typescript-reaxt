import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Download} from '@compensar-globant-projectos/btndown'

export default {
  title: 'components/Download',
  component: Download,
  argTypes: {
    disabled: {
      name: 'disabled',
      type: {name: 'boolean', required: true},
      defaultValue: false,
      description: 'disable button',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean',
      },
    },
    filename: {
      name: 'filename',
      type: {name: 'string', required: true},
      defaultValue: 'Nombre del reporte.xlsx',
      description: 'filename for .zip or .pdf',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: 'Nombre del reporte.xlsx'},
      },
      control: {
        type: 'text',
      },
    },
    btnMessage: {
      name: 'btnMessage',
      type: {name: 'string', required: true},
      defaultValue: 'btnMessage',
      description: 'btnMessage for .zip or .pdf',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: 'btnMessage'},
      },
      control: {
        type: 'text',
      },
    },
    messageZipPart1: {
      name: 'messageZipPart1',
      type: {name: 'string', required: true},
      defaultValue: 'messageZipPart1',
      description: 'messageZipPart1 for .zip or .pdf',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: 'messageZipPart1/'},
      },
      control: {
        type: 'text',
      },
    },
    messageZipPart2: {
      name: 'messageZipPart2',
      type: {name: 'string', required: true},
      defaultValue: 'messageZipPart2',
      description: 'messageZipPart2 for .zip or .pdf',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: 'messageZipPart2'},
      },
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Download>

const Template: ComponentStory<typeof Download> = args => (
  <Download {...args} querySickLeaves={() => console.log('hello excel')} />
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
