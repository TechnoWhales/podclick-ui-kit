import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react'
import { useArgs } from 'storybook/internal/preview-api';

import { RadioGroup, RadioItem } from '@/components/ui/Radio'


const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Radio',
  component: RadioGroup,
    parameters: {
    docs: {
      description: {
        component: 'Компонент радио-кнопок на основе Radix UI. Предоставляет группу взаимно исключающих вариантов выбора с поддержкой различных состояний и кастомизации.'
      }
    }
  },
  argTypes: {
    value: {
      control: 'inline-radio',
      options: ['option1', 'option2', 'option3'],
      description: 'Выбранное значение',
    },
    onValueChange: {
      action: 'valueChanged',
    },
    children: { control: false },
    className: {
      table: {
        disable: true,
      }
    }
  },
  args: {
    value: 'option1'
  }
}

export default meta

type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: (args) => {
    const [, updateArgs] = useArgs()

    return (
      <RadioGroup
        value={args.value}
        onValueChange={(value) => {
          updateArgs({ value })
        }}
      >
        <RadioItem value={'option1'} label={'Option 1'} />
        <RadioItem value={'option2'} label={'Option 2'} />
        <RadioItem value={'option3'} label={'Option 3'} />
      </RadioGroup>
    )
  },
}

export const WithDefaultSelected: Story = {
  parameters: {
    controls: {
      exclude: ['value'],
    },
  },
  render: (args) => {
    const [value, setValue] = useState(args.value || 'option2')

    return (
      <RadioGroup
        value={value}
        onValueChange={(newValue) => {
          setValue(newValue)
          args.onValueChange?.(newValue)
        }}
      >
        <RadioItem value={'option1'} label={'Option 1'} />
        <RadioItem value={'option2'} label={'Option 2 (default)'} />
        <RadioItem value={'option3'} label={'Option 3'} />
      </RadioGroup>
    )
  },
  args: {
    value: 'option2'
  }
}

export const Disabled: Story = {
  parameters: {
    controls: {
      exclude: ['value'],
    },
  },
  render: (args) => {
    const [value, setValue] = useState(args.value || 'option1')

    return (
      <RadioGroup
        value={value}
        onValueChange={(newValue) => {
          setValue(newValue)
          args.onValueChange?.(newValue)
        }}
      >
        <RadioItem value={'option1'} label={'Option 1'} />
        <RadioItem value={'option2'} label={'Option 2 (disabled)'} disabled />
        <RadioItem value={'option3'} label={'Option 3'} />
      </RadioGroup>
    )
  },
}

export const DisabledChecked: Story = {
  name: 'Disabled & Checked',
  parameters: {
    controls: {
      exclude: ['value'],
    },
  },
  render: (args) => {
    const [value, setValue] = useState(args.value || 'option2')

    return (
      <RadioGroup
        value={value}
        onValueChange={(newValue) => {
          setValue(newValue)
          args.onValueChange?.(newValue)
        }}
      >
        <RadioItem value={'option1'} label={'Option 1'} />
        <RadioItem value={'option2'} label={'Option 2 (checked & disabled)'} disabled />
        <RadioItem value={'option3'} label={'Option 3'} />
      </RadioGroup>
    )
  },
  args: {
    value: 'option2'
  }
}
