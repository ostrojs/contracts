import type { IHttpRequest } from './request';
import type { IHttpResponse } from './response';

/**
 * Interface defining HttpContext contract.
 */
interface IHttpContext {
    request: IHttpRequest;
    response: IHttpResponse;
    redirect?: any;
    url?: any;
    next?: Function;
    setCurrentNext?(next: Function): void;
    [key: string]: any;
}

/**
 * Class HttpContext.
 */
class HttpContext {
    public request: any;
    public response: any;
}

export type { IHttpContext };
export default HttpContext;