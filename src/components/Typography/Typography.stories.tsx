import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ElementType } from 'react'

import { Typography, type TypographyVariant } from '@/components/Typography/Typography'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  decorators: [
    (Story, context) => {
      const bg = context.globals.backgrounds?.value
      const color = bg === 'light' ? 'var(--color-dark-700)' : 'var(--color-light-100)'

      return (
        <div style={{ color }}>
          <Story />
        </div>
      )
    },
  ],
  argTypes: {
    as: {
      control: 'select',
      options: ['p', 'h1', 'h2', 'h3', 'span', 'div', 'a', 'i', 'strong'],
      description: 'HTML-тег для рендеринга',
    },
  }
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

const TypographyAll = () => {
  const variants = [
    { name: 'Large', variant: 'large', as: 'h1' },
    { name: 'Heading 1', variant: 'h1', as: 'h1' },
    { name: 'Heading 2', variant: 'h2', as: 'h2' },
    { name: 'Heading 3', variant: 'h3', as: 'h3' },
    { name: 'Regular text 16', variant: 'regular_text_16' },
    { name: 'Bold text 16', variant: 'bold_text_16' },
    { name: 'Regular text 14', variant: 'regular_text_14' },
    { name: 'Medium text 14', variant: 'medium_text_14' },
    { name: 'Bold text 14', variant: 'bold_text_14' },
    { name: 'Small text', variant: 'small_text' },
    { name: 'Semibold small text', variant: 'semibold_small_text' },
    { name: 'Regular Link', variant: 'regular_link' },
    { name: 'Small Link', variant: 'small_link' },
    { name: 'Error', variant: 'error' },
    { name: 'Caption', variant: 'caption' },
  ] satisfies Array<{ name: string; variant: TypographyVariant; as?: ElementType }>

  return (
    <>
      {variants.map(({ name, variant, as }) => (
        <div key={variant}>
          <Typography variant={variant} as={as}>
            {name}
          </Typography>
        </div>
      ))}
    </>
  )
}

export const Default: Story = {
  args: {
    children: 'I am Paragraph',
    variant: 'regular_text_14',
  },
  parameters: {
    docs: {
      description: {
        story: 'Стандартный стиль типографики (аналогично варианту RegularText14)',
      },
    },
  },
}

export const Large: Story = {
  args: {
    children: 'I am Large text',
    variant: 'large',
  },
  parameters: {
    docs: {
      description: {
        story: 'Самый крупный текст для главных заголовков',
      },
    },
  },
}

export const Heading1: Story = {
  args: {
    children: 'I am Heading Level 1',
    variant: 'h1',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Заголовок первого уровня для основных разделов',
      },
    },
  },
}

export const Heading2: Story = {
  args: {
    children: 'I am Heading Level 2',
    variant: 'h2',
    as: 'h2',
  },
  parameters: {
    docs: {
      description: {
        story: 'Заголовок второго уровня для подразделов',
      },
    },
  },
}

export const Heading3: Story = {
  args: {
    children: 'I am Heading Level 3',
    variant: 'h3',
    as: 'h3',
  },
  parameters: {
    docs: {
      description: {
        story: 'Заголовок третьего уровня для мелких разделов',
      },
    },
  },
}

export const RegularText16: Story = {
  args: {
    children: 'I am 16px Regular text',
    variant: 'regular_text_16',
  },
  parameters: {
    docs: {
      description: {
        story: 'Обычный текст размером 16px для основного контента',
      },
    },
  },
}

export const RegularBoldText16: Story = {
  args: {
    children: 'I am 16px Regular Bold text',
    variant: 'bold_text_16',
  },
  parameters: {
    docs: {
      description: {
        story: 'Жирный текст размером 16px для выделения в контенте',
      },
    },
  },
}

export const RegularText14: Story = {
  args: {
    children: 'I am 14px Regular text',
    variant: 'regular_text_14',
  },
  parameters: {
    docs: {
      description: {
        story: 'Обычный текст размером 14px',
      },
    },
  },
}

export const RegularMediumText14: Story = {
  args: {
    children: 'I am 14px Regular Medium text',
    variant: 'medium_text_14',
  },
  parameters: {
    docs: {
      description: {
        story: 'Текст среднего начертания размером 14px',
      },
    },
  },
}

export const RegularBoldText14: Story = {
  args: {
    children: 'I am 14px Regular Bold text',
    variant: 'bold_text_14',
  },
  parameters: {
    docs: {
      description: {
        story: 'Жирный текст размером 14px для акцентов',
      },
    },
  },
}

export const SmallText: Story = {
  args: {
    children: 'I am 12px Small text',
    variant: 'small_text',
  },
  parameters: {
    docs: {
      description: {
        story: 'Мелкий текст размером 12px',
      },
    },
  },
}

export const SmallSemiboldText: Story = {
  args: {
    children: 'I am 12px Small Semibold text',
    variant: 'semibold_small_text',
  },
  parameters: {
    docs: {
      description: {
        story: 'Полужирный текст размером 12px',
      },
    },
  },
}

export const RegularLink: Story = {
  args: {
    children: 'I am 14px regular link',
    variant: 'regular_link',
    as: 'a',
    href: '/',
    target: '_blank',
  },
  parameters: {
    docs: {
      description: {
        story: 'Обычная ссылка размером 14px с подчеркиванием',
      },
    },
  },
}

export const SmallLink: Story = {
  args: {
    children: 'I am 12px small link',
    variant: 'small_link',
    as: 'a',
    href: '/',
    target: '_blank',
  },
  parameters: {
    docs: {
      description: {
        story: 'Маленькая ссылка размером 12px',
      },
    },
  },
}

export const Error: Story = {
  args: {
    children: 'Oh no! I am Error',
    variant: 'error',
  },
  parameters: {
    docs: {
      description: {
        story: 'Текст для отображения сообщений об ошибках',
      },
    },
  },
}

export const Caption: Story = {
  args: {
    children: 'I am caption',
    variant: 'caption',
  },
  parameters: {
    docs: {
      description: {
        story: 'Стиль для подписей и вспомогательного текста',
      },
    },
  },
}

export const AllVariants: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: 'Демонстрация всех вариантов типографики',
      },
    },
    controls: { disable: true },
  },
  render: () => <TypographyAll />,
}
