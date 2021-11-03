import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {FileList} from '@compensar-globant-projectos/filelist'
//Left Arrrow
interface LeftArrowProps {
  title?: string
  titleId?: string
  className?: string
}

const LeftArrow: React.FC<LeftArrowProps> = ({
  className = '',
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & LeftArrowProps) => {
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
//Right Arrow
//Left Arrrow
interface RightArrowProps {
  title?: string
  titleId?: string
  className?: string
}

const RightArrow: React.FC<RightArrowProps> = ({
  className = '',
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & RightArrowProps) => {
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
export default {
  title: 'components/fileList',
  component: FileList,
  argTypes: {},
} as ComponentMeta<typeof FileList>

const Template: ComponentStory<typeof FileList> = args => {
  const pdfs = [
    {
      name: 'resolucion X',
      pdf: 'https://www.orimi.com/pdf-test.pdf',
      icons: <LeftArrow />,
    },
    {
      name: 'resolucion Y',
      pdf: 'https://www.orimi.com/pdf-test.pdf',
      icons: <RightArrow />,
    },
  ]
  return (
    <div className="DotsContainer">
      <FileList pdfs={pdfs} title="hector" />
    </div>
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
