import type { OutgoingMessage, ServerResponse } from 'node:http';

/**
 * Interface defining HttpResponse Contract.
 */
interface IHttpResponse {
    header(key: string, value?: any): any;
    getHeader?(name: string): number | string | string[] | undefined;
    setHeader?(name: string, value: number | string | readonly string[]): this;
    hasHeader?(name: string): boolean;
    removeHeader?(name: string): this;
    json(data?: any, status?: number): any;
    send(data?: any, status?: number): any;
    status?(code: number): this;
    cookie?(name: string, value: any, options?: Record<string, any>): this;
    clearCookie?(name: string, options?: Record<string, any>): this;
    redirect?(url: string, status?: number): any;
    headersSent?: boolean;
    view?: any;
    res?: ServerResponse | OutgoingMessage;
    response?(): ServerResponse | OutgoingMessage;
}

/**
  * Class HttpResponse.
  */
class HttpResponse implements IHttpResponse {
    public status(code: number): this {
        return this;
    }

    public getHeader(name: string): number | string | string[] | undefined {
        return undefined;
    }

    public setHeader(name: string, value: number | string | readonly string[]): this {
        return this;
    }

    public hasHeader(name: string): boolean {
        return false;
    }

    public removeHeader(name: string): this {
        return this;
    }

    public header(key: any, value?: any): any {
        return this;
    }

    public json(data: any): this {
        return this;
    }

    public send(data: any): this {
        return this;
    }

    public cookie(name: string, value: any, options: Record<string, any> = {}): this {
        return this;
    }

    public clearCookie(name: string, options: Record<string, any> = {}): this {
        return this;
    }

    public redirect(url: string, status: number = 302): any {
        return null;
    }
}

export type { IHttpResponse };
export default HttpResponse;