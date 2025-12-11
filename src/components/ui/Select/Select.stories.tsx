import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Select } from '@/components/ui/Select'
import { Typography } from '@/components/ui/Typography/Typography';
import { Icon } from '@/components/ui/Icon/Icon'

const labelStyleForCustomOptions = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
};

const options = [
  { value: 'option1', label: 'Вариант 1' },
  { value: 'option2', label: 'Вариант 2' },
  { value: 'option3', label: 'Вариант 3' },
]

const optionsForLongList = Array.from({ length: 20 }, (_, i) => ({
  value: `item-${i + 1}`,
  label: `Элемент списка ${i + 1}`,
}))

const optionsCustomList = [
  {
    value: 'en',
    label: (
      <span style={labelStyleForCustomOptions}>
        <Icon iconId={"flagUnitedKingdom"} />
        English
      </span>
    ),
  },
  {
    value: 'ru',
    label: (
      <span style={labelStyleForCustomOptions}>
        <Icon iconId={"flagRussia"} />
        Русский
      </span>
    ),
  },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
    parameters: {
    docs: {
      description: {
        component: 'Компонент выпадающего списка на основе Radix UI. Поддерживает различные состояния, размеры и кастомизацию.'
      }
    }
  },
  argTypes: {
    size: {
      options: ['s', 'm'],
      control: { type: 'radio' },
      description: 'Размер компонента',
      table: {
        defaultValue: { summary: 'm' }
      }
    },
    placeholder: {
      table: {
        defaultValue: { summary: 'Select...' }
      }
    },
    value: {
      control: 'select',
      options: ['option1', 'option2', 'option3', ''],
      description: 'Выбранная опция',
    },
    options: {
      table: { disable: true },
    },
    disabled: {
      control: 'boolean',
      description: 'Неактивное состояние',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    required: {
      control: 'boolean',
      description: 'Обязательное поле',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    maxHeight: {
      control: 'text',
      description: 'Максимальная высота выпадающего списка',
      table: {
        defaultValue: { summary: '200px' }
      }
    },
    onValueChange: {
      action: 'valueChanged',
      description: 'Обработчик изменения значения',
    },
    htmlFor: {
      table: { disable: true }
    }

  },
  args: {
    value: '',
    placeholder: 'Выберите вариант',
    options: options,
    size: 'm',
    disabled: false,
    required: false,
    maxHeight: '200px',
  },
}

export default meta
type Story = StoryObj<typeof meta>

/* --------------------- БАЗОВЫЕ КЕЙСЫ --------------------- */

/**
 * Базовая версия компонента с минимальными параметрами.
 * Используйте для стандартных сценариев выбора из списка.
 */
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Базовая версия компонента без дополнительных параметров.'
      }
    }
  }
}

/**
 * Компонент с текстовой меткой. Полезно для форм,
 * где важно явно указать назначение поля.
 */
export const WithLabel: Story = {
  args: {
    label: 'Выберите вариант',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select с текстовой меткой. Используется в формах для лучшей семантики и доступности.'
      }
    }
  }
}

/* --------------------- СОСТОЯНИЯ --------------------- */

/**
 * Обязательное поле для заполнения. Отображается звёздочкой рядом с меткой.
 * Используйте для полей, которые должны быть обязательно заполнены.
 */
export const Required: Story = {
  args: {
    label: 'Обязательный выбор',
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Обязательное поле со звёздочкой. Используется в валидации форм.'
      }
    }
  }
}

/**
 * Неактивное состояние компонента. Полезно для отображения
 * недоступных полей в зависимости от состояния приложения.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Неактивное поле',
    value: 'option2',
  },
  parameters: {
    docs: {
      description: {
        story: 'Неактивное состояние. Компонент виден, но не доступен для взаимодействия.'
      }
    }
  }
}

/* --------------------- ВАРИАНТЫ РАЗМЕРОВ --------------------- */

/**
 * Компактная версия компонента. Подходит для плотных интерфейсов
 * и таблиц, где важно экономить пространство.
 */
export const SmallSize: Story = {
  args: {
    size: 's',
    label: 'Компактный вариант',
    placeholder: 'Выберите',
  },
  parameters: {
    docs: {
      description: {
        story: 'Меньший размер компонента (size="s").'
      }
    }
  }
}

/**
 * Стандартный размер компонента. Используется по умолчанию
 * в большинстве интерфейсов.
 */
export const MediumSize: Story = {
  args: {
    size: 'm',
    label: 'Стандартный размер',
  },
  parameters: {
    docs: {
      description: {
        story: 'Стандартный размер компонента (size="m"). Используется по умолчанию.'
      }
    }
  }
}

/* --------------------- ВАРИАНТЫ ДАННЫХ --------------------- */


/**
 * Предварительно выбранное значение. Полезно для форм редактирования
 * или отображения сохранённых данных.
 */
export const WithPreselectedValue: Story = {
  args: {
    value: 'option2',
    label: 'С предвыбранным значением',
  },
  parameters: {
    docs: {
      description: {
        story: 'Компонент с предварительно выбранным значением. Используется в формах редактирования.'
      }
    }
  }
}

/**
 * Длинный список с кастомизированной максимальной высотой.
 * Демонстрирует скроллинг внутри выпадающего списка.
 */
export const LongList: Story = {
  argTypes: {
    value: {
      options: optionsForLongList.map(opt => opt.value),
    },
  },
  args: {
    options: optionsForLongList,
    maxHeight: '300px',
    label: 'Длинный список',
  },
  parameters: {
    docs: {
      description: {
        story: 'Список с большим количеством опций. Показывает работу скролла и настройку максимальной высоты.'
      }
    }
  }
}

/**
 * Сложные опции с иконками и кастомной вёрсткой.
 * Демонстрирует возможность использования React-элементов в качестве label.
 */
export const WithCustomOptions: StoryObj<typeof Select> = {
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <div style={{ padding: 20 }}>
        <Select
          {...args}
          value={value}
          onValueChange={setValue}
          options={optionsCustomList} // ★ НЕ из args!
        />
      </div>
    );
  },
  args: {
    label: 'Выбор языка',
    placeholder: 'Выберите язык',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Пример Select с кастомными опциями, содержащими иконки. Опции вынесены из args, чтобы Storybook не зависал.',
      },
    },
  },
  /** отключаем контрол для options (важно) */
  argTypes: {
    options: { control: false },
  },
};


/* --------------------- КОНТРОЛИРУЕМЫЙ КОМПОНЕНТ --------------------- */

/**
 * Контролируемый компонент с внешним состоянием.
 * Необходим для интеграции с React-стейт менеджерами.
 */
export const Controlled: Story = {
  render: args => {
    const [value, setValue] = useState('option1')

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Select 
          {...args} 
          value={value} 
          onValueChange={setValue} 
        />
        <Typography variant={"regular_text_14"}>
          Выбрано: {args.options.find((opt: { value: string; }) => opt.value === value)?.label || 'ничего'}
        </Typography>
      </div>
    )
  },
  args: {
    label: 'Контролируемый компонент',
  },
  parameters: {
    docs: {
      description: {
        story: 'Полностью контролируемый компонент. Состояние управляется извне через value и onValueChange.'
      }
    }
  }
}
