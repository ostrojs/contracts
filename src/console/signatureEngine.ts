/**
 * Artisan CLI Console Signature Engine
 * 
 * Recursively parses command signatures (e.g. 'mail:send {user} {--queue=default} {--force}')
 * isolating arguments and options with strict type restrictions.
 */

export type ExtractSignatureArguments<S extends string> =
    S extends `${string}{${infer Param}}${infer Rest}`
        ? Param extends `--${string}`
            ? ExtractSignatureArguments<Rest>
            : Param extends `${infer Arg}?`
                ? { [K in Arg]?: string } & ExtractSignatureArguments<Rest>
                : Param extends `${infer Arg}=${string}`
                    ? { [K in Arg]: string } & ExtractSignatureArguments<Rest>
                    : { [K in Param]: string } & ExtractSignatureArguments<Rest>
        : {};

export type ExtractSignatureOptions<S extends string> =
    S extends `${string}{--${infer Option}}${infer Rest}`
        ? Option extends `${infer Opt}=${string}`
            ? { [K in Opt]: string } & ExtractSignatureOptions<Rest>
            : { [K in Option]: boolean } & ExtractSignatureOptions<Rest>
        : {};

export type ParseConsoleSignature<TSignature extends string> = {
    arguments: ExtractSignatureArguments<TSignature>;
    options: ExtractSignatureOptions<TSignature>;
};

export interface ITypedConsoleCommand<TSignature extends string = string> {
    argument<K extends keyof ExtractSignatureArguments<TSignature>>(key: K): ExtractSignatureArguments<TSignature>[K];
    arguments(): ExtractSignatureArguments<TSignature>;
    option<K extends keyof ExtractSignatureOptions<TSignature>>(key: K): ExtractSignatureOptions<TSignature>[K];
    options(): ExtractSignatureOptions<TSignature>;
}
