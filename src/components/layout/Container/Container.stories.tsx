import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from '@/components/layout/Container/Container';
import { Typography } from '@/components/ui/Typography/Typography';

const meta = {
  title: 'Layout/Container',
  component: Container,
  argTypes: {

    children: { table: { disable: true } },
    width: {
      control: { type: 'number', min: 100, max: 2000, step: 10 },
      description: 'Максимальная ширина контейнера в пикселях',
    },
    padding: {
      control: 'text',
      description: 'Внутренние отступы (CSS padding value)',
    },
  },
  args: {
    width: 800,
    padding: '0',
  },
  decorators: [
    (Story) => (
      <div style={{ 
        outline: '2px dashed var(--color-accent-500)',
        outlineOffset: '4px',
        backgroundColor: 'var(--color-light-900)',
        borderRadius: '4px',
      }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Container {...args}>
      <Typography variant={"regular_text_14"}>
        Этот контейнер имеет ширину {args.width}px и внутренние отступы {args.padding}. 
        Основное назначение контейнера - центрирование контента на странице и ограничение 
        его максимальной ширины для улучшения читаемости. Даже если содержимое очень длинное, 
        оно не будет растягиваться на всю ширину экрана, а останется в пределах установленных границ. 
        Это особенно полезно для больших мониторов, где слишком широкие текстовые блоки 
        сложно воспринимать визуально.
      </Typography>
    </Container>
  ),
  args: {
    children: '',
    width: 800,
    padding: '20px',
  },
};

