import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import user from '@testing-library/user-event'
import {Paginator} from '@compensar-globant-projectos/paginator/lib/paginator'
import {Download} from '@compensar-globant-projectos/btndown/lib/download'
describe('testing suite', () => {
  it('testing unit Paginator', async () => {
    const original = [
      {Url: 'url1', Nombre: 'hector1'},
      {Url: 'url1', Nombre: 'hector1'},
      {Url: 'url1', Nombre: 'hector1'},
      {Url: 'url1', Nombre: 'hector1'},
      {Url: 'url1', Nombre: 'hector1'},
      {Url: 'url1', Nombre: 'hector1'},
      {Url: 'url1', Nombre: 'hector1'},
      {Url: 'url1', Nombre: 'hector1'},
      {Url: 'url1', Nombre: 'hector1'},
      {Url: 'url1', Nombre: 'hector1'},
      {Url: 'url1', Nombre: 'hector1'},
      {Url: 'url1', Nombre: 'hector1'},
      {Url: 'url1', Nombre: 'hector1'},
    ]

    let filteredData = original
    const setfilteredData = jest.fn(currentdata => {
      filteredData = [...currentdata]
    })
    let currentPage = 1
    const setcurrentPage = jest.fn(cpage => {
      currentPage = cpage
    })
    const changePage = jest.fn(cpage => {
      setcurrentPage(cpage)
      filterData(original, cpage, 10)
    })
    const ZipDescargaHandler = jest.fn()
    const filterData = (data, cpage, limit) => {
      const currentData = []

      for (let i = 0; i < limit && limit * (cpage - 1) + i < data.length; i++) {
        currentData.push(data[limit * (cpage - 1) + i])
      }
      if (currentData.length === 0) {
        //calldataZipsStore(2, null, true); //clean data
      } else {
        setfilteredData(currentData)
      }
    }

    const {rerender, debug} = render(
      <Paginator
        changePage={cpage => changePage(cpage)}
        size={original.length}
        limit={10}
        currentPage={currentPage}
      >
        {filteredData?.map((el, index) => {
          return (
            <div data-testid="testitem" key={index}>
              <Download
                filename={el.Nombre}
                messageZipPart1=""
                messageZipPart2=""
                disabled={false}
                btnMessage={el.Nombre}
                querySickLeaves={() => ZipDescargaHandler(el.Url, el.Nombre)}
              />
            </div>
          )
        })}
      </Paginator>,
    )
    expect(
      screen.getByRole('button', {
        name: /right arrow go next page, current page/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', {
        name: /left arrow go previous page, current page/i,
      }),
    ).toBeInTheDocument()
    await waitFor(() =>
      expect(screen.queryAllByTestId('testitem')).toHaveLength(10),
    )
    user.click(
      screen.getByRole('button', {
        name: /right arrow go next page, current page/i,
      }),
    )
    rerender(
      <Paginator
        changePage={cpage => changePage(cpage)}
        size={original.length}
        limit={10}
        currentPage={currentPage}
      >
        {filteredData?.map((el, index) => {
          return (
            <div data-testid="testitem" key={index}>
              <Download
                filename={el.Nombre}
                messageZipPart1=""
                messageZipPart2=""
                disabled={false}
                btnMessage={el.Nombre}
                querySickLeaves={() => ZipDescargaHandler(el.Url, el.Nombre)}
              />
            </div>
          )
        })}
      </Paginator>,
    )
    expect(screen.queryAllByTestId('testitem')).toHaveLength(3)
    expect(setfilteredData).toHaveBeenCalledWith([
      {Nombre: 'hector1', Url: 'url1'},
      {Nombre: 'hector1', Url: 'url1'},
      {Nombre: 'hector1', Url: 'url1'},
    ])
    user.click(
      screen.getByRole('button', {
        name: /left arrow go previous page, current page/i,
      }),
    )
    rerender(
      <Paginator
        changePage={cpage => changePage(cpage)}
        size={original.length}
        limit={10}
        currentPage={currentPage}
      >
        {filteredData?.map((el, index) => {
          return (
            <div data-testid="testitem" key={index}>
              <Download
                filename={el.Nombre}
                messageZipPart1=""
                messageZipPart2=""
                disabled={false}
                btnMessage={el.Nombre}
                querySickLeaves={() => ZipDescargaHandler(el.Url, el.Nombre)}
              />
            </div>
          )
        })}
      </Paginator>,
    )
    expect(screen.queryAllByTestId('testitem')).toHaveLength(10)
    expect(setfilteredData).toHaveBeenCalledWith([
      {Nombre: 'hector1', Url: 'url1'},
      {Nombre: 'hector1', Url: 'url1'},
      {Nombre: 'hector1', Url: 'url1'},
      {Nombre: 'hector1', Url: 'url1'},
      {Nombre: 'hector1', Url: 'url1'},
      {Nombre: 'hector1', Url: 'url1'},
      {Nombre: 'hector1', Url: 'url1'},
      {Nombre: 'hector1', Url: 'url1'},
      {Nombre: 'hector1', Url: 'url1'},
      {Nombre: 'hector1', Url: 'url1'},
    ])
  })
})
