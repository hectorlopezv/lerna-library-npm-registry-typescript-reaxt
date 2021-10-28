import React from 'react'
import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'

import {Buttons} from '@artefactos/buttons/lib/buttons'
describe('testing suite', () => {
  it('testing unit show Buttons', () => {
    const {debug, rerender} = render(<Buttons show={[false, false]} />)
    expect(
      screen.queryByRole('button', {
        name: /cleaning function/i,
      }),
    ).toBeNull()
    expect(
      screen.queryByRole('button', {
        name: /generate function/i,
      }),
    ).toBeNull()
    rerender(<Buttons show={[true, false]} />)
    expect(
      screen.queryByRole('button', {
        name: /cleaning function/i,
      }),
    ).toBeInTheDocument()

    rerender(<Buttons show={[true, true]} />)
    expect(
      screen.queryByRole('button', {
        name: /cleaning function/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('button', {
        name: /generate function/i,
      }),
    ).toBeInTheDocument()
  })

  it('testing unit cleanText, generateText depeding on props', () => {
    const {debug, rerender} = render(
      <Buttons
        show={[true, true]}
        cleanMessage="cleaning message"
        generateMessage="generate message"
      />,
    )
    expect(screen.getByDisplayValue(/clean/i)).toHaveDisplayValue(
      'cleaning message',
    )
    expect(screen.getByDisplayValue(/generate/i)).toHaveDisplayValue(
      'generate message',
    )
  })
})
