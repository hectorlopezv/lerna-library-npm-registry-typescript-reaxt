import React from 'react'
import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import {Date} from '@artefactos/date/lib/date'
describe('testing suite', () => {
  it('testing unit Date', () => {
    const dateHandler = jest.fn()
    render(
      <Date
        minDateSelector={null}
        maxDateSelector={null}
        disabled={false}
        Date={null}
        handleChange={dateHandler}
        label="datelabel"
      />,
    )

    //check for label to be in the document
    expect(screen.getByText(/datelabel/i)).toHaveTextContent(/datelabel/i)
    expect(screen.getByText(/datelabel/i).textContent).toMatchSnapshot()
    //click to show calendar
    user.click(
      screen.getByRole('presentation', {
        hidden: true,
      }),
    )

    //check month options if visible
    expect(
      screen.getByRole('grid', {
        name: /domingo/i,
      }),
    ).toBeInTheDocument()
    //press calendar
    user.click(screen.getByText(/27/i))

    expect(dateHandler).toHaveBeenCalledTimes(1)
    expect
  })
})
