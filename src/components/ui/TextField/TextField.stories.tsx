import type { Meta, StoryObj } from '@storybook/react-vite'

import { TextField } from '@/components/ui'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    value: {
      control: 'text',
      description:
        'Текущее значение поля ввода. Используется для управления содержимым компонента.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    label: {
      control: 'text',
      description: 'Текст метки, отображаемый над полем ввода. Необязательное свойство.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    error: {
      control: 'text',
      description:
        'Текст ошибки, который отображается под полем, если введённые данные некорректны.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    margin: {
      control: 'text',
      description: 'CSS-значение отступов вокруг контейнера поля ввода (например, "10px 0").',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Если true, компонент занимает всю доступную ширину родительского контейнера.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    variant: {
      control: 'select',
      description:
        'Вариант оформления поля ввода. Возможные значения: "fullBorders" — рамка вокруг всего поля, "horizontalBorders" — рамки сверху и снизу.',
      options: ['fullBorders', 'horizontalBorders'],
      table: {
        type: { summary: '"fullBorders" | "horizontalBorders"' },
        defaultValue: { summary: '"fullBorders"' },
      },
    },
    mode: {
      control: 'select',
      description:
        'Режим отображения поля. Возможные значения: "default" — обычное поле, "search" — поле с иконкой поиска, "password" — поле для пароля с возможностью показать/скрыть.',
      options: ['default', 'search', 'password'],
      table: {
        type: { summary: '"default" | "search" | "password"' },
        defaultValue: { summary: '"default"' },
      },
    },
    onChange: {
      action: 'valueChanged',
      description:
        'Обработчик события изменения значения поля. Получает событие изменения для input или textarea.',
      table: {
        type: { summary: '(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void' },
      },
    },
    disabled: {
      control: 'boolean',
      description:
        'Если true, поле становится неактивным и пользователь не может в него вводить данные.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    multiline: {
      control: 'boolean',
      description:
        'Если true, поле рендерится как многострочный textarea. Если false или не задано — как обычный input.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    rows: {
      control: 'number',
      description:
        'Количество видимых строк в textarea. Используется только если multiline = true.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '4' },
      },
      if: { arg: 'multiline', truthy: true }
    },
  },
} satisfies Meta<typeof TextField>

export default meta

type Story = StoryObj<typeof TextField>

export const Default: Story = {
  args: {
    value: '',
    label: 'Email',
    placeholder: 'Epam@epam.com',
  },
}

export const HorizontalBorders: Story = {
  args: {
    value: '',
    label: 'Email',
    placeholder: 'Epam@epam.com',
    variant: 'horizontalBorders',
  },
}

export const Search: Story = {
  args: {
    value: '',
    placeholder: 'Input search',
    mode: 'search',
  },
}

export const Password: Story = {
  args: {
    label: 'Password',
    value: 'test123',
    placeholder: 'Input search',
    mode: 'password',
  },
}

export const Error: Story = {
  args: {
    ...Default.args,
    error: 'Incorrect email',
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}

export const Fullwidth: Story = {
  args: {
    ...Default.args,
    fullWidth: true,
  },
}
