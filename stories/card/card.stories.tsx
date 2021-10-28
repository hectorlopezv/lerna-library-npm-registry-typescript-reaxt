import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Card} from '@artefactos/card'
import {Cards} from '@artefactos/cards'
import {HashRouter, Switch, Route} from 'react-router-dom'

export default {
  title: 'components/Card',
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>
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
      {...props}
    >
      <path
        d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z"
        stroke="none"
      />
    </svg>
  )
}
const Template: ComponentStory<typeof Card> = args => {
  const cleanData = () => {
    console.log('cleaning data')
  }
  return (
    <HashRouter>
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
    </HashRouter>
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
