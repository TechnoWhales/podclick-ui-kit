import type { Meta, StoryObj } from '@storybook/react-vite'

import { SignUpDemo } from '@/components/demo/SignUpDemo'

const meta = {
  title: 'Demo/SignUp',
  component: SignUpDemo,
  parameters: {
    docs: {
      description: {
        component:
          'Демонстрационный пример формы регистрации, собранной из UI-компонентов библиотеки. ' +
          'Компонент используется исключительно для Storybook и не является частью API библиотеки.',
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof SignUpDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <SignUpDemo />,
}

