import { create } from 'storybook/theming/create';

export default create({
  base: 'dark',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
  brandTitle: 'Podclick UI Storybook',
  brandUrl: 'https://example.com',
  // brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_self',

  //
  colorPrimary: '#4c4c4c',
  colorSecondary: '#397df6',

  // UI
  appBg: '#222425',
  appContentBg: '#1B1C1D',
  appPreviewBg: '#0d0d0d',
  appBorderColor: '#8d9094',
  appBorderRadius: 4,

  // Text colors
  textColor: '#fff',

  // Toolbar default and active colors
  barTextColor: '#6B7277',
  barSelectedColor: '#397df6',
  barHoverColor: '#7e878dff',
  barBg: '#222425',

  // Form colors
  inputBg: '#1B1C1D',
  inputBorder: '#8d9094',
  inputTextColor: '#fff',
  inputBorderRadius: 2,
  booleanSelectedBg: '#1B1C1D',
});