// web-dev-course/week-0/basic-calculator/jest.config.mjs
export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js$': ['babel-jest', { configFile: './.babelrc.json' }],
  },
  setupFilesAfterEnv: ['./tests/setup.js'],
  moduleFileExtensions: ['js', 'mjs'],
  transformIgnorePatterns: ['/node_modules/(?!(shared/DeveloperDrawer)/)'],
};
