// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import {DragDropFile} from '@compensar-globant-projectos/draganddropfile/lib/dragAndDropFile'
describe('testing suite DragDropFile', () => {
  let file

  beforeEach(() => {
    file = new File(['hello'], 'hello.txt', {type: 'text/plain'})
  })
  it('testing unit DragDropFile', () => {
    const {rerender} = render(
      <DragDropFile
        accept=".txt, text/plain"
        multiple={false}
        callbackFiles={value => {
          if (value.length > 0) {
            console.log('hello')
          }
        }}
      />,
    )
    const input = screen.getByTestId('fileDnD')
    userEvent.upload(screen.getByTestId('fileDnD'), file)

    expect(input.files[0]).toStrictEqual(file)
    expect(input.files.item(0)).toStrictEqual(file)
    expect(input.files).toHaveLength(1)
  })
})

test('upload multiple files', () => {
  const files = [
    new File(['hello'], 'hello.txt', {type: 'text/plain'}),
    new File(['there'], 'there.txt', {type: 'text/plain'}),
  ]

  const {rerender} = render(
    <DragDropFile
      accept=".txt, text/plain"
      multiple
      callbackFiles={value => {
        if (value.length > 0) {
          console.log('hello')
        }
      }}
    />,
  )
  const input = screen.getByTestId('fileDnD')
  userEvent.upload(input, files)

  expect(input.files).toHaveLength(2)
  expect(input.files[0]).toStrictEqual(files[0])
  expect(input.files[1]).toStrictEqual(files[1])
})
