import type { IHttpRequest } from '../http/request';
import type { IHttpResponse } from '../http/response';
import type { IAuthRequest } from '../auth/guard';

/**
 * Interface defining Foundation HttpContext contract.
 */
interface IHttpContext {
    request: IHttpRequest;
    response: IHttpResponse;
    $app?: any;
    auth?: IAuthRequest;
    view?: any;
    session?: any;
    params?: Record<string, any>;
    redirect?: any;
    url?: any;
    next?: Function;
    setCurrentNext?(next: Function): void;
    csrf_token?(): string;
    csrfToken?(): string;
    [key: string]: any;
}

/**
 * Class HttpContext contract.
 */
class HttpContextContract {
    public request: any;
    public response: any;
    public get auth(): any { return undefined; }
    public get view(): any { return undefined; }
    public get session(): any { return undefined; }
    public get params(): any { return undefined; }
    public csrf_token(): string { return ''; }
    public csrfToken(): string { return ''; }
}

export type { IHttpContext };
export default HttpContextContract;
