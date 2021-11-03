import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 15px;
  position: relative;
`
export const MainTitle = styled.h1`
  &&&& {
    text-align: left;
    font: normal normal bold 36px Roboto bold !important;
    @media screen and (device-width: 767px) {
      margin-bottom: 50px;
      text-align: center;
      font: normal normal bold 31px Roboto bold !important;
    }
    @media screen and (max-width: 767px) {
      margin-bottom: 78px;
      text-align: center;
      font: normal normal bold 31px Roboto bold !important;
    }
  }
`

export const SubTitle = styled.h3`
  &&& {
    text-align: left;
    font: normal normal 300 16px Roboto;
    letter-spacing: 0px;
    color: #999;
    margin-top: 19px;
    margin-bottom: 30px;
    @media screen and (max-width: 601px) {
      margin-bottom: 77px;
    }

    @media screen and (max-width: 767px) {
      margin-bottom: 55px;
    }
  }
`
interface sectionProps {
  className?: string
}
export const Section = styled.section.attrs<sectionProps>(prop => ({
  className: prop['className'],
}))``
