import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '@/components/Icon';
import type { IconsId } from '@/components/Icon/types';

const allIcons: IconsId[] = [
  'arrowBackOutline',
  'arrowForwardOutline',
  'arrowIosBack',
  'arrowIosBackOutline',
  'arrowIosDownOutline',
  'arrowIosForward',
  'arrowIosForwardOutline',
  'arrowIosUp',
  'block1',
  'block2',
  'bookmark',
  'bookmarkOutline',
  'calendar',
  'calendarOutline',
  'checkmarkOutline',
  'close',
  'closeOutline',
  'colorPaletteOutline',
  'copy',
  'copyOutline',
  'creditCard',
  'creditCardOutline',
  'doneAllOutline',
  'edit',
  'editOutline',
  'email',
  'emailOutline',
  'expand',
  'expandOutline',
  'eye',
  'eyeOff',
  'eyeOffOutline',
  'eyeOutline',
  'facebook',
  'fillBell',
  'flagRussia',
  'flagUnitedKingdom',
  'github',
  'google',
  'heart',
  'heartOutline',
  'home',
  'homeOutline',
  'image',
  'imageOutline',
  'layers',
  'layersOutline',
  'logOut',
  'logOutOutline',
  'maximize',
  'maximizeOutline',
  'menuOutline',
  'messageCircle',
  'messageCircleOutline',
  'mic',
  'micOutline',
  'moreHorizontal',
  'moreHorizontalOutline',
  'outlineBell',
  'paid',
  'paperPlane',
  'paperPlaneOutline',
  'pauseCircle',
  'pauseCircleOutline',
  'paypal',
  'person',
  'personAdd',
  'personAddOutline',
  'personOutline',
  'personRemove',
  'personRemoveOutline',
  'pin',
  'pinOutline',
  'playCircle',
  'playCircleOutline',
  'plusCircle',
  'plusCircleOutline',
  'plusSquare',
  'plusSquareOutline',
  'radioButtonChecked',
  'radioButtonUnchecked',
  'recaptcha',
  'search',
  'searchOutline',
  'settings',
  'settingsOutline',
  'stripe',
  'trash',
  'trashOutline',
  'trendingUp',
  'trendingUpOutline',
  'save'
];

/** Аргументы для историй Icon */
interface IconStoryArgs extends ComponentProps<typeof Icon> {
  /** Цвет родительского элемента */
  color: string;
}

const meta: Meta<IconStoryArgs> = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    iconId: { control: 'select', options: allIcons },
    color: { control: 'color' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
  args: {
    iconId: 'home',
    width: '24',
    height: '24',
    color: '#000000',
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

// ----------------------------------------
// Все иконки
export const AllIcons: Story = {
  render: (args: IconStoryArgs) => {
    const { color } = args;

    const colorfulIcons: IconsId[] = ['flagRussia', 'flagUnitedKingdom', 'paypal', 'stripe', 'paid', 'google', 'github', 'facebook', 'recaptcha'];
    const colorlessIcons: IconsId[] = allIcons.filter(id => !colorfulIcons.includes(id));

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {/* Контейнер с цветом от args.color */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, color }}>
          {colorlessIcons.map((id) => (
            <div key={id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 80 }}>
              <Icon iconId={id} width={"24"} height={"24"} />
              <span style={{ fontSize: 10, textAlign: 'center', marginTop: 4 }}>{id}</span>
            </div>
          ))}
        </div>

        {/* Контейнер для цветных иконок */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {colorfulIcons.map((id) => (
            <div key={id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 80 }}>
              <Icon iconId={id} width={"24"} height={"24"} />
              <span style={{ fontSize: 10, textAlign: 'center', marginTop: 4 }}>{id}</span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};