import React from 'react'
import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'

import {Table} from '@compensar-globant-projectos/table/lib/table'
describe('testing suite', () => {
  it('testing unit Table', () => {
    const fields = [
      {
        dataField: 'Hora',
        width: '81.57px',
        title: 'x1',
        formater: true,
      },
      {
        dataField: 'Paciente',
        width: '180px',
        title: 'x2',
      },
      {
        dataField: 'Identificacion',
        width: '120.5px',
        title: 'x3',
      },
      {
        dataField: 'Telefono',
        width: '98.5px',
        title: 'x4',
      },
      {
        dataField: 'Prg',
        width: '94px',
        title: 'x5',
      },
      {
        dataField: 'Prn',
        width: '84px',
        title: 'x6',
      },
      {
        dataField: 'Apagar',
        width: '120px',
        title: 'x7',
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
    const {debug, rerender} = render(
      <Table
        overFlowTable={false}
        isMobile={false}
        filename={'filename'}
        displayBtnDescarga={false}
        titleTable={'title table'}
        titleCssOverflowContainer={'titlecssoverflow'}
        data={data}
        fields={fields}
        csvformater={csvFormatterF}
        estadoFormater={estadoFormater}
        showTitle={true}
      />,
    )
    expect(screen.getByText(/title table/i)).toBeInTheDocument()
    fields.forEach(el => {
      expect(screen.getByText(el.title)).toBeInTheDocument()
    })
    expect(screen.queryAllByText(/Hora/i)).toHaveLength(10)
    //no testing of paginator has been already donde in __test__/paginator
    //no testing of dots has been already donde in __test__/dots
    rerender(
      <Table
        overFlowTable={false}
        isMobile={false}
        filename={'filename'}
        displayBtnDescarga={false}
        titleTable={'title table'}
        titleCssOverflowContainer={'titlecssoverflow'}
        data={data}
        fields={fields}
        csvformater={csvFormatterF}
        estadoFormater={estadoFormater}
        showTitle={false}
      />,
    )
    expect(screen.queryByText(/title table/i)).toBeNull()
  })
})
