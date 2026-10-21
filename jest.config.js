module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/test/**/*.test.ts', '**/test/**/*.test.js'],
    transform: {
        '^.+\\.ts$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.json' }]
    },
    moduleNameMapper: {
        '^@ostro/contracts/(.*)$': '<rootDir>/$1',
        '^@ostro/contracts$': '<rootDir>/index.js'
    },
    testPathIgnorePatterns: ['/node_modules/', '/build/'],
    coveragePathIgnorePatterns: ['/node_modules/', '/build/'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov', 'clover']
};
