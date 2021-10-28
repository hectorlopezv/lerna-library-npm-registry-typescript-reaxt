import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {ModalMessage} from '@artefactos/message'

export default {
  title: 'components/ModalMessage',
  component: ModalMessage,
  argTypes: {
    show: {
      name: 'show',
      type: {name: 'boolean', required: true},
      defaultValue: false,
      description: 'show the modal',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean',
      },
    },
    msg: {
      name: 'msg',
      type: {name: 'string', required: true},
      defaultValue: 'the message of the modal',
      description: 'the message of the modal',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: false},
      },
      control: {
        type: 'text',
      },
    },
    MessageTitle: {
      name: 'MessageTitle',
      type: {name: 'string', required: true},
      defaultValue: 'title of the modal',
      description: 'the title of the modal',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: false},
      },
      control: {
        type: 'text',
      },
    },
    MainButtonText: {
      name: 'MainButtonText',
      type: {name: 'string', required: true},
      defaultValue: 'Aceptar',
      description: 'textContent of the button',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: false},
      },
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof ModalMessage>
function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
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

const Template: ComponentStory<typeof ModalMessage> = args => (
  <ModalMessage
    Icono={<SvgComponent />}
    IconoColor="--blue"
    CloseAction={() => console.log('unidir X action')}
    buttonsZone={
      <>
        <input
          className="btn btn-link link-orange"
          type="button"
          // eslint-disable-next-line no-undef
          value={'Cancelar'}
          onClick={() => console.log('cancelar')}
        />
        <input
          className="btn-orange"
          type="button"
          // eslint-disable-next-line no-undef
          value={'Aceptar'}
          onClick={() => {
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
    {...args}
  />
)

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
