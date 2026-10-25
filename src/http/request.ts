import type { IncomingMessage } from 'node:http';
import type { IAuthRequest } from '../auth/guard';

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
    method?(): string;
    query?: Record<string, any>;
    url?: string;
    params?: Record<string, any>;
    cookie?(key?: string, defaultValue?: any): any;
    session?: any;
    user?(guard?: string): Promise<any> | any;
    auth?: IAuthRequest;
    req?: IncomingMessage;
    request?(): IncomingMessage;
    id?: string;
    [key: string]: any;
}

/**
 * Class HttpRequest.
 */
class HttpRequest {
}

export type { IHttpRequest };
export default HttpRequest;