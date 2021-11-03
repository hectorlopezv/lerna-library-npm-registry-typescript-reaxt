import React, {useState} from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Paginator} from '@compensar-globant-projectos/paginator'
import {Download} from '@compensar-globant-projectos/btndown'
export default {
  title: 'components/Paginator',
  component: Paginator,
  argTypes: {},
} as ComponentMeta<typeof Paginator>

const Template: ComponentStory<typeof Paginator> = args => {
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
  const [filteredData, setfilteredData] = useState(original)
  const [currentPage, setcurrentPage] = useState(1)
  const changePage = cpage => {
    setcurrentPage(cpage)
    filterData(original, cpage, 10)
  }
  const ZipDescargaHandler = (url, nombre) => {
    console.log('url, nombre', url, nombre)
  }
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

  return (
    <Paginator
      changePage={cpage => changePage(cpage)}
      size={original.length}
      limit={10}
      currentPage={currentPage}
      {...args}
    >
      {filteredData?.map((el, index) => {
        return (
          <Download
            filename={el.Nombre}
            messageZipPart1=""
            messageZipPart2=""
            disabled={false}
            btnMessage={el.Nombre}
            querySickLeaves={() => ZipDescargaHandler(el.Url, el.Nombre)}
            key={index}
          />
        )
      })}
    </Paginator>
  )
}

export const Primary = Template.bind({})
Primary.args = {}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}
