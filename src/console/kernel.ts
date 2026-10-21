/**
 * Interface defining Console Kernel Contract.
 */
interface IKernel {
    handle(input?: any, output?: any): Promise<number>;
    callCommand(command: string, parameters?: any[], outputBuffer?: any): Promise<number>;
    queue(command: string, parameters?: any[]): Promise<any>;
    all(): Record<string, any>;
    output(): string;
    terminate(input?: any, status?: number): void;
}

/**
 * Class Kernel Contract.
 */
class Kernel implements IKernel {
    public async handle(input?: any, output?: any): Promise<number> {
        return 0;
    }

    public async callCommand(command: string, parameters: any[] = [], outputBuffer: any = null): Promise<number> {
        return 0;
    }

    public async queue(command: string, parameters: any[] = []): Promise<any> {
    }

    public all(): Record<string, any> {
        return {};
    }

    public output(): string {
        return '';
    }

    public terminate(input?: any, status?: number): void {
    }
}

export type { IKernel };
export default Kernel;