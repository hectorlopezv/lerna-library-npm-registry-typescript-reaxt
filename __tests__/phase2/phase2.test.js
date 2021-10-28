import React from 'react'
import {render, screen} from '@testing-library/react'
import {Phase2} from '@artefactos/phase2/lib/phase2'
describe('testing suite', () => {
  it('testing unit Phase1', async () => {
    const {rerender} = render(
      <Phase2 phase={1} className={'phase'}>
        <p data-testid="phase2child">hello im hector</p>
        <p data-testid="phase2child">hello im andres</p>
      </Phase2>,
    )
    expect(screen.getByTestId('phase-2')).toBeInTheDocument()
    expect(screen.queryAllByTestId('phase2child')).toHaveLength(2)
    rerender(
      <Phase2 phase={2} className={'phase'}>
        <p data-testid="phase2child">hello im hector</p>
        <p data-testid="phase2child">hello im andres</p>
      </Phase2>,
    )
    expect(screen.getByTestId('phase-2')).toBeInTheDocument()
    expect(screen.queryAllByTestId('phase2child')).toHaveLength(2)
  })
})
