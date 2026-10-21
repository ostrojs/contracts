/**
 * Interface defining HttpRequest Contract.
 */
interface IHttpRequest {
    path(): string;
    fullUrl(): string;
    ip(): string;
    header(key: string, defaultValue?: any): any;
    input(key?: string, defaultValue?: any): any;
    all(): Record<string, any>;
    has(key: string | string[]): boolean;
    filled(key: string): boolean;
    file(key: string): any;
    expectsJson(): boolean;
    url?: string;
    cookie?(key?: string, defaultValue?: any): any;
    session?: any;
    user?(): any;
}

/**
 * Class HttpRequest.
 */
class HttpRequest {
}

export type { IHttpRequest };
export default HttpRequest;