import React from 'react'
import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import {SliderTable} from '@artefactos/dots/lib/dots'
describe('testing suite', () => {
  it('testing unit dots', () => {
    const fnListener = jest.fn()
    const {rerender} = render(
      <SliderTable
        positionChangeListener={fnListener}
        clickable={true}
        size={'small'}
        length={3}
        position={0}
      />,
    )
    //check if creation of dots its correct
    expect(screen.queryAllByRole('button', {name: /dot-holder/i})).toHaveLength(
      3,
    )
    user.click(screen.queryAllByRole('button', {name: /dot-holder/i})[1])
    expect(fnListener).toHaveBeenCalledTimes(1)
    fnListener.mockReset()
    //check if cliclable works
    rerender(
      <SliderTable
        positionChangeListener={fnListener}
        clickable={false}
        size={'small'}
        length={3}
        position={0}
      />,
    )

    expect(
      screen.queryAllByRole('button', {name: /dot-holder/i})[0],
    ).toHaveClass('dot-holder')
    user.click(screen.queryAllByRole('button', {name: /dot-holder/i})[1])
    expect(fnListener).toHaveBeenCalledTimes(0)
  })
})
