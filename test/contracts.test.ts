import { describe, test, expect, jest } from "@jest/globals";
const fs = require('node:fs');
const path = require('node:path');

function getAllJsFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== 'coverage' && file !== '.git') {
                getAllJsFiles(fullPath, arrayOfFiles);
            }
        } else if ((file.endsWith('.ts') || file.endsWith('.js')) && file !== 'jest.config.js') {
            arrayOfFiles.push(fullPath);
        }
    });

    return arrayOfFiles;
}

describe('@ostro/contracts Comprehensive Unit Tests & Integrity Verification', () => {

    const srcDir = path.resolve(__dirname, '../src');
    const contractFiles = getAllJsFiles(srcDir);

    test('All contract files export a valid class constructor or object', () => {
        expect(contractFiles.length).toBeGreaterThan(30);

        contractFiles.forEach((filePath) => {
            const relativePath = path.relative(srcDir, filePath);
            let importedModule;
            expect(() => {
                importedModule = require(filePath);
            }).not.toThrow();

            const exported = importedModule?.default || importedModule;
            expect(exported).toBeDefined();
            expect(typeof exported === 'function' || typeof exported === 'object').toBe(true);

            if (typeof exported === 'function') {
                expect(() => new exported()).not.toThrow();
                const instance = new exported();
                expect(instance).toBeInstanceOf(exported);
            }
        });
    });

    test('ApplicationContract exposes method stubs and default behavior', () => {
        const _ApplicationContract = require('../src/container/application');
        const ApplicationContract = _ApplicationContract.default || _ApplicationContract;
        const app = new ApplicationContract();

        expect(app).toBeInstanceOf(ApplicationContract);
        expect(app.alias()).toBeUndefined();
        expect(app.wrap(() => {})).toBeUndefined();
        expect(app.call(() => {})).toBeUndefined();
        expect(app.factory('test')).toBeUndefined();
        expect(app.makeWith('test')).toBeUndefined();
        expect(app.make('test')).toBeUndefined();
        expect(app.resolve('test')).toBeUndefined();
        expect(app.loadPath('test')).toBeUndefined();
        expect(app.isBuildable('test')).toBeUndefined();
        expect(app.build('test')).toBeUndefined();
        expect(app.getBindings()).toBeUndefined();
        expect(app.bind('k', 'c')).toBeUndefined();
        expect(app.singleton('k', 'c')).toBeUndefined();
        expect(app.getOrCreateSingleton('k', 'c')).toBeUndefined();
        expect(app.app('k')).toBeUndefined();
        expect(app.forgetInstance('k')).toBeUndefined();
        expect(app.instance('k', {})).toBeUndefined();
    });

    test('Custom subclass extending contract retains inheritance prototype chain', () => {
        const _ApplicationContract = require('../src/container/application');
        const ApplicationContract = _ApplicationContract.default || _ApplicationContract;
        class CustomApp extends ApplicationContract {
            make(abstract) {
                return `custom:${abstract}`;
            }
        }

        const custom = new CustomApp();
        expect(custom).toBeInstanceOf(CustomApp);
        expect(custom).toBeInstanceOf(ApplicationContract);
        expect(custom.make('test')).toBe('custom:test');
    });

});
