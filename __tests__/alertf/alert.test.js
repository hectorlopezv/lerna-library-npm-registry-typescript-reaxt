import React from 'react'
import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'

import {Alertf} from '@compensar-globant-projectos/alertf/lib/alertf'
describe('testing suite', () => {
  it('testing unit alertf', () => {
    render(<Alertf mensaje="hector" />)

    render(<Alertf mensaje="hector" type="info" />)
    render(<Alertf mensaje="hector" type="success" />)
    render(<Alertf mensaje="hector" type="warning" />)
    render(<Alertf mensaje="hector" type="danger" />)
    expect(screen.queryAllByText('hector')).toHaveLength(5)
  })
})
