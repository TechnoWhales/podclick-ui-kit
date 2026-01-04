import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '@/components/ui/Icon';
import type { IconsId } from '@/components/ui/Icon/types';
import { ICONS } from '@/components/ui/Icon/icons';


/** Аргументы для историй Icon */
interface IconStoryArgs extends ComponentProps<typeof Icon> {
  /** Цвет родительского элемента */
  color: string;
}

const meta: Meta<IconStoryArgs> = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    iconId: { control: 'select', options: ICONS },
    color: { control: 'color', description: 'Цвет родительского элемента' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
  args: {
    iconId: 'home',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    color: '#fff',
  },
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: IconStoryArgs) => {
    const { iconId, width, height, color } = args;

    return (
      <div style={{ color }}>
        <Icon iconId={iconId} width={width} height={height} />
      </div>
    );
  },
};
