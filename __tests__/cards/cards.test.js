import React from 'react'
import {render, screen} from '@testing-library/react'

import {Cards} from '@compensar-globant-projectos/cards/lib/cards'

describe('testing suite', () => {
  it('testing unit Cards', () => {
    render(
      <Cards title="hello im card title" classExtra="im class">
        <div data-testid="hello">hello im Here</div>
        <div data-testid="hello">hello im Here2</div>
      </Cards>,
    )

    expect(
      screen.getByRole('heading', {
        name: /hello im card title/i,
      }),
    ).toHaveTextContent(/hello im card title/i)

    expect(screen.queryAllByTestId(/hello/i)).toHaveLength(2)
  })
})
