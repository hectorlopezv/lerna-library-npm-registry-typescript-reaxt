import React from 'react'
import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'

import {Smilef} from '@compensar-globant-projectos/smilef/lib/smilef'
describe('testing suite', () => {
  it('testing unit smilef', () => {
    const {rerender} = render(<Smilef sad message1="hector" />)
    expect(screen.queryByText('hector')).toHaveTextContent('hector')
    rerender(<Smilef sad={false} message1="andres" />)
    expect(screen.queryByText('andres')).toHaveTextContent('andres')
    rerender(<Smilef sad={false} />)
    expect(screen.queryByTestId('smile')).toBeNull()
  })
})
