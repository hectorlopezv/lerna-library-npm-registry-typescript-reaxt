import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import user from '@testing-library/user-event'
import {ModalMessage} from '@compensar-globant-projectos/message/lib/message'
describe('testing suite', () => {
  it('testing unit Messages', async () => {
    let showX = true

    const cancelAction = jest.fn(() => {
      showX = false
    })
    const acceptAction = jest.fn()
    const CloseAction = jest.fn(() => {
      showX = false
    })
    const altAction = jest.fn()
    const {rerender} = render(
      <ModalMessage
        Icono={<div data-testid="icon">Icon</div>}
        IconoColor="--blue"
        CloseAction={CloseAction} //closes modal just changing show props
        buttonsZone={
          <>
            <input
              className="btn btn-link link-orange"
              type="button"
              // eslint-disable-next-line no-undef
              value={'Cancelar'}
              onClick={cancelAction}
            />
            <input
              className="btn-orange"
              type="button"
              // eslint-disable-next-line no-undef
              value={'Aceptar'}
              onClick={acceptAction}
            />
          </>
        }
        buttonsZoneStyle={{
          textAlign: 'center',
          paddingBottom: '10px',
          paddingTop: '10px',
        }}
        show={false}
        msg={'msg'}
        MessageTitle={'title'}
        MainButtonText={'im main btn text'}
      />,
    )
    expect(screen.queryByText(/msg/i)).toBeNull()
    expect(screen.queryByText(/title/i)).toBeNull()
    expect(screen.queryByText(/im main btn text/i)).toBeNull()
    expect(
      screen.queryByRole('button', {
        name: /cancelar/i,
      }),
    ).toBeNull()
    expect(
      screen.queryByRole('button', {
        name: /Aceptar/i,
      }),
    ).toBeNull()
    expect(screen.queryByTestId('xicon')).toBeNull()
    //make modal visible

    rerender(
      <ModalMessage
        Icono={<div data-testid="icon">Icon</div>}
        IconoColor="--blue"
        CloseAction={CloseAction} //closes modal just changing show props
        AltButtonAction={altAction}
        buttonsZone={
          <>
            <input
              className="btn btn-link link-orange"
              type="button"
              // eslint-disable-next-line no-undef
              value={'Cancelar'}
              onClick={cancelAction}
            />
            <input
              className="btn-orange"
              type="button"
              // eslint-disable-next-line no-undef
              value={'Aceptar'}
              onClick={acceptAction}
            />
          </>
        }
        buttonsZoneStyle={{
          textAlign: 'center',
          paddingBottom: '10px',
          paddingTop: '10px',
        }}
        show={showX}
        msg={'msg'}
        MessageTitle={'title'}
        MainButtonText={'im main btn text'}
      />,
    )
    await waitFor(() => expect(screen.queryByText(/msg/i)).toBeInTheDocument())
    expect(screen.queryByText(/title/i)).toBeInTheDocument()
    await waitFor(() =>
      expect(screen.queryByText(/im main btn text/i)).toBeInTheDocument(),
    )
    expect(
      screen.queryByRole('button', {
        name: /cancelar/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('button', {
        name: /Aceptar/i,
      }),
    ).toBeInTheDocument()
    expect(screen.queryByTestId('icon')).toBeInTheDocument()

    //close the modal
    user.click(screen.getByRole('button', {name: /cancelar/i}))
    expect(cancelAction).toHaveBeenCalledTimes(1)
    rerender(
      <ModalMessage
        Icono={<div data-testid="icon">Icon</div>}
        IconoColor="--blue"
        CloseAction={CloseAction} //closes modal just changing show props
        AltButtonAction={altAction}
        buttonsZone={
          <>
            <input
              className="btn btn-link link-orange"
              type="button"
              // eslint-disable-next-line no-undef
              value={'Cancelar'}
              onClick={cancelAction}
            />
            <input
              className="btn-orange"
              type="button"
              // eslint-disable-next-line no-undef
              value={'Aceptar'}
              onClick={acceptAction}
            />
          </>
        }
        buttonsZoneStyle={{
          textAlign: 'center',
          paddingBottom: '10px',
          paddingTop: '10px',
        }}
        show={showX}
        msg={'hello im here'}
        MessageTitle={'hello im title'}
        MainButtonText={'im main btn text'}
      />,
    )
    //assert again when the modal is closed
    expect(screen.queryByText(/msg/i)).toBeNull()
    expect(screen.queryByText(/title/i)).toBeNull()
    expect(screen.queryByText(/im main btn text/i)).toBeNull()
    expect(
      screen.queryByRole('button', {
        name: /cancelar/i,
      }),
    ).toBeNull()
    expect(
      screen.queryByRole('button', {
        name: /Aceptar/i,
      }),
    ).toBeNull()
    expect(screen.queryByTestId('xicon')).toBeNull()
  })
})
