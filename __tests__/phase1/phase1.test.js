import React from 'react'
import {render, screen} from '@testing-library/react'
import {Phase1} from '@compensar-globant-projectos/phase1/lib/phase1'
describe('testing suite', () => {
  it('testing unit Phase1', async () => {
    const {rerender} = render(
      <Phase1 phase={1} className={'phase'}>
        <p data-testid="phase1child">hello im hector</p>
        <p data-testid="phase1child">hello im andres</p>
      </Phase1>,
    )
    expect(screen.getByTestId('phase-1')).toBeInTheDocument()
    expect(screen.queryAllByTestId('phase1child')).toHaveLength(2)
    rerender(
      <Phase1 phase={2} className={'phase'}>
        <p data-testid="phase1child">hello im hector</p>
        <p data-testid="phase1child">hello im andres</p>
      </Phase1>,
    )
    expect(screen.getByTestId('phase-1')).toBeInTheDocument()
    expect(screen.queryAllByTestId('phase1child')).toHaveLength(2)
  })
})
