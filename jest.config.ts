export {};
const nextJest = require("next/jest");

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: "./" });

// Any custom config you want to pass to Jest
const customJestConfig = {
  clearMocks: true,
  collectCoverage: true,
  modulePaths: ["<rootDir>/src/"],
  collectCoverageFrom: ["src/**/*.ts(x)"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  transformIgnorePatterns: ["!node_modules/", "!.next/"],
};

module.exports = createJestConfig(customJestConfig);
