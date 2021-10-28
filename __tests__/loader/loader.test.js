import React from 'react'
import {render, screen} from '@testing-library/react'
import {Loader} from '@artefactos/loader/lib/loader'
describe('testing suite', () => {
  it('testing unit Loader', () => {
    const {rerender} = render(<Loader loading={1} noBack={1} />)
    expect(screen.getByTestId('spinningLoader')).toBeInTheDocument()
    rerender(<Loader loading={0} noBack={0} />)
    expect(screen.queryByTestId('spinningLoader')).toBeNull()
  })
})
