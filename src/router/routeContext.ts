import type { IHttpRequest } from '../http/request';
import type { IHttpResponse } from '../http/response';
import type { IAuthRequest } from '../auth/guard';

/**
 * Interface defining Route Request contract.
 */
interface RouteRequest extends IHttpRequest {
    user(guard?: string): Promise<any> | any;
    auth?: IAuthRequest;
    [key: string]: any;
}

/**
 * Interface defining Route Response contract.
 */
interface RouteResponse extends IHttpResponse {
    send(data: any): any;
    [key: string]: any;
}

/**
 * Interface defining Route View Function helper.
 */
interface RouteViewFunction {
    (name: string, data?: Record<string, any>, status?: number): any;
    engine(name: string): this;
    render(file: string, data?: Record<string, any>, status?: number): any;
    [key: string]: any;
}

/**
 * Interface defining Route / HTTP Context passed to route handlers.
 */
interface HttpContext {
    request: IHttpRequest;
    response: IHttpResponse;
    auth?: IAuthRequest;
    view: RouteViewFunction;
    [key: string]: any;
}

type RouteContext = HttpContext;

/**
 * Interface defining a registered Route Entry.
 */
interface RouteEntry {
    middleware(name: string | string[]): this;
    prefix(prefix: string): this;
    name(name: string): this;
    [key: string]: any;
}

/**
 * Interface defining Route Registrar methods.
 */
interface RouteRegistrar {
    get(path: string, action?: any): RouteEntry;
    post(path: string, action?: any): RouteEntry;
    put(path: string, action?: any): RouteEntry;
    patch(path: string, action?: any): RouteEntry;
    delete(path: string, action?: any): RouteEntry;
    options(path: string, action?: any): RouteEntry;
    any(path: string, action?: any): RouteEntry;
    match(methods: string[], path: string, action?: any): RouteEntry;
    prefix(prefix: string): this;
    middleware(...middlewares: any[]): this;
    [key: string]: any;
}

/**
 * Class RouteContext contract.
 */
class RouteContextContract {
}

export type {
    HttpContext,
    RouteContext,
    RouteRegistrar,
    RouteResponse,
    RouteRequest,
    RouteEntry,
    RouteViewFunction
};
export default RouteContextContract;
