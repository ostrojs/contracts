/**
 * Interface defining Server contract.
 */
interface IServer {
    request(handler: any): this;
    response(handler: any): this;
    register(path: any, handle?: any): this;
    handle(): (...args: any[]) => any;
    start(options?: any, cb?: any): any;
}

/**
 * Class Server.
 */
class Server implements IServer {
    public request(handler: any): this {
        return this;
    }

    public response(handler: any): this {
        return this;
    }

    public register(path: any, handle?: any): this {
        return this;
    }

    public handle(): (...args: any[]) => any {
        return () => {};
    }

    public start(options?: any, cb?: any): any {
        return undefined;
    }
}

export type { IServer };
export default Server;