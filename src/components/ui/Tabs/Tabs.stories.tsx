import type { Meta, StoryObj } from '@storybook/react-vite';

import { TabContent, Tabs, type TabType } from '@/components/ui/Tabs'

const tabsPresets: Record<string, TabType[]> = {
  'profile': [
    { value: 'general', title: 'General information' },
    { value: 'devices', title: 'Devices' },
    { value: 'account', title: 'Account Management' },
    { value: 'payments', title: 'My payments' },
  ],
  'minimal': [
    { value: 'users', title: 'Users' },
    { value: 'photos', title: 'Photos' },
  ],
  'disabled': [
    { value: 'general', title: 'General information' },
    { value: 'devices', title: 'Devices' },
    { value: 'account', title: 'Account Management', disabled: true },
    { value: 'payments', title: 'My payments' },
  ],
  'multiplyDisabled': [
    { value: 'general', title: 'General information' },
    { value: 'devices', title: 'Devices', disabled: true },
    { value: 'account', title: 'Account Management', disabled: true },
    { value: 'payments', title: 'My payments' },
  ],
  'long': [
    { value: 'settings', title: 'User Profile Settings and Preferences' },
    { value: 'security', title: 'Security and Privacy Configuration' },
    { value: 'notifications', title: 'Notification Preferences and Settings' },
  ],
}

const generateTabContent = (tabs: TabType[]) => (
  <>
    {tabs.map((item) => (
      <TabContent key={item.value} value={item.value}>
        <div style={{padding: '20px 0 0', margin: '0 auto', textAlign: 'center'}}>
          <h3 style={{ margin: '0 0 12px 0' }}>{item.title}</h3>
          <p style={{ margin: 0, color: 'var(--color-light-300)' }}>
            Контент вкладки {item.title.toLowerCase()}
          </p>
          {item.disabled && (
            <p style={{ margin: '8px 0 0', color: 'var(--color-accent-300)' }}>
              Эта вкладка отключена в настройках
            </p>
          )}
        </div>
      </TabContent>
    ))}
  </>
)

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    tabs: {
      control: false,
      description: 'Набор вкладок',
    },
    defaultValue: {
      control: 'text',
      description: 'Активная вкладка по умолчанию',
      if: { arg: 'tabs' },
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA-label для доступности',
      defaultValue: 'Navigation tabs',
    },
    children: {
      description: 'Содержимое вкладок',
      control: false,
      table: {
        type: {
          summary: 'ReactNode',
          detail: 'Компоненты TabContent для каждой вкладки',
        },
      },
    },
  },
  args: {
    tabs: tabsPresets['profile'],
    defaultValue: 'general',
    ariaLabel: 'Navigation tabs',
  },
  render: (args) => {
    const selectedTabs = typeof args.tabs === 'string' 
      ? tabsPresets[args.tabs] 
      : args.tabs
    
    return (
      <div style={{ width: '800px' }}>
        <Tabs 
          {...args} 
          tabs={selectedTabs}
          defaultValue={args.defaultValue || selectedTabs[0]?.value}
        >
          {generateTabContent(selectedTabs)}
        </Tabs>
      </div>
    )
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

/** Базовое использование компонента Tabs */
export const Basic: Story = {
  args: {
    tabs: tabsPresets['profile'],
    defaultValue: 'general',
  },
  parameters: {
    docs: {
      description: {
        story: 'Стандартное использование компонента Tabs с набором вкладок профиля.',
      },
    },
  },
}

/** Tabs с одной отключенной вкладкой */
export const WithDisabledTab: Story = {
  args: {
    tabs: tabsPresets.disabled
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs с одной отключенной вкладкой. Отключенные вкладки отображаются, но не могут быть выбраны.',
      },
    },
  },
}

/**
 * Недопустимое состояние
 * Активная вкладка не должна быть disabled
 */
export const WithDefaultActiveDisabledTab: Story = {
  name: '⚠ Active + Disabled (Invalid)',
  args: {
    tabs: tabsPresets.disabled, 
    defaultValue: tabsPresets.disabled[2].value
  },
  parameters: {
    docs: {
      description: {
        story:
          '❗ **Недопустимое состояние. Только для визуальной проверки.**\n\n' +
          'Активная вкладка не должна быть disabled, так как эти состояния логически противоречат друг другу. ' +
          'История добавлена исключительно для проверки визуального отображения и не должна использоваться в реальном UX.',
      },
    },
  },
}

/** Несколько отключенных вкладок */
export const MultipleDisabled: Story = {
  name: 'Multiple Disabled Tabs',
  args: {
    tabs: tabsPresets['multiplyDisabled'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs с несколькими отключенными вкладками.',
      },
    },
  },
}

/** Активная вкладка не первая по умолчанию */
export const NonDefaultActiveTab: Story = {
  name: 'Non-Default Active Tab',
  args: {
    tabs: tabsPresets['profile'],
    defaultValue: 'account',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs с активной вкладкой, отличной от первой.',
      },
    },
  },
}

/** Кастомный aria-label для доступности */
export const WithCustomAriaLabel: Story = {
  args: {
    tabs: tabsPresets['profile'],
    ariaLabel: 'Profile settings navigation',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs с кастомным ARIA-label для улучшения доступности.',
      },
    },
  },
}

/** Минимальное количество вкладок */
export const MinimalTabs: Story = {
  name: 'Minimal (Two Tabs)',
  args: {
    tabs: tabsPresets.minimal,
  },
  parameters: {
    docs: {
      description: {
        story: 'Минимальный вариант с двумя вкладками.',
      },
    },
  },
}

/** Длинные названия вкладок */
export const WithLongTitles: Story = {
  name: 'With Long Tab Titles',
  args: {
    tabs: tabsPresets.long,
    defaultValue: 'settings'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs с длинными названиями вкладок для проверки отображения.',
      },
    },
  },
}

/** Tabs без контента (только навигация) */
export const NavigationOnly: Story = {
  name: 'Navigation Only (No Content)',
  render: (args) => {
    const selectedTabs = typeof args.tabs === 'string' 
      ? tabsPresets[args.tabs] 
      : args.tabs
    
    return (
      <div style={{ width: '800px' }}>
        <Tabs 
          {...args} 
          tabs={selectedTabs}
          defaultValue={args.defaultValue || selectedTabs[0]?.value}
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Компонент Tabs используется только для навигации, без отображения контента.',
      },
    },
  },
}