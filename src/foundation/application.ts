import type { IApplication as IContainerApplication } from '../container/application';

/**
 * Interface defining Foundation Application contract.
 */
interface IApplication extends IContainerApplication {
    environment(...environments: string[]): string | boolean;
    isLocal(): boolean;
    isProduction(): boolean;
    runningInConsole(): boolean;
    boot(): void;
    booted(callback: Function): void;
    booting(callback: Function): void;
    [key: string]: any;
}

/**
 * Class Foundation Application contract.
 */
class ApplicationContract {
    public environment(...environments: string[]): string | boolean {
        return false;
    }
    public isLocal(): boolean {
        return false;
    }
    public isProduction(): boolean {
        return false;
    }
    public runningInConsole(): boolean {
        return false;
    }
    public boot(): void {}
    public booted(callback: Function): void {}
    public booting(callback: Function): void {}
}

export type { IApplication };
export default ApplicationContract;
