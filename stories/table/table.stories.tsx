import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Table} from '@artefactos/table'

export default {
  title: 'components/Table',
  component: Table,
  argTypes: {
    isMobile: {
      name: 'isMobile',
      type: {name: 'boolean', required: true},
      defaultValue: true,
      description: 'tell the table if its MOBILE or not....',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: true},
      },
      control: {
        type: 'boolean',
      },
    },
    displayBtnDescarga: {
      name: 'displayBtnDescarga',
      type: {name: 'boolean', required: true},
      defaultValue: true,
      description: 'show download button or not',
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
      defaultValue: 'filename',
      description: 'filename of the file downloaded',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: false},
      },
      control: {
        type: 'text',
      },
    },
    titleTable: {
      name: 'titleTable',
      type: {name: 'string', required: true},
      defaultValue: 'titleTable',
      description: 'titleTable of the table',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: false},
      },
      control: {
        type: 'text',
      },
    },
    titleCssOverflowContainer: {
      name: 'titleCssOverflowContainer',
      type: {name: 'string', required: true},
      defaultValue: 'titleCssOverflowContainer',
      description: 'titleCssOverflowContainer of the table',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: false},
      },
      control: {
        type: 'text',
      },
    },
    mensajeBtnDescarga: {
      name: 'mensajeBtnDescarga',
      type: {name: 'string', required: true},
      defaultValue: 'mensajeBtnDescarga',
      description: 'mensajeBtnDescarga of the table',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: false},
      },
      control: {
        type: 'text',
      },
    },
    overFlowTable: {
      name: 'overFlowTable',
      type: {name: 'string', required: true},
      defaultValue: 'boolean',
      description:
        'boolean that specifies if table overflows container, and let the dots be visible',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = args => {
  const fields = [
    {
      dataField: 'Hora',
      width: '81.57px',
      title: 'Hora',
      formater: true,
    },
    {
      dataField: 'Paciente',
      width: '180px',
      title: 'Paciente',
    },
    {
      dataField: 'Identificacion',
      width: '120.5px',
      title: 'Identificación',
    },
    {
      dataField: 'Telefono',
      width: '98.5px',
      title: 'Teléfono',
    },
    {
      dataField: 'Prg',
      width: '94px',
      title: 'Programa',
    },
    {
      dataField: 'Prn',
      width: '84px',
      title: 'Prn.',
    },
    {
      dataField: 'Apagar',
      width: '120px',
      title: 'A Pagar',
      formater: true,
      csvformater: true,
    },
  ]
  const dataTemplate = {
    Apagar: 'pagar',
    Prn: 'Prn',
    Prg: 'Prg',
    Telefono: 'Telefono',
    Identificacion: 'Identificacion',
    Paciente: 'Paciente',
    Hora: 'Hora',
  }
  const range = (start, end, length = end - start + 1) =>
    Array.from({length}, (_, i) => start + i)

  const data = [...range(1, 15)].map(el => {
    return {
      ...dataTemplate,
    }
  })
  const csvFormatterF = (cell, row) => {
    const currencyFormat = cell
    return currencyFormat
  }

  const estadoFormater = (cell, row, formatExtraData, rowIdx) => {
    if (row.Hora !== cell) {
      const number = cell
      const currencyFormat = number
      return <span>{currencyFormat}</span>
    }
    if (row.Hora === cell) {
      return <span>{`${cell}`}</span>
    }
  }

  return (
    <Table
      {...args}
      data={data}
      fields={fields}
      csvformater={csvFormatterF}
      estadoFormater={estadoFormater}
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
