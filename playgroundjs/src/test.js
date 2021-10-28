import React, {useState} from 'react'
import {Smilef} from '@artefactos/smilef'
import {Alertf} from '@artefactos/alertf'
import {Buttons} from '@artefactos/buttons'
import {SliderTable} from '@artefactos/dots'
import {Card} from '@artefactos/card'
import {Cards} from '@artefactos/cards'
import {Date} from '@artefactos/date'
import {Download} from '@artefactos/btndown'
import {Loader} from '@artefactos/loader'
import {ToolTipc} from '@artefactos/tooltip'
import {RadioHv} from '@artefactos/radio'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import moment from 'moment'
import {Phase1} from '@artefactos/phase1'
import {Phase2} from '@artefactos/phase2'
import {InfoUser} from '@artefactos/infouser'
import {LabelValue} from '@artefactos/labelvalue'
import {LabelValueRow} from '@artefactos/labelvaluerow'
import {Selector} from '@artefactos/selector'
import {Paginator} from '@artefactos/paginator'
import {ModalMessage} from '@artefactos/message'
import {Section} from '@artefactos/section'
import {FilterSelect} from '@artefactos/filter'
import {Table} from '@artefactos/table'
import {PdfFile} from '@artefactos/pdf'
import {FileList} from '@artefactos/filelist'
import {DragDropFile} from '@artefactos/draganddropfile'
function SvgComponent(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
        stroke="none"
      />
    </svg>
  )
}
const CloseIcon = props => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      title="closeIcon"
      {...props}
    >
      <path
        d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z"
        stroke="none"
      />
    </svg>
  )
}
const Test = () => {
  const [selectRadio, setselectRadio] = useState(null)
  const [valueSelect, setvalueSelect] = useState(null)
  const selectHandler = e => {
    console.log(e)
    setvalueSelect({...e})
  }

  const cleanData = () => {
    console.log('cleaning data')
  }
  const [date, setdate] = useState(null)
  const dateHandler = value => {
    console.log('entro')
    setdate(moment(value))
  }

  const selectedRadioHandler = radio => {
    if (radio) {
      setselectRadio(radio)
    }
  }
  const transformUserInfo = () => {
    return [
      {label: 'el label 1', value: 'el value 1'},
      {label: 'el label 2', value: 'el value 2'},
      {label: 'el label 3', value: 'el value 3'},
    ]
  }
  const dataAfiliado = [
    {
      label: 'Estado PBS:',
      value: 'x1',
    },
    {
      label: 'Derecho a servicios:',
      value: 'x2',
    },
    {
      label: 'Estado en Plan Complementario:',
      value: 'x3',
    },
    {
      label: 'Programa Especial:',
      value: 'x4',
    },
    {
      label: 'Programa para el servicio:',
      value: 'x5',
    },
    {
      label: 'Estado en RS:',
      value: 'x6',
    },
    {
      label: 'Fecha de Nacimiento:',
      value: 'x7',
    },
  ]
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
  const [selecteSite, setselecteSite] = useState({
    // eslint-disable-next-line no-undef
    value: 'title placeholder',
  })
  const [title, settitle] = useState(selecteSite.value)
  const handleSelect = e => {
    setselecteSite({...e})
    settitle(e.value)
  }
  const fields = [
    {
      dataField: 'Hora',
      width: '81.57px',
      title: 'Hora',
      formater: true,
    },
    {
      dataField: 'Paciente',
      width: '180px',
      title: 'Paciente',
    },
    {
      dataField: 'Identificacion',
      width: '120.5px',
      title: 'Identificación',
    },
    {
      dataField: 'Telefono',
      width: '98.5px',
      title: 'Teléfono',
    },
    {
      dataField: 'Prg',
      width: '94px',
      title: 'Programa',
    },
    {
      dataField: 'Prn',
      width: '84px',
      title: 'Prn.',
    },
    {
      dataField: 'Apagar',
      width: '120px',
      title: 'A Pagar',
      formater: true,
      csvformater: true,
    },
  ]
  const dataTemplate = {
    Apagar: 'pagar',
    Prn: 'Prn',
    Prg: 'Prg',
    Telefono: 'Telefono',
    Identificacion: 'Identificacion',
    Paciente: 'Paciente',
    Hora: 'Hora',
  }
  const range = (start, end, length = end - start + 1) =>
    Array.from({length}, (_, i) => start + i)

  const data = [...range(1, 15)].map(el => {
    return {
      ...dataTemplate,
    }
  })
  const csvFormatterF = (cell, row) => {
    const currencyFormat = cell
    return currencyFormat
  }

  const estadoFormater = (cell, row, formatExtraData, rowIdx) => {
    if (row.Hora !== cell) {
      const number = cell
      const currencyFormat = number
      return <span>{currencyFormat}</span>
    }
    if (row.Hora === cell) {
      return <span>{`${cell}`}</span>
    }
  }
  const dataBase64 = `JVBERi0xLjINJeLjz9MNCjMgMCBvYmoNPDwgDS9MaW5lYXJpemVkIDEgDS9PIDUgDS9IIFsgNzYwIDE1NyBdIA0vTCAzOTA4IA0vRSAzNjU4IA0vTiAxIA0vVCAzNzMxIA0+PiANZW5kb2JqDSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4cmVmDTMgMTUgDTAwMDAwMDAwMTYgMDAwMDAgbg0KMDAwMDAwMDY0NCAwMDAwMCBuDQowMDAwMDAwOTE3IDAwMDAwIG4NCjAwMDAwMDEwNjggMDAwMDAgbg0KMDAwMDAwMTIyNCAwMDAwMCBuDQowMDAwMDAxNDEwIDAwMDAwIG4NCjAwMDAwMDE1ODkgMDAwMDAgbg0KMDAwMDAwMTc2OCAwMDAwMCBuDQowMDAwMDAyMTk3IDAwMDAwIG4NCjAwMDAwMDIzODMgMDAwMDAgbg0KMDAwMDAwMjc2OSAwMDAwMCBuDQowMDAwMDAzMTcyIDAwMDAwIG4NCjAwMDAwMDMzNTEgMDAwMDAgbg0KMDAwMDAwMDc2MCAwMDAwMCBuDQowMDAwMDAwODk3IDAwMDAwIG4NCnRyYWlsZXINPDwNL1NpemUgMTgNL0luZm8gMSAwIFIgDS9Sb290IDQgMCBSIA0vUHJldiAzNzIyIA0vSURbPGQ3MGY0NmM1YmE0ZmU4YmQ0OWE5ZGQwNTk5YjBiMTUxPjxkNzBmNDZjNWJhNGZlOGJkNDlhOWRkMDU5OWIwYjE1MT5dDT4+DXN0YXJ0eHJlZg0wDSUlRU9GDSAgICAgIA00IDAgb2JqDTw8IA0vVHlwZSAvQ2F0YWxvZyANL1BhZ2VzIDIgMCBSIA0vT3BlbkFjdGlvbiBbIDUgMCBSIC9YWVogbnVsbCBudWxsIG51bGwgXSANL1BhZ2VNb2RlIC9Vc2VOb25lIA0+PiANZW5kb2JqDTE2IDAgb2JqDTw8IC9TIDM2IC9GaWx0ZXIgL0ZsYXRlRGVjb2RlIC9MZW5ndGggMTcgMCBSID4+IA1zdHJlYW0NCkiJYmBg4GVgYPrBAAScFxiwAQ4oLQDE3FDMwODHwKkyubctWLfmpsmimQ5AEYAAAwC3vwe0DWVuZHN0cmVhbQ1lbmRvYmoNMTcgMCBvYmoNNTMgDWVuZG9iag01IDAgb2JqDTw8IA0vVHlwZSAvUGFnZSANL1BhcmVudCAyIDAgUiANL1Jlc291cmNlcyA2IDAgUiANL0NvbnRlbnRzIDEwIDAgUiANL01lZGlhQm94IFsgMCAwIDYxMiA3OTIgXSANL0Nyb3BCb3ggWyAwIDAgNjEyIDc5MiBdIA0vUm90YXRlIDAgDT4+IA1lbmRvYmoNNiAwIG9iag08PCANL1Byb2NTZXQgWyAvUERGIC9UZXh0IF0gDS9Gb250IDw8IC9UVDIgOCAwIFIgL1RUNCAxMiAwIFIgL1RUNiAxMyAwIFIgPj4gDS9FeHRHU3RhdGUgPDwgL0dTMSAxNSAwIFIgPj4gDS9Db2xvclNwYWNlIDw8IC9DczUgOSAwIFIgPj4gDT4+IA1lbmRvYmoNNyAwIG9iag08PCANL1R5cGUgL0ZvbnREZXNjcmlwdG9yIA0vQXNjZW50IDg5MSANL0NhcEhlaWdodCAwIA0vRGVzY2VudCAtMjE2IA0vRmxhZ3MgMzQgDS9Gb250QkJveCBbIC01NjggLTMwNyAyMDI4IDEwMDcgXSANL0ZvbnROYW1lIC9UaW1lc05ld1JvbWFuIA0vSXRhbGljQW5nbGUgMCANL1N0ZW1WIDAgDT4+IA1lbmRvYmoNOCAwIG9iag08PCANL1R5cGUgL0ZvbnQgDS9TdWJ0eXBlIC9UcnVlVHlwZSANL0ZpcnN0Q2hhciAzMiANL0xhc3RDaGFyIDMyIA0vV2lkdGhzIFsgMjUwIF0gDS9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIA0vQmFzZUZvbnQgL1RpbWVzTmV3Um9tYW4gDS9Gb250RGVzY3JpcHRvciA3IDAgUiANPj4gDWVuZG9iag05IDAgb2JqDVsgDS9DYWxSR0IgPDwgL1doaXRlUG9pbnQgWyAwLjk1MDUgMSAxLjA4OSBdIC9HYW1tYSBbIDIuMjIyMjEgMi4yMjIyMSAyLjIyMjIxIF0gDS9NYXRyaXggWyAwLjQxMjQgMC4yMTI2IDAuMDE5MyAwLjM1NzYgMC43MTUxOSAwLjExOTIgMC4xODA1IDAuMDcyMiAwLjk1MDUgXSA+PiANDV0NZW5kb2JqDTEwIDAgb2JqDTw8IC9MZW5ndGggMzU1IC9GaWx0ZXIgL0ZsYXRlRGVjb2RlID4+IA1zdHJlYW0NCkiJdJDBTsMwEETv/oo92ohuvXHsJEeggOCEwDfEIU1SCqIJIimIv2dthyJVQpGc0Xo88+xzL5beZ0DgN4IIq6oCzd8sK43amAyK3GKmTQV+J5YXo4VmjDYNYyOW1w8Ez6PQ4JuwfAkJyr+yXNgSSwt+NU+4Kp+rcg4uy9Q1a6MdarLcpgvUeUGh7RBFSLk1f1n+5FgsHJaZttFqA+tKLJhfZ3kEY+VcoHuUfvui2O3kCL9COSwk1Ok3deMEd6srUCVa2Q7Nftf1Ewar5a4nfxuu4v59NcLMGAKXlcjMLtwj1BsTQCITUSK52cC3IoNGDnto6l5VmEv4YAwjO8VWJ+s2DSeGttw/qmA/PZyLu3vY1p9p0MGZIs2iHdZxjwdNSkzedT0pJiW+CWl5H0O7uu2SB1JLn8rHlMkH2F+/xa20Rjp+nAQ39Ec8c1gz7KJ4T3H7uXnuwvSWl178CDAA/bGPlAplbmRzdHJlYW0NZW5kb2JqDTExIDAgb2JqDTw8IA0vVHlwZSAvRm9udERlc2NyaXB0b3IgDS9Bc2NlbnQgOTA1IA0vQ2FwSGVpZ2h0IDAgDS9EZXNjZW50IC0yMTEgDS9GbGFncyAzMiANL0ZvbnRCQm94IFsgLTYyOCAtMzc2IDIwMzQgMTA0OCBdIA0vRm9udE5hbWUgL0FyaWFsLEJvbGQgDS9JdGFsaWNBbmdsZSAwIA0vU3RlbVYgMTMzIA0+PiANZW5kb2JqDTEyIDAgb2JqDTw8IA0vVHlwZSAvRm9udCANL1N1YnR5cGUgL1RydWVUeXBlIA0vRmlyc3RDaGFyIDMyIA0vTGFzdENoYXIgMTE3IA0vV2lkdGhzIFsgMjc4IDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMjc4IDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgDTAgMCAwIDAgMCA3MjIgMCA2MTEgMCAwIDAgMCAwIDAgMCAwIDAgNjY3IDAgMCAwIDYxMSAwIDAgMCAwIDAgMCANMCAwIDAgMCAwIDAgNTU2IDAgNTU2IDYxMSA1NTYgMCAwIDYxMSAyNzggMCAwIDAgODg5IDYxMSA2MTEgMCAwIA0wIDU1NiAzMzMgNjExIF0gDS9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIA0vQmFzZUZvbnQgL0FyaWFsLEJvbGQgDS9Gb250RGVzY3JpcHRvciAxMSAwIFIgDT4+IA1lbmRvYmoNMTMgMCBvYmoNPDwgDS9UeXBlIC9Gb250IA0vU3VidHlwZSAvVHJ1ZVR5cGUgDS9GaXJzdENoYXIgMzIgDS9MYXN0Q2hhciAxMjEgDS9XaWR0aHMgWyAyNzggMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDI3OCAwIDI3OCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCANMCAwIDAgNjY3IDAgMCAwIDAgMCAwIDAgMjc4IDAgMCAwIDAgMCAwIDAgMCA3MjIgMCAwIDAgMCAwIDAgMCAwIA0wIDAgMCAwIDAgMCA1NTYgNTU2IDUwMCA1NTYgNTU2IDI3OCAwIDU1NiAyMjIgMCAwIDIyMiA4MzMgNTU2IDU1NiANNTU2IDAgMzMzIDUwMCAyNzggNTU2IDUwMCAwIDAgNTAwIF0gDS9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIA0vQmFzZUZvbnQgL0FyaWFsIA0vRm9udERlc2NyaXB0b3IgMTQgMCBSIA0+PiANZW5kb2JqDTE0IDAgb2JqDTw8IA0vVHlwZSAvRm9udERlc2NyaXB0b3IgDS9Bc2NlbnQgOTA1IA0vQ2FwSGVpZ2h0IDAgDS9EZXNjZW50IC0yMTEgDS9GbGFncyAzMiANL0ZvbnRCQm94IFsgLTY2NSAtMzI1IDIwMjggMTAzNyBdIA0vRm9udE5hbWUgL0FyaWFsIA0vSXRhbGljQW5nbGUgMCANL1N0ZW1WIDAgDT4+IA1lbmRvYmoNMTUgMCBvYmoNPDwgDS9UeXBlIC9FeHRHU3RhdGUgDS9TQSBmYWxzZSANL1NNIDAuMDIgDS9UUiAvSWRlbnRpdHkgDT4+IA1lbmRvYmoNMSAwIG9iag08PCANL1Byb2R1Y2VyIChBY3JvYmF0IERpc3RpbGxlciA0LjA1IGZvciBXaW5kb3dzKQ0vQ3JlYXRvciAoTWljcm9zb2Z0IFdvcmQgOS4wKQ0vTW9kRGF0ZSAoRDoyMDAxMDgyOTA5NTUwMS0wNycwMCcpDS9BdXRob3IgKEdlbmUgQnJ1bWJsYXkpDS9UaXRsZSAoVGhpcyBpcyBhIHRlc3QgUERGIGRvY3VtZW50KQ0vQ3JlYXRpb25EYXRlIChEOjIwMDEwODI5MDk1NDU3KQ0+PiANZW5kb2JqDTIgMCBvYmoNPDwgDS9UeXBlIC9QYWdlcyANL0tpZHMgWyA1IDAgUiBdIA0vQ291bnQgMSANPj4gDWVuZG9iag14cmVmDTAgMyANMDAwMDAwMDAwMCA2NTUzNSBmDQowMDAwMDAzNDI5IDAwMDAwIG4NCjAwMDAwMDM2NTggMDAwMDAgbg0KdHJhaWxlcg08PA0vU2l6ZSAzDS9JRFs8ZDcwZjQ2YzViYTRmZThiZDQ5YTlkZDA1OTliMGIxNTE+PGQ3MGY0NmM1YmE0ZmU4YmQ0OWE5ZGQwNTk5YjBiMTUxPl0NPj4Nc3RhcnR4cmVmDTE3Mw0lJUVPRg0=`
  const [show, setToogleShowd] = useState(true)
  const [fileSelected, setfileSelected] = useState(null)
  const [errorDragAndDrop, seterrorDragAndDrop] = useState(null)
  const [clearDragAndDrop, setclearDragAndDrop] = useState(false)
  const limpiarData = () => {
    console.log('limpiar data')
  }
  const LeftArrow = ({className = '', title, titleId, ...props}) => {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 512 512"
        className={className}
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
        {...props}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"
          stroke="none"
        />
      </svg>
    )
  }

  const RightArrow = ({className = '', title, titleId, ...props}) => {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 512 512"
        className="prefix__paginadorArrowright"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
        {...props}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"
          stroke="none"
        />
      </svg>
    )
  }

  const pdfs = [
    {
      name: 'resolucion X',
      pdf: 'https://www.orimi.com/pdf-test.pdf',
      icons: <LeftArrow title={undefined} titleId={undefined} />,
    },
    {
      name: 'resolucion Y',
      pdf: 'https://www.orimi.com/pdf-test.pdf',
      icons: <RightArrow title={undefined} titleId={undefined} />,
    },
  ]
  return (
    <div className="App">
      <div>
        <Smilef sad message1="hola este es hello" />
      </div>
      <div></div>
      <div>
        <Alertf mensaje="hello im testing" type="info" />
      </div>
      <Buttons
        show={[true, true]}
        cleanMessage="clean"
        generateMessage="generate"
      />

      <div>
        <SliderTable
          positionChangeListener={() => {
            console.log('hey do somenthing we i change position')
          }}
          clickable={true}
          size={'small'}
          length={3}
          position={0}
        />
      </div>
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Card
                icon={<CloseIcon className="card__icon" />}
                title={'Reporte de Marcación de Riesgo'}
                link={'/Reporte'}
                linkTitle={'SELECCIONAR'}
                onClick={cleanData}
              />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      <div>
        <Date
          minDateSelector={null}
          maxDateSelector={null}
          disabled={false}
          Date={date}
          handleChange={dateHandler}
          label="datelabel"
          tooltip={() => (
            <div>
              <p>im tooltip</p>
            </div>
          )}
        />
      </div>
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Cards title="title cards container" classExtra="extraClass">
                <>
                  <Card
                    icon={<CloseIcon className="card__icon" />}
                    title={'Consulta de Riesgos'}
                    link={'/Consulta'}
                    linkTitle={'SELECCIONAR'}
                    onClick={cleanData}
                  />
                  <Card
                    icon={<CloseIcon className="card__icon" />}
                    title={'Reporte de Marcación de Riesgo'}
                    link={'/Reporte'}
                    linkTitle={'SELECCIONAR'}
                    onClick={cleanData}
                  />
                </>
              </Cards>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      <div>
        <Download
          filename="hector"
          messageZipPart1="hello1"
          messageZipPart2="hello2"
          disabled={false}
          btnMessage={'message'}
          querySickLeaves={() => console.log('hello excel')}
        />
      </div>
      <div style={{position: 'relative', marginBottom: '70px'}}>
        <Loader loading={1} noBack={1} />
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '200px',
          position: 'relative',
        }}
      >
        <ToolTipc
          text={'hello im back'}
          isMobile={false}
          icon={'fa fa-info-circle'}
        />
      </div>
      <div style={{marginTop: '10px'}}>
        <RadioHv
          label={'hello im label'}
          messages={['Paciente', 'Autorizacion']}
          selectedRadioHandler={selectedRadioHandler}
          selectedRadio={selectRadio}
        />
      </div>
      <div style={{marginTop: '113px', padding: '40px'}}>
        <Phase1 phase={1} className={'phase'}>
          <p>hello im hector</p>
          <p>hello im andres</p>
        </Phase1>
      </div>
      <div style={{marginTop: '113px', padding: '40px'}}>
        <Phase2 phase={1} className={'phase'}>
          <p>hello im hector</p>
          <p>hello im andres</p>
        </Phase2>
      </div>
      <div>
        <InfoUser key="infoUser" DefaultOptions={transformUserInfo()} />
      </div>

      <div>
        <LabelValue
          key={`labelValue_1`}
          dataColumn={dataAfiliado}
          stylesColumn={'col-sm-12 labelValue__spacing'}
          subColumns={true}
        />
      </div>

      <div>
        <LabelValueRow
          key={`labelValueRow_1`}
          label={'hector'}
          value={`${'CC'} ${'1073565411'}`}
          concealable={true}
          styles="labelValueRow--first labelValueRow--last"
          delta={0}
        >
          <div tabIndex={0}>
            <LabelValue
              key={`labelValue_1`}
              dataColumn={dataAfiliado}
              stylesColumn={'col-sm-12 labelValue__spacing'}
              subColumns={true}
            />
          </div>
        </LabelValueRow>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
          width: '100%',
        }}
      >
        <Selector
          disabled={false}
          label={'hector'}
          placeholder={'placeholder'}
          Options={[
            {label: 'hola', value: 'value1'},
            {label: 'hola2', value: 'value2'},
          ]}
          onClick={selectHandler}
          value={valueSelect ? valueSelect.value : 'placeholder'}
        />
      </div>

      <div>
        <Paginator
          changePage={cpage => changePage(cpage)}
          size={original.length}
          limit={10}
          currentPage={currentPage}
        >
          {filteredData?.map((el, index) => {
            return (
              <div data-testid="testitem">
                <Download
                  filename={el.Nombre}
                  messageZipPart1=""
                  messageZipPart2=""
                  disabled={false}
                  btnMessage={el.Nombre}
                  querySickLeaves={() => ZipDescargaHandler(el.Url, el.Nombre)}
                  key={index}
                />
              </div>
            )
          })}
        </Paginator>
      </div>
      <div>
        <ModalMessage
          Icono={<SvgComponent />}
          IconoColor="--blue"
          CloseAction={() => console.log('unidir X action')}
          AltButtonAction={() => console.log('alt btn action')}
          buttonsZone={
            <>
              <input
                className="btn btn-link link-orange"
                type="button"
                // eslint-disable-next-line no-undef
                value={'Cancelar'}
                onClick={() => console.log('cancelar')}
                onKeyDown={() => console.log('cancelar')}
                tabIndex={0}
              />
              <input
                className="btn-orange"
                type="button"
                // eslint-disable-next-line no-undef
                value={'Aceptar'}
                onClick={() => {
                  console.log('aceptar')
                }}
                tabIndex={0}
                onKeyDown={() => {
                  console.log('aceptar')
                }}
              />
            </>
          }
          buttonsZoneStyle={{
            textAlign: 'center',
            paddingBottom: '10px',
            paddingTop: '10px',
          }}
          show={false}
          msg={'hello im here'}
          MessageTitle={'hello im title'}
          MainButtonText={'im main btn text'}
        />
      </div>

      <div>
        <Section
          titleContainer="im hector"
          subTitle={() => <div>im the subTitle</div>}
          className="la tiene"
        >
          <div>andres</div>
          <div>andres2</div>
        </Section>
      </div>
      <div>
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
        />
      </div>
      <div style={{marginTop: '50px'}}>
        <Table
          overFlowTable={false}
          isMobile={false}
          filename={'filename'}
          displayBtnDescarga={false}
          titleTable={'title table'}
          titleCssOverflowContainer={'titlecssoverflow'}
          data={data}
          fields={fields}
          csvformater={csvFormatterF}
          estadoFormater={estadoFormater}
          showTitle={true}
        />
      </div>
      <div id="prueba_pdf"></div>
      <div>
        <PdfFile
          NombrePdf={'nombre.pdf'}
          dataUrl={
            'https://s2.q4cdn.com/498544986/files/doc_downloads/test.pdf'
          }
          base64={dataBase64}
          setToogleShow={() => setToogleShowd(x => !x)}
          domElementName={'#prueba_pdf'}
          ToogleShow={show}
        />
      </div>

      <div className="DotsContainer">
        <FileList pdfs={pdfs} title="hector" />
      </div>

      <div>
        <DragDropFile
          accept=".txt, text/plain"
          multiple={false}
          callbackFiles={value => {
            if (value.length > 0) {
              setfileSelected(value[0])
            }
          }}
        />
      </div>
    </div>
  )
}

export default Test
