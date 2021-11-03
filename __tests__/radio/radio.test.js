import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import {RadioHv} from '@compensar-globant-projectos/radio/lib/radio'
import React from 'react'

describe('testing suite', () => {
  it('testing unit Radio', async () => {
    const selectedRadioHandler = jest.fn()
    const selectRadio = null
    const {debug} = render(
      <RadioHv
        label={'hello im label'}
        messages={['Paciente', 'Autorizacion']}
        selectedRadioHandler={selectedRadioHandler}
        selectedRadio={selectRadio}
      />,
    )

    user.click(
      screen.getByRole('radio', {
        name: /paciente/i,
      }),
    )
    user.click(
      screen.getByRole('radio', {
        name: /Autorizacion/i,
      }),
    )
    expect(selectedRadioHandler).toHaveBeenCalledTimes(2)
    expect(screen.queryAllByText(/hello im label/i)).toHaveLength(2)
    expect(screen.getByText(/Paciente/i)).toBeInTheDocument()
    expect(screen.getByText(/Autorizacion/i)).toBeInTheDocument()
  })
})
