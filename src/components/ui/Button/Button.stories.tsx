import type { Meta, StoryObj, StoryFn, Args, StoryContext } from '@storybook/react-vite'
import { action } from 'storybook/actions';

import { Button } from '@/components/ui/Button/Button'
import { Icon } from '@/components/ui/Icon/Icon'

const ContainerDecorator = (Story: StoryFn<Args>, context: StoryContext<Args>) => {
  const isFullwidth = context.args?.fullwidth;

  return (
    <div
      style={{
        width: '500px',
        padding: '16px',
        border: isFullwidth ? '1px dashed #0257b8ff' : 'none',
      }}
    >
      {isFullwidth && (
        <p
          style={{
            marginBottom: '50px',
            textAlign: 'center',
            color: '#0257b8ff',
            fontSize: '14px',
          }}
        >
          Parent component
        </p>
      )}
      <div style={{ width: isFullwidth ? '100%' : 'fit-content', margin: '0 auto' }}>
        {Story(context.args, context)}
      </div>
    </div>
  );
};

const meta = {
  title: 'Components/Button',
  component: Button,
  decorators: [ContainerDecorator],
  args: {
    onClick: action('Button clicked!'),
  },
  argTypes: {
    variant: { 
      table: {
        defaultValue: { summary: 'primary' }
      }
    },
        iconId: {
      if: { arg: 'variant', eq: 'icon' }
    },
    fullwidth: { control: 'boolean' },
    disabled: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    as: { table: { disable: true } },
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary button',
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Outlined button',
  },
}

export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    variant: 'primary',
  },
}

export const WithIcon: Story = {
  args: {
    children: <Icon iconId={'google'} />,
    variant: 'icon',
  },
}

export const WithIconAndText: Story = {
  args: {
    children: (
      <>
        <Icon iconId={'bookmarkOutline'} />
        Favorites
      </>
    ),
    variant: 'link',
  },
}

export const Fullwidth: Story = {
  args: {
    children: 'Fullwidth button',
    fullwidth: true,
    variant: 'primary',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
    variant: 'primary',
  },
}