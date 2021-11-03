import React from 'react'
import {render as rtlRender, screen} from '@testing-library/react'
import user from '@testing-library/user-event'

import * as router from 'react-router-dom'
import {Card} from '@compensar-globant-projectos/card/lib/card'
function render(ui, {route = '/', ...renderOptions} = {}) {
  // we'll set our route properly here
  window.history.pushState({}, 'Test page', route)

  function Wrapper({children}) {
    // originally this rendered a Router with a memory history
    // but using the actual BrowserRouter is more correct and
    // is actually easier anyway.
    return (
      <router.BrowserRouter>
        <router.Switch>
          <router.Route path="/">{children}</router.Route>
        </router.Switch>
      </router.BrowserRouter>
    )
  }
  return {
    ...rtlRender(ui, {
      wrapper: Wrapper,
      ...renderOptions,
      // originally this exposed history, but that's really
      // an implementation detail, so we don't recommend that anymore
    }),
  }
}

const CloseIcon = props => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      title="closeIcon"
      strokeWidth={0}
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z"
        stroke="none"
      />
    </svg>
  )
}
describe('testing suite', () => {
  it('testing unit Card', () => {
    window.history.pushState({}, 'Test page', '/')
    const cleanData = jest.fn()
    render(
      <Card
        icon={<CloseIcon className="card__icon" />}
        title={'Reporte de Marcación de Riesgo'}
        link={'/Reporte'}
        linkTitle={'SELECCIONAR'}
        onClick={cleanData}
      />,
    )
    user.click(screen.getByRole('link', {name: /seleccionar/i}))
    expect(
      screen.getByText(/reporte de marcación de riesgo/i),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', {name: /seleccionar/i})).toBeInTheDocument()
    expect(cleanData).toHaveBeenCalledTimes(1)
    expect(screen.getByTitle(/closeicon/i)).toBeInTheDocument()
  })
})
