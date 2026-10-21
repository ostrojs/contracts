/**
 * Deep Dot-Notation Configuration Pointer Engine
 * 
 * Recursively resolves nested property paths and their corresponding types
 * for deep configuration trees (e.g. 'database.connections.mysql.port').
 */

export type DotNestedKeys<T, Depth extends readonly number[] = []> =
    Depth['length'] extends 8
        ? never
        : T extends readonly (infer Element)[]
            ? `${number}` | `${number}.${DotNestedKeys<Element, [...Depth, 1]>}`
            : T extends object
                ? {
                    [K in keyof T & (string | number)]:
                        T[K] extends object
                            ? `${K}` | `${K}.${DotNestedKeys<T[K], [...Depth, 1]>}`
                            : `${K}`;
                }[keyof T & (string | number)]
                : never;

export type GetNestedType<T, Path extends string> =
    Path extends `${infer Key}.${infer Rest}`
        ? Key extends keyof T
            ? GetNestedType<T[Key], Rest>
            : Key extends `${number}`
                ? T extends readonly (infer Element)[]
                    ? GetNestedType<Element, Rest>
                    : unknown
                : unknown
        : Path extends keyof T
            ? T[Path]
            : Path extends `${number}`
                ? T extends readonly (infer Element)[]
                    ? Element
                    : unknown
                : unknown;

export interface ITypedConfigRepository<TConfigTree extends object = Record<string, any>> {
    get<P extends DotNestedKeys<TConfigTree>>(path: P): GetNestedType<TConfigTree, P>;
    get<T = unknown>(path: string, defaultValue?: T): T;
    set<P extends DotNestedKeys<TConfigTree>>(path: P, value: GetNestedType<TConfigTree, P>): void;
    set<T = unknown>(path: string, value: T): void;
    has(path: string): boolean;
}
