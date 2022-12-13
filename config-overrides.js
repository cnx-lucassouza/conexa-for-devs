const path = require('path')
const { alias, configPaths } = require('react-app-rewire-alias')
const { override, addBabelPreset } = require('customize-cra')

module.exports = {
  webpack: override(
    addBabelPreset('@emotion/babel-preset-css-prop'),
    alias({
      ...configPaths('tsconfig.base.json'),
      react: path.resolve('./node_modules/react'),
    }),
  ),
  jest: config => ({
    ...config,
    roots: ['<rootDir>/src'],
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    clearMocks: true,
    collectCoverage: true,
    coverageReporters: [
      'clover',
      'json',
      'lcov',
      'html',
      ['text', { skipFull: true }],
    ],
    collectCoverageFrom: [
      'src/**/*.{ts,tsx}',
      '!src/setupTests.ts',
      '!src/App.tsx',
      '!src/index.tsx',
      '!src/reportWebVitals.ts',
      '!src/react-app-env.d.ts',
      '!src/pages/index.ts',
      '!src/router/**/*.{ts,tsx}',
      '!src/theme/**/*.{ts,tsx}',
      '!src/types/**/*.{ts,tsx}',
      '!src/utils/**/*.{ts,tsx}',
      '!src/styles/**/*.{ts,tsx}',
    ],
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    snapshotSerializers: ['@emotion/jest/serializer'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
      '\\.svg$': 'svg-jest',
    },
  }),
}
