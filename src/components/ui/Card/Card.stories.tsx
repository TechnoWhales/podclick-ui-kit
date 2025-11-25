import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '@/components/ui/Card/Card';
import { Typography } from '@/components/ui/Typography/Typography';
import { Button } from '@/components/ui/Button/Button';

const meta = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    children: { table: { disable: true } },
    flex: {
      control: 'select',
      options: ['center', 'columnCenter', 'spaceBetween', 'spaceBetweenCenter'],
      description: 'Настройка флекс-выравнивания',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Универсальный карточный компонент с поддержкой различных вариантов выравнивания',
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Typography variant={"regular_text_14"}>
        Простая карточка с текстовым содержимым
      </Typography>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Карточка с содержимым по умолчанию без дополнительных настроек',
      },
    },
  },
};

export const WithButton: Story = {
  args: {
    children: (
      <Button variant={"primary"}>
        Карточка с кнопкой
      </Button>
    ),
    flex: 'center'
  },
  parameters: {
    docs: {
      description: {
        story: 'Карточка содержащая интерактивный элемент',
      },
    },
  },
};

export const WithTextContent: Story = {
  args: {
    children: (
      <>
        <Typography variant={"h3"} as={"div"}>Заголовок карточки</Typography>
        <Typography variant={"regular_text_14"}>
          Многострочное текстовое содержимое карточки с различными стилями 
          и форматами. Здесь может быть длинный текст, который занимает 
          несколько строк и демонстрирует как карточка работает с текстовым контентом.
        </Typography>
        <Typography variant={"small_text"} as={"div"} style={{marginTop: '8px'}}>
          Дополнительная информация или подпись
        </Typography>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Карточка с разнообразным текстовым контентом - заголовками, основным текстом и подписями',
      },
    },
  },
};

export const Centered: Story = {
  args: {
    children: (
      <Typography variant={"regular_text_14"}>
        Центрированная карточка
      </Typography>
    ),
    flex: 'center',
  },
  parameters: {
    docs: {
      description: {
        story: 'Карточка с горизонтальным центрированием содержимого',
      },
    },
  },
};

export const ColumnCentered: Story = {
  args: {
    children: (
      <>
        <Typography variant={"bold_text_14"} as={"div"}>Элемент 1</Typography>
        <Typography variant={"regular_text_14"} as={"div"}>Элемент 2</Typography>
        <Typography variant={"small_text"} as={"div"}>Элемент 3</Typography>
      </>
    ),
    flex: 'columnCenter',
  },
  parameters: {
    docs: {
      description: {
        story: 'Карточка с вертикальным расположением и центрированием элементов',
      },
    },
  },
};

export const SpaceBetween: Story = {
  args: {
    children: (
      <>
        <Typography variant={"regular_text_14"} as={"div"}>
          Левый текст
        </Typography>
        <Button variant={"outlined"}>
          Правая кнопка
        </Button>
      </>
    ),
    flex: 'spaceBetween',
  },
  parameters: {
    docs: {
      description: {
        story: 'Карточка с равномерным распределением элементов по ширине',
      },
    },
  },
};

export const SpaceBetweenCentered: Story = {
  args: {
    children: (
      <>
        <Typography variant={"bold_text_14"} as={"div"}>
          Левый текст
        </Typography>
        <Button variant={"primary"}>
          Правая кнопка
        </Button>
      </>
    ),
    flex: 'spaceBetweenCenter',
  },
  parameters: {
    docs: {
      description: {
        story: 'Карточка с распределением элементов и вертикальным центрированием',
      },
    },
  },
};

export const ComplexContent: Story = {
  args: {
    children: (
      <>
        <Typography variant={"h2"} as={"div"}>Заголовок карточки</Typography>
        <Typography variant={"regular_text_14"} as={"div"}>
          Многострочное описание содержимого карточки с полезной информацией для пользователя
        </Typography>
        <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
          <Button variant={"primary"}>Основное действие</Button>
          <Button variant={"outlined"}>Второстепенное</Button>
        </div>
      </>
    ),
    flex: 'columnCenter',
  },
  parameters: {
    docs: {
      description: {
        story: 'Карточка со сложным содержимым - заголовком, текстом и группой кнопок',
      },
    },
  },
};

// Демонстрация всех вариантов
const CardShowcase = () => {
  const flexOptions = ['center', 'columnCenter', 'spaceBetween', 'spaceBetweenCenter'] as const;

  return (
    <div style={{ display: 'grid', gap: '16px', padding: '20px' }}>
      <Typography variant={"regular_text_16"} as={"h3"} style={{ color: 'var(--color-light-100)' }}>
        Варианты выравнивания:
      </Typography>
      {flexOptions.map((flex) => (
        <Card key={flex} flex={flex}>
          {flex === 'center' && <Button variant={"primary"}>Горизонтальное центрирование</Button>}
          {flex === 'columnCenter' && (
            <>
              <Typography variant={"bold_text_14"} as={"div"}>Заголовок</Typography>
              <Typography variant={"small_text"} as={"div"}>Описание</Typography>
              <Button variant={"secondary"}>Кнопка</Button>
            </>
          )}
          {flex === 'spaceBetween' && (
            <>
              <Typography variant={"regular_text_14"} as={"div"}>Текст слева</Typography>
              <Button variant={"outlined"}>Кнопка справа</Button>
            </>
          )}
          {flex === 'spaceBetweenCenter' && (
            <>
              <Typography variant={"bold_text_14"} as={"div"}>Верхний текст</Typography>
              <Button variant={"primary"}>Нижняя кнопка</Button>
            </>
          )}
        </Card>
      ))}
    </div>
  );
};

export const AllVariants: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: 'Демонстрация всех вариантов выравнивания карточек',
      },
    },
    controls: { disable: true },
  },
  render: () => <CardShowcase />,
};