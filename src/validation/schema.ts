/**
 * Pipe-Delimited Structural Validation Core
 * 
 * Recursively parses pipe-delimited rule strings (e.g. 'required|string', 'numeric|integer')
 * into compile-time TypeScript types without unsoundly conflating types.
 */

export type PrimitiveRuleType<Rule extends string> =
    Rule extends 'string' | 'email' | 'url' | 'uuid' | 'alpha' | 'alphanumeric'
        ? string
        : Rule extends 'numeric' | 'integer' | 'int' | 'float' | 'digits'
            ? number
            : Rule extends 'boolean' | 'bool'
                ? boolean
                : Rule extends 'array'
                    ? any[]
                    : Rule extends 'date'
                        ? Date | string
                        : Rule extends 'required' | 'confirmed' | 'filled' | 'bail' | 'sometimes'
                            ? never
                            : never;

export type ParsePipeRule<TRule extends string> =
    TRule extends `${infer Head}|${infer Tail}`
        ? [PrimitiveRuleType<Head>] extends [never]
            ? ParsePipeRule<Tail>
            : PrimitiveRuleType<Head> | ParsePipeRule<Tail>
        : PrimitiveRuleType<TRule>;

export type ParseRule<TRule extends string> =
    [ParsePipeRule<TRule>] extends [never] ? string : ParsePipeRule<TRule>;

export type IsNullableRule<TRule extends string> =
    TRule extends `${string}nullable${string}` ? true : false;

export type IsOptionalRule<TRule extends string> =
    TRule extends `${string}sometimes${string}` ? true : false;

export type InferRuleType<TRule extends string> =
    IsNullableRule<TRule> extends true
        ? ParseRule<TRule> | null
        : ParseRule<TRule>;

export type InferSchema<TRules extends Record<string, string>> = {
    [K in keyof TRules as IsOptionalRule<TRules[K]> extends true ? never : K]: InferRuleType<TRules[K]>;
} & {
    [K in keyof TRules as IsOptionalRule<TRules[K]> extends true ? K : never]?: InferRuleType<TRules[K]>;
};

export interface IValidator<T = any> {
    passes(): Promise<boolean> | boolean;
    fails(): Promise<boolean> | boolean;
    validated(): Promise<T> | T;
    errors(): Record<string, string[]>;
}
