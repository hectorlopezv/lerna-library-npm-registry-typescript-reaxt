import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import user from '@testing-library/user-event'
import {Selector} from '@compensar-globant-projectos/selector/lib/selector'
import selectEvent from 'react-select-event'
describe('testing suite', () => {
  it('testing unit Selector', async () => {
    const setValue = jest.fn(() => (value = 'Pizza'))
    let value = null
    const selectHandler = jest.fn(() => {
      setValue()
    })

    const {rerender} = render(
      <form>
        <label htmlFor="food">Food</label>
        <Selector
          disabled={false}
          label={'hector'}
          placeholder={'placeholder'}
          Options={[{label: 'Pizza', value: '1'}]}
          onClick={selectHandler}
          value={value ? value : 'placeholder'}
          inputId="food"
        />
      </form>,
    )
    expect(screen.getByText(/hector/i)).toBeInTheDocument()
    expect(screen.getByText(/placeholder/i)).toBeInTheDocument()
    expect(screen.queryByText(/Pizza/i)).toBeNull()
    selectEvent.openMenu(screen.getByText('placeholder'))
    expect(screen.getByText(/pizza/i)).toBeInTheDocument()
    user.click(screen.getByText(/pizza/i))
    expect(selectHandler).toHaveBeenCalledTimes(1)
    expect(setValue).toHaveBeenCalledTimes(1)
    rerender(
      <form>
        <label htmlFor="food">Food</label>
        <Selector
          disabled={false}
          label={'hector'}
          placeholder={'placeholder'}
          Options={[{label: 'Pizza', value: '1'}]}
          onClick={selectHandler}
          value={value ? value : 'placeholder'}
          inputId="food"
        />
      </form>,
    )

    await waitFor(() => expect(screen.queryByText(/placeholder/i)).toBeNull())
  })
})
