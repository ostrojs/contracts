/**
 * Interface defining Console Command Contract.
 */
interface ICommand {
    getApp(): any;
    setApp(app: any): void;
    getConsole(): any;
    setConsole(console: any): void;
    execute(): Promise<any> | any;
}

/**
 * Class Command Contract.
 */
class Command implements ICommand {
    public getApp(): any {
        return null;
    }

    public setApp(app: any): void {
    }

    public getConsole(): any {
        return null;
    }

    public setConsole(console: any): void {
    }

    public execute(): Promise<any> | any {
    }
}

export type { ICommand };
export default Command;