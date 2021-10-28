import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {LabelValue} from '@artefactos/labelvalue'

export default {
  title: 'components/LabelValue',
  component: LabelValue,
  argTypes: {},
} as ComponentMeta<typeof LabelValue>

const Template: ComponentStory<typeof LabelValue> = args => {
  const dataAfiliado = [
    {
      label: 'Estado PBS:',
      value: '',
    },
    {
      label: 'Derecho a servicios:',
      value: '',
    },
    {
      label: 'Estado en Plan Complementario:',
      value: '',
    },
    {
      label: 'Programa Especial:',
      value: '',
    },
    {
      label: 'Programa para el servicio:',
      value: '',
    },
    {
      label: 'Estado en RS:',
      value: '',
    },
    {
      label: 'Fecha de Nacimiento:',
      value: '',
    },
  ]
  return (
    <LabelValue
      key={`labelValue_1`}
      dataColumn={dataAfiliado}
      stylesColumn={'col-sm-12 labelValue__spacing'}
      subColumns={true}
      {...args}
    />
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
