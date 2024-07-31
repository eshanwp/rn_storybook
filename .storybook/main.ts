import {StorybookConfig} from '@storybook/react-native';

const main: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [],
};

export default main;
