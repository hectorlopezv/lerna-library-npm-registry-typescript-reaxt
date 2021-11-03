import React from 'react'
import {render, screen} from '@testing-library/react'
import {LabelValue} from '@compensar-globant-projectos/labelvalue/lib/labelvalue'
describe('testing suite', () => {
  it('testing unit labelvaluerow', async () => {
    const dataAfiliado = [
      {
        label: 'Estado PBS:',
        value: 'x1',
      },
      {
        label: 'Derecho a servicios:',
        value: 'x2',
      },
    ]
    render(
      <LabelValue
        key={`labelValue_1`}
        dataColumn={dataAfiliado}
        stylesColumn={'col-sm-12 labelValue__spacing'}
        subColumns={true}
      />,
    )
    expect(screen.getByText(`Estado PBS:`)).toBeInTheDocument()
    expect(screen.getByText(`x1`)).toBeInTheDocument()
    expect(screen.getByText(`Derecho a servicios:`)).toBeInTheDocument()
    expect(screen.getByText(`x2`)).toBeInTheDocument()
  })
})
