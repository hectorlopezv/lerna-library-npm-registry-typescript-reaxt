import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import user from '@testing-library/user-event'
import {ToolTipc} from '@artefactos/tooltip/lib/tooltip'

describe('testing suite', () => {
  it('testing unit Tooltip', async () => {
    const {debug} = render(
      <ToolTipc
        text={'hello im back'}
        isMobile={false}
        icon={'fa fa-info-circle'}
      />,
    )

    expect(screen.getByTestId('toolTip-Icon')).toBeInTheDocument()
    user.click(screen.getByTestId('toolTip-Icon'))
    expect(screen.queryByText(/hello im back/i)).not.toBeNull()
    user.click(document.body)
    await waitFor(() => expect(screen.queryByText(/hello im back/i)).toBeNull())
    expect(screen.queryByText(/hello im back/i)).toBeNull()
  })
})
