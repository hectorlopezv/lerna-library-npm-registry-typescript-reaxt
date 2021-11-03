import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Section} from '@compensar-globant-projectos/section'
import {Phase1} from '@compensar-globant-projectos/phase1'
import {Phase2} from '@compensar-globant-projectos/phase2'
export default {
  title: 'components/Section',
  component: Section,
  argTypes: {
    phase: {
      name: 'phase',
      type: {name: 'number', required: true},
      defaultValue: 1,
      description: 'set the actual box that the user its supposed to navigate',
      table: {
        type: {summary: 'number'},
        defaultValue: {summary: 1},
      },
      control: {
        type: 'number',
        min: 1,
        max: 2,
      },
    },

    className: {
      name: 'className',
      type: {name: 'string', required: false},
      defaultValue: 'className',
      description: 'classNAME of the container',
      table: {
        type: {summary: 'className of the container'},
        defaultValue: {summary: 'className'},
      },
      control: {
        type: 'text',
      },
    },
    titleContainer: {
      name: 'titleContainer',
      type: {name: 'string', required: false},
      defaultValue: 'className',
      description: 'classNAME of the container',
      table: {
        type: {summary: 'title Section'},
        defaultValue: {summary: 'className'},
      },
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Section>

const Template: ComponentStory<typeof Section> = args => {
  const setMyInputRef = (context: any, element: any) => {
    if (context) {
      context.myInput = element
    }
  }
  const {phase = 1} = {...args}
  return (
    <Section {...args} subTitle={() => <div>im the subTitle</div>}>
      <Phase1
        className={''}
        phase={phase}
        setRef={ele => setMyInputRef(this, ele)}
      >
        <div>Content of phase1</div>
      </Phase1>

      <Phase2
        className={'phase2'}
        phase={phase}
        setRef={ele => setMyInputRef(this, ele)}
      >
        <div>Content of phase2</div>
      </Phase2>
    </Section>
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
