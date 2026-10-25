/**
 * Interface defining Eloquent Model Contract.
 */
interface IModel {
    serialize?(): unknown;
    toJSON?(): unknown;
    toJson?(): unknown;
    toArray?(): unknown;
    getKeyName?(): string;
    getTable?(): string;
    getAttribute?(key: string): unknown;
    setAttribute?(key: string, value: unknown): this;
    save?(): Promise<any>;
    [key: string]: any;
}

/**
 * Class Model.
 */
class Model implements IModel {
    constructor(...args: any[]) {}

    public serialize(): unknown {
        return {};
    }

    public getTable(): string {
        return '';
    }

    public getAttribute(key: string): unknown {
        return null;
    }
}

export type { IModel };
export default Model;