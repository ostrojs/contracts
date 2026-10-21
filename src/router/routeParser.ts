/**
 * Dynamic Route Parsing & Context Engine
 * 
 * Recursively parses route string literals (e.g. '/teams/:teamId/members/:memberId')
 * and extracts colon-prefixed parameters into an explicit typed parameter object.
 */
export type CleanRouteSegment<S extends string> =
    S extends `${infer Param}?` ? Param : S;

export type ExtractRouteParams<Path extends string> =
    Path extends `${string}:${infer Rest}`
        ? Rest extends `${infer Param}/${infer Tail}`
            ? { [K in CleanRouteSegment<Param> | keyof ExtractRouteParams<`/${Tail}`>]: string }
            : { [K in CleanRouteSegment<Rest>]: string }
        : Path extends `${string}*${infer Wildcard}`
            ? { [K in (Wildcard extends '' ? 'wildcard' : Wildcard)]: string }
            : {};

/**
 * Strongly typed route handler context mapping route params to exact keys.
 */
export interface TypedRouteContext<
    Path extends string = string,
    TBody = unknown,
    TQuery = Record<string, any>
> {
    params: ExtractRouteParams<Path>;
    body: TBody;
    query: TQuery;
    request: any;
    response: any;
    view(name: string, data?: Record<string, any>): any;
}
