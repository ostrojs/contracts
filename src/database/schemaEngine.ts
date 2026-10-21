/**
 * Eloquent ORM Structural Schema Migration Engine
 * 
 * Tracks blueprint schema definitions and compiles them into structural interfaces.
 */

export type ColumnTypeMap = {
    increments: number;
    bigIncrements: number | bigint;
    integer: number;
    bigInteger: number | bigint;
    smallInteger: number;
    tinyInteger: number;
    string: string;
    text: string;
    boolean: boolean;
    date: Date | string;
    dateTime: Date | string;
    timestamp: Date | string;
    json: any;
    jsonb: any;
    float: number;
    decimal: number;
    double: number;
    uuid: string;
};

export interface ITypedBlueprint<TColumns extends Record<string, any> = {}> {
    increments<C extends string>(column: C): ITypedBlueprint<TColumns & { [K in C]: number }>;
    bigIncrements<C extends string>(column: C): ITypedBlueprint<TColumns & { [K in C]: bigint }>;
    string<C extends string>(column: C, length?: number): ITypedBlueprint<TColumns & { [K in C]: string }>;
    integer<C extends string>(column: C): ITypedBlueprint<TColumns & { [K in C]: number }>;
    boolean<C extends string>(column: C): ITypedBlueprint<TColumns & { [K in C]: boolean }>;
    text<C extends string>(column: C): ITypedBlueprint<TColumns & { [K in C]: string }>;
    nullable(): this;
    default(val: any): this;
    timestamps(): ITypedBlueprint<TColumns & { created_at: Date; updated_at: Date }>;
    build(): TColumns;
}

export type TableSchema<TBlueprint extends ITypedBlueprint<any>> =
    TBlueprint extends ITypedBlueprint<infer TCols> ? TCols : never;

