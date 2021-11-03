import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import {FilterSelect} from '@compensar-globant-projectos/filter/lib/filter'
import user from '@testing-library/user-event'
describe('testing suite input Component', () => {
  it('testing input Component', async () => {
    let title = 'title placeholder'
    const handleSelect = jest.fn(() => {
      title = 'hector' //simulate useState
    })
    const {debug, rerender} = render(
      <FilterSelect
        options={[
          {value: 'Nombre sede', label: 'Nombre sede'},
          {value: 'hector', label: 'hector'},
          {value: 'andresito', label: 'andresito'},
          {value: 'pepe', label: 'pepe'},
        ]}
        onSelected={handleSelect}
        title={title}
        placeholder={'search placeholder'}
        disabled={false}
      />,
    )
    await waitFor(() =>
      expect(
        screen.getByRole('button', {name: /title placeholder/i}),
      ).toBeInTheDocument(),
    )
    expect(screen.queryByText(/search placeholder/i)).toBeNull()
    expect(screen.queryByText(/Nombre sede/i)).toBeNull()
    expect(screen.queryByText(/hector/i)).toBeNull()
    expect(screen.queryByText(/andresito/i)).toBeNull()
    expect(screen.queryByText(/pepe/i)).toBeNull()
    //make options visible
    user.click(screen.getByRole('button', {name: /title placeholder/i}))

    expect(
      screen.getByPlaceholderText(/search placeholder/i),
    ).toBeInTheDocument()
    expect(screen.queryByText(/Nombre sede/i)).toBeInTheDocument()
    expect(screen.queryByText(/hector/i)).toBeInTheDocument()
    expect(screen.queryByText(/andresito/i)).toBeInTheDocument()
    expect(screen.queryByText(/pepe/i)).toBeInTheDocument()
    //fill search box
    user.type(screen.getByPlaceholderText(/search placeholder/i), 'hector')

    expect(screen.getByRole('textbox')).toHaveValue('hector')
    rerender(
      <FilterSelect
        options={[
          {value: 'Nombre sede', label: 'Nombre sede'},
          {value: 'hector', label: 'hector'},
          {value: 'andresito', label: 'andresito'},
          {value: 'pepe', label: 'pepe'},
        ]}
        onSelected={handleSelect}
        title={title}
        placeholder={'search placeholder'}
        disabled={null}
      />,
    )
    //make options visible
    user.click(screen.getByRole('button', {name: /title placeholder/i}))
    //fill search box
    user.type(screen.getByPlaceholderText(/search placeholder/i), 'astronauta')
    expect(screen.queryAllByText(/astronauta/i)).toHaveLength(0) //the options displayed
  })
})
