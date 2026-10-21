import type { Blueprint } from './blueprint';

/**
 * Interface defining Database Schema Builder contract.
 */
interface ISchemaBuilder {
    create(table: string, callback: (table: Blueprint) => void): Promise<any>;
    createTable(...args: any[]): any;
    drop(table: string): Promise<any>;
    dropIfExists(table: string): Promise<any>;
    has(table: string): Promise<boolean>;
    hasTable(table: string): Promise<boolean>;
    hasColumn(table: string, column: string): Promise<boolean>;
    table(table: string, callback: (table: Blueprint) => void): Promise<any>;
    rename(from: string, to: string): Promise<any>;
    [key: string]: any;
}

/**
 * Class SchemaBuilder contract.
 */
class SchemaBuilderContract {
    public async create(table: string, callback: (table: Blueprint) => void): Promise<any> {}
    public createTable(...args: any[]): any {}
    public async drop(table: string): Promise<any> {}
    public async dropIfExists(table: string): Promise<any> {}
    public async has(table: string): Promise<boolean> { return false; }
    public async hasTable(table: string): Promise<boolean> { return false; }
    public async hasColumn(table: string, column: string): Promise<boolean> { return false; }
    public async table(table: string, callback: (table: Blueprint) => void): Promise<any> {}
    public async rename(from: string, to: string): Promise<any> {}
}

export type { ISchemaBuilder };
export default SchemaBuilderContract;
