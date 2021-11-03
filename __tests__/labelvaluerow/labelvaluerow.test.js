import React from 'react'
import {render, screen} from '@testing-library/react'
import {LabelValue} from '@compensar-globant-projectos/labelvalue/lib/labelvalue'
import {LabelValueRow} from '@compensar-globant-projectos/labelvaluerow/lib/labelvaluerow'
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
      <LabelValueRow
        key={`labelValueRow_1`}
        label={'hector'}
        value={`${'CC'} ${'1073565411'}`}
        concealable={true}
        styles="labelValueRow--first labelValueRow--last"
        delta={0}
      >
        <LabelValue
          key={`labelValue_1`}
          dataColumn={dataAfiliado}
          stylesColumn={'col-sm-12 labelValue__spacing'}
          subColumns={true}
        />
      </LabelValueRow>,
    )
    expect(screen.getByText('hector')).toBeInTheDocument()
    expect(screen.getByText(`${'CC'} ${'1073565411'}`)).toBeInTheDocument()
    expect(screen.getByText(`Estado PBS:`)).toBeInTheDocument()
    expect(screen.getByText(`x1`)).toBeInTheDocument()
    expect(screen.getByText(`Derecho a servicios:`)).toBeInTheDocument()
    expect(screen.getByText(`x2`)).toBeInTheDocument()
  })
})
