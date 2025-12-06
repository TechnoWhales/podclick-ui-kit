import type { Preview, StoryContext, StoryFn } from '@storybook/react-vite'
import { useGlobals } from 'storybook/preview-api';

import '@/styles/index.css'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    docs: {
      title: 'Table of Contents',
      toc: true, // навигация по docs в правой панели
    },
    backgrounds: { disable: true },
  },
  tags: ['autodocs'],
};

export default preview;