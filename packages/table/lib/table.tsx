import React from 'react'

import {PaginatorArrows} from './paginatorPanel'
import {SliderTable} from '@artefactos/dots'

import SimpleBar from 'simplebar' // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css'

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import {
  focusMyInput,
  setMyInputRef,
  scrollhorizontal,
} from './srollUtils/scrolling'
import './styles.scss'
import debounce from 'lodash.debounce'
export interface fieldType {
  csvformater?: boolean
  formater?: boolean
  dataField: string
  width: string
  title: string
}

export interface ITableProps {
  titleCssOverflowContainer: string
  filename: string
  displayBtnDescarga: boolean
  showTitle?: boolean
  identificator?: string
  isMobile: boolean
  overFlowTable: boolean
  titleTable: string
  data: any
  fields: fieldType[]
  preventScroll?: undefined | boolean | null
  toright?: any
  changePage?: (page: number) => void
  estadoFormater: any //(cell, row, formatExtraData, rowIdx)=> null , string jsx.element
  csvformater: any //(cell, row)=> string | null
}
export interface stateTypes {
  prevScrollBarPosition: number
  percentageScroll: number
  overflowMount: boolean
}

export class Table extends React.Component<ITableProps> {
  onPageChange = (page: number, _: number) => {
    setTimeout(() => {
      if (
        this.props.changePage != null &&
        this.props.changePage !== undefined
      ) {
        this.props.changePage(page)
      }
      this.setState(
        {
          prevScrollBarPosition: 0,
        },
        () => {
          this.previousPosition = 0
          const scrollElement = this.simplebar.getScrollElement()
          const scrollLeftMax =
            scrollElement.scrollWidth - scrollElement.offsetWidth
          const endPoint = scrollLeftMax
          scrollhorizontal(scrollElement, 0, -endPoint)
          if (this.props.toright === null || this.props.toright === undefined)
            focusMyInput(this.myInput, -180, 'start')
        },
      )
    }, 50)
  }

  slideMyTable = (e: any, position: number | string) => {
    //moving with Dots

    e.stopPropagation()

    const scrollElement = this.simplebar.getScrollElement()

    const scrollLeftMax = scrollElement.scrollWidth - scrollElement.offsetWidth

    const midPoint = Math.trunc(scrollLeftMax / 2)
    const endPoint = scrollLeftMax

    if (this.simplebar) {
      switch (position) {
        case 0:
          scrollhorizontal(scrollElement, 0, -endPoint)
          this.previousPosition = position
          break
        case 1:
          if (this.previousPosition !== null && this.previousPosition === 2) {
            scrollhorizontal(scrollElement, 0, -midPoint)
          } else {
            scrollhorizontal(scrollElement, 0, midPoint)
          }
          this.previousPosition = position
          break
        case 2:
          scrollhorizontal(scrollElement, 0, endPoint)
          this.previousPosition = position
          break
        default:
          break
      }
    }
  }

  changeDotPosition = debounce((e: any) => {
    //moving with scrollbar

    const scrollLeft = e.srcElement.scrollLeft

    const scrollLeftMax = e.srcElement.scrollWidth - e.srcElement.offsetWidth

    const percentageScroll = scrollLeft / scrollLeftMax

    if (percentageScroll >= 0 && percentageScroll <= 0.28) {
      this.setState({
        prevScrollBarPosition: 0,
      })
    }

    if (percentageScroll > 0.28 && percentageScroll <= 0.69) {
      this.setState({
        prevScrollBarPosition: 1,
      })
    }
    if (percentageScroll > 0.69) {
      this.setState({
        prevScrollBarPosition: 2,
      })
    }
  }, 300)

  componentDidMount() {
    this.MyTableContainer = document.querySelector(
      `.${this.props.identificator} .react-bs-table.react-bs-table-bordered`,
    )
    let hide = false

    if (this.props.isMobile === true) {
      hide = true
    }
    if (this.MyTableContainer !== undefined && this.MyTableContainer !== null) {
      this.simplebar = new SimpleBar(this.MyTableContainer, {autoHide: hide})
      if (
        this.simplebar !== null &&
        this.simplebar !== undefined &&
        this.simplebar.getScrollElement() !== undefined
      )
        this.simplebar
          .getScrollElement()
          .addEventListener('scroll', this.changeDotPosition)
    }

    const overflowMount = this.isOverflown(
      document.querySelector(this.props.titleCssOverflowContainer),
    )
    this.setState({overflowMount})
  }

  componentWillUnmount() {
    this.simplebar.unMount()
    this.simplebar = null
    this.MyTableContainer = null
    window.removeEventListener('scroll', this.changeDotPosition)
  }

  componentDidUpdate(prevProps: any, _: any) {
    if (this.props.data !== prevProps.data) {
      setTimeout(() => {
        this.setState(
          {
            prevScrollBarPosition: 0,
          },
          () => {
            this.previousPosition = 0
            const scrollElement = this.simplebar.getScrollElement()
            const scrollLeftMax =
              scrollElement.scrollWidth - scrollElement.offsetWidth
            const endPoint = scrollLeftMax
            if (
              this.props.preventScroll === null ||
              this.props.preventScroll === undefined ||
              this.props.preventScroll === false
            ) {
              scrollhorizontal(scrollElement, 0, -endPoint)
            }
          },
        )
      }, 50)
    }
  }

