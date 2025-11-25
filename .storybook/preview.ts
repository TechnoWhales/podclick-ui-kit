import type { Preview } from '@storybook/react-vite'

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
  },
  tags: ['autodocs'],
};

export default preview;