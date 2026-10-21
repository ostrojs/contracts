
/**
 * Interface defining Http Kernel Contract.
 */
interface IHttpKernel {
    bootstrap(): Promise<void> | void;
    handle(request: any): Promise<any>;
    terminate(request: any, response: any): Promise<void> | void;
    getApplication(): any;
}

/**
 * Class Kernel.
 */
class Kernel implements IHttpKernel {

    /**
     * bootstrap definition.
     * @returns {void}
     */
    public bootstrap(): void {
    }

    /**
     * handle definition.
     * @param {*} $request
     * @returns {Promise<any>}
     */
    public async handle($request: any): Promise<any> {
    }

    /**
     * terminate definition.
     * @param {*} $request
     * @param {*} $response
     * @returns {void}
     */
    public terminate($request: any, $response: any): void {
    }

    /**
     * getApplication definition.
     * @returns {any}
     */
    public getApplication(): any {
    }
}

export type { IHttpKernel };
export default Kernel;