  renderPaginationPanel = (props: any) => {
    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      <div tabIndex={0}>
        <PaginatorArrows {...props} />
      </div>
    )
  }
  isOverflown = (element: HTMLElement | null) => {
    if (element === null) return false
    return (
      element.scrollHeight > element.clientHeight ||
      element.scrollWidth > element.clientWidth
    )
  }
  createCustomExportCSVButton = () => {
    if (this.props.isMobile === false) {
      return <div style={{display: 'none'}}></div>
    }
    const displayToolBar =
      (this.props.isMobile && this.props.overFlowTable) ||
      (this.props.isMobile && this.state.overflowMount)
    return (
      <div
        className={`${
          displayToolBar ? 'redprestadores__btn' : 'display__none'
        }`}
      >
        {displayToolBar && (
          <div className="DotsContainer">
            <SliderTable
              length={3}
              size={'small'}
              position={this.state.prevScrollBarPosition}
              clickable
              positionChangeListener={this.slideMyTable}
            />
          </div>
        )}
      </div>
    )
  }
  //
  simplebar: HTMLElement | any = null
  pagination = false
  previousPosition: number | null = null
  MyTableContainer: HTMLElement | null = null
  myInput: HTMLElement | null = null
  overflowMount = false
  optsDesktop = {
    clearSearch: true,
    noDataText: 'No hay datos Disponibles',
    pageDropDown: false,
    sizePerPage: 10,
    withoutNoDataText: true,
    pageStartIndex: 1,
    hideSizePerPage: true,
    alwaysShowAllBtns: true,
    hidePageListOnlyOnePage: true,
    exportCSVText: 'Descargar',
    onPageChange: this.onPageChange,
    exportCSVBtn: this.createCustomExportCSVButton,
    paginationPanel: this.renderPaginationPanel,
  }
  state: stateTypes = {
    prevScrollBarPosition: 0,
    percentageScroll: 0,
    overflowMount: false,
  }
  public static defaultProps: {
    isMobile: false
    displayBtnDescarga: true
    filename: ''
    showTitle: true
    titleCssOverflowContainer: 'div.react-bs-table-container div.react-bs-table.react-bs-table-bordered div.simplebar-wrapper div.simplebar-mask div.simplebar-offset div.simplebar-content-wrapper'
  }
  public render() {
    return (
      <div
        className={`tableContainer ${this.props.identificator}`}
        ref={ele => setMyInputRef(this, ele)}
      >
        {this.props.showTitle && (
          <p className="tableContainer__Title">{this.props.titleTable}</p>
        )}
        <BootstrapTable
          data={this.props.data}
          options={this.optsDesktop}
          pagination
          exportCSV={this.props.displayBtnDescarga}
          ignoreSinglePage
          scrollTop={'Bottom'}
          csvFileName={this.props.filename}
        >
          {this.props.fields.map((el, id) => {
            if (el.formater && el.csvformater) {
              if (id === 0) {
                return (
                  <TableHeaderColumn
                    isKey={true}
                    key={`Table_${id}`}
                    dataField={el.dataField}
                    width={el.width}
                    dataFormat={this.props.estadoFormater}
                    csvFormat={this.props.csvformater}
                  >
                    {el.title}
                  </TableHeaderColumn>
                )
              }

              return (
                <TableHeaderColumn
                  key={`Table_${id}`}
                  dataField={el.dataField}
                  width={el.width}
                  dataFormat={this.props.estadoFormater}
                  csvFormat={this.props.csvformater}
                >
                  {el.title}
                </TableHeaderColumn>
              )
            } else if (el.formater) {
              if (id === 0) {
                return (
                  <TableHeaderColumn
                    isKey={true}
                    key={`Table_${id}`}
                    dataField={el.dataField}
                    width={el.width}
                    dataFormat={this.props.estadoFormater}
                  >
                    {el.title}
                  </TableHeaderColumn>
                )
              }

              return (
                <TableHeaderColumn
                  key={`Table_${id}`}
                  dataField={el.dataField}
                  width={el.width}
                  dataFormat={this.props.estadoFormater}
                >
                  {el.title}
                </TableHeaderColumn>
              )
            } else if (el.csvformater) {
              if (id === 0) {
                return (
                  <TableHeaderColumn
                    isKey={true}
                    key={`Table_${id}`}
                    dataField={el.dataField}
                    width={el.width}
                    csvFormat={this.props.csvformater}
                  >
                    {el.title}
                  </TableHeaderColumn>
                )
              }

              return (
                <TableHeaderColumn
                  key={`Table_${id}`}
                  dataField={el.dataField}
                  width={el.width}
                  csvFormat={this.props.csvformater}
                >
                  {el.title}
                </TableHeaderColumn>
              )
            } else {
              if (id === 0) {
                return (
                  <TableHeaderColumn
                    isKey={true}
                    key={`Table_${id}`}
                    dataField={el.dataField}
                    width={el.width}
                  >
                    {el.title}
                  </TableHeaderColumn>
                )
              }
              return (
                <TableHeaderColumn
                  key={`Table_${id}`}
                  dataField={el.dataField}
                  width={el.width}
                >
                  {el.title}
                </TableHeaderColumn>
              )
            }
          })}
        </BootstrapTable>
      </div>
    )
  }
}
