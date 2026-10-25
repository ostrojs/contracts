/**
 * Interface defining Container Application Contract.
 */
interface IContainer {
    alias(alias?: Record<string, any>): void;
    wrap($callback: Function, $parameters?: any[]): Function | void;
    call($callback: any, $parameters?: any[]): any;
    factory($abstract: any): Function | void;
    makeWith<T = any>($abstract: any, ...$parameters: any[]): T;
    make<T = any>($abstract: any, ...$parameters: any[]): T;
    resolve<T = any>($abstract: any, $parameters?: any[]): T;
    loadPath(dir: any): any;
    isBuildable($concrete: any): boolean | void;
    build<T = any>($concrete: any, $parameters?: any[]): T;
    getBindings(): Record<string, any> | void;
    bind(key: string | string[], callback?: any, $parameters?: any[] | boolean, shared?: boolean): any;
    singleton($abstract: any, $concrete?: any): any;
    getOrCreateSingleton($abstract: any, $concrete?: any): any;
    app<T = any>(key?: string): T;
    forgetInstance($abstract: any): void;
    instance($abstract: any, $instance: any): any;
    [key: string]: any;
}

/**
 * Class Application.
 */
class Application implements IContainer {

    /**
     * alias definition.
     * @param {Record<string, any>} alias
     * @returns {void}
     */
    public alias(alias: Record<string, any> = {}): void {

    }

    /**
     * wrap definition.
     * @param {Function} $callback
     * @param {any[]} $parameters
     * @returns {Function}
     */
    public wrap($callback: Function, $parameters: any[] = []): Function | void {

    }

    /**
     * call definition.
     * @param {*} $callback
     * @param {any[]} $parameters
     * @returns {*}
     */
    public call($callback: any, $parameters: any[] = []): any {

    }

    /**
     * factory definition.
     * @param {*} $abstract
     * @returns {Function}
     */
    public factory($abstract: any): Function | void {

    }

    /**
     * makeWith definition.
     * @param {*} $abstract
     * @param {any[]} $parameters
     * @returns {*}
     */
    public makeWith($abstract: any, ...$parameters: any[]): any {

    }

    /**
     * make definition.
     * @param {*} $abstract
     * @param {any[]} $parameters
     * @returns {*}
     */
    public make($abstract: any, ...$parameters: any[]): any {

    }

    /**
     * resolve definition.
     * @param {*} $abstract
     * @param {any[]} $parameters
     * @returns {*}
     */
    public resolve($abstract: any, $parameters: any[] = []): any {

    }

    /**
     * loadPath definition.
     * @param {*} dir
     * @returns {*}
     */
    public loadPath(dir: any): any {

    }

    /**
     * isBuildable definition.
     * @param {*} $concrete
     * @returns {boolean}
     */
    public isBuildable($concrete: any): boolean | void {

    }

    /**
     * build definition.
     * @param {*} $concrete
     * @param {any[]} $parameters
     * @returns {*}
     */
    public build($concrete: any, $parameters: any[] = []): any {

    }

    /**
     * getBindings definition.
     * @returns {Record<string, any>}
     */
    public getBindings(): Record<string, any> | void {

    }

    /**
     * bind definition.
     * @param {string | string[]} key
     * @param {*} callback
     * @param {any[] | boolean} $parameters
     * @param {boolean} shared
     * @returns {*}
     */
    public bind(key: string | string[], callback?: any, $parameters: any[] | boolean = [], shared: boolean = false): any {

    }

    /**
     * singleton definition.
     * @param {*} $abstract
     * @param {*} $concrete
     * @returns {*}
     */
    public singleton($abstract: any, $concrete: any): any {

    }

    /**
     * getOrCreateSingleton definition.
     * @param {*} $abstract
     * @param {*} $concrete
     * @returns {*}
     */
    public getOrCreateSingleton($abstract: any, $concrete: any): any {

    }

    /**
     * app definition.
     * @param {string} key
     * @returns {*}
     */
    public app(key?: string): any {

    }

    /**
     * forgetInstance definition.
     * @param {*} $abstract
     * @returns {void}
     */
    public forgetInstance($abstract: any): void {

    }

    /**
     * instance definition.
     * @param {*} $abstract
     * @param {*} $instance
     * @returns {*}
     */
    public instance($abstract: any, $instance: any): any {

    }

}

/**
 * Binding definition interface.
 */
interface BindingDefinition {
    callback: any;
    shared: boolean;
    parameters: any[];
}

type IApplication = IContainer;

export type { IContainer, IApplication, BindingDefinition };
export default Application;