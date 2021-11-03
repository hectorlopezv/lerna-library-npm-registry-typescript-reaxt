import React from 'react'
import {render, screen} from '@testing-library/react'
import {Section} from '@compensar-globant-projectos/section/lib/section'
describe('testing suite', () => {
  it('testing unit Section', () => {
    render(
      <Section
        titleContainer="im hector"
        subTitle={() => <div>im the subTitle</div>}
        className="la tiene"
      >
        <div>andres</div>
        <div>andres2</div>
      </Section>,
    )
    expect(screen.getByText(/im hector/i)).toBeInTheDocument()
    expect(screen.getByText(/im the subTitle/i)).toBeInTheDocument()
    expect(screen.queryAllByText(/andres/i)).toHaveLength(2)
  })
})
