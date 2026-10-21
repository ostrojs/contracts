/**
 * Column definition chaining interface for database schema builders.
 */
interface ColumnDefinition {
    primary(constraintName?: string): this;
    unique(constraintName?: string): this;
    index(indexName?: string): this;
    nullable(): this;
    notNullable(): this;
    defaultTo(value: any): this;
    unsigned(): this;
    comment(comment: string): this;
    after(column: string): this;
    first(): this;
    [key: string]: any;
}

/**
 * Interface defining Blueprint / Schema table builder contract.
 */
interface Blueprint {
    increments(column: string): ColumnDefinition;
    bigIncrements(column: string): ColumnDefinition;
    integer(column: string, length?: number): ColumnDefinition;
    bigInteger(column: string): ColumnDefinition;
    mediumInteger(column: string): ColumnDefinition;
    smallInteger(column: string): ColumnDefinition;
    tinyInteger(column: string): ColumnDefinition;
    string(column: string, length?: number): ColumnDefinition;
    text(column: string, textType?: string): ColumnDefinition;
    mediumText(column: string): ColumnDefinition;
    longText(column: string): ColumnDefinition;
    boolean(column: string): ColumnDefinition;
    date(column: string): ColumnDefinition;
    dateTime(column: string, options?: any): ColumnDefinition;
    time(column: string): ColumnDefinition;
    timestamp(column: string, options?: any): ColumnDefinition;
    timestamps(useTimestamps?: boolean, defaultToNow?: boolean): void;
    nullableTimestamps(): void;
    json(column: string): ColumnDefinition;
    jsonb(column: string): ColumnDefinition;
    float(column: string, precision?: number, scale?: number): ColumnDefinition;
    decimal(column: string, precision?: number, scale?: number): ColumnDefinition;
    double(column: string, precision?: number, scale?: number): ColumnDefinition;
    binary(column: string, length?: number): ColumnDefinition;
    enum(column: string, values: any[]): ColumnDefinition;
    uuid(column: string): ColumnDefinition;
    dropColumn(...columns: (string | string[])[]): this;
    dropTimestamps(): void;
    primary(columns: string | string[], constraintName?: string): this;
    unique(columns: string | string[], indexName?: string): this;
    index(columns: string | string[], indexName?: string): this;
    foreign(columns: string | string[], foreignKeyName?: string): any;
    dropForeign(columns: string | string[]): this;
    dropIndex(columns: string | string[]): this;
    dropUnique(columns: string | string[]): this;
    dropPrimary(constraintName?: string): this;
    [key: string]: any;
}

type BlueprintLike = Blueprint;

/**
 * Class Blueprint contract.
 */
class BlueprintContract {
}

export type {
    Blueprint,
    BlueprintLike,
    ColumnDefinition
};
export default BlueprintContract;
