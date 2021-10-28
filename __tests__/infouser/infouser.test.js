import React from 'react'
import {render, screen} from '@testing-library/react'
import {InfoUser} from '@artefactos/infouser/lib/infouser'
describe('testing suite', () => {
  it('testing unit inforUser', async () => {
    const transformUserInfo = jest.fn(() => {
      return [
        {label: 'el label 1', value: 'el value 1'},
        {label: 'el label 2', value: 'el value 2'},
        {label: 'el label 3', value: 'el value 3'},
      ]
    })
    const {debug} = render(
      <InfoUser key="infoUser" DefaultOptions={transformUserInfo()} />,
    )
    expect(screen.queryAllByText(/label/i)).toHaveLength(3)
    expect(screen.queryAllByText(/value/i)).toHaveLength(3)
  })
})
