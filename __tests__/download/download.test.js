import React from 'react'
import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import {Download} from '@artefactos/btndown/lib/download'
describe('testing suite', () => {
  it('testing unit Download', () => {
    const fnListener = jest.fn()
    const {rerender} = render(
      <Download
        messageZipPart1="hello1"
        messageZipPart2="hello2"
        btnMessage="hello"
        filename="filename"
        disabled={false}
        querySickLeaves={fnListener}
      />,
    )
    expect(
      screen.getByRole('heading', {
        name: /hello1 hello2/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByTestId('fileicon')).toBeInTheDocument()
    expect(screen.getByText(/filename/i)).toHaveTextContent(/filename/i)
    user.click(screen.getByTestId('generate'))
    expect(fnListener).toHaveBeenCalled()
    fnListener.mockReset()
    rerender(
      <Download
        messageZipPart1="hello1"
        messageZipPart2="hello2"
        btnMessage="hello"
        filename="filename"
        disabled={true}
        querySickLeaves={fnListener}
      />,
    )
    user.click(screen.getByTestId('generate'))
    expect(fnListener).toHaveBeenCalledTimes(0)
  })
})
