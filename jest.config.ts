import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

let tsJestPath = 'ts-jest';
try {
    tsJestPath = require.resolve('ts-jest');
} catch {
    try {
        const globalRoot = execSync('npm root -g', { encoding: 'utf8' }).trim();
        const candidate = path.join(globalRoot, 'ts-jest');
        if (fs.existsSync(candidate)) {
            tsJestPath = candidate;
        }
    } catch {}
}

export default {
    testEnvironment: 'node',
    testMatch: ['**/test/**/*.test.ts', '**/test/**/*.test.js'],
    transform: {
        '^.+\\.ts$': [tsJestPath, { tsconfig: '<rootDir>/tsconfig.json' }]
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
