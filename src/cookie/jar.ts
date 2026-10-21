/**
 * Cookie options specification.
 */
interface CookieOptions {
    path?: string;
    domain?: string;
    secure?: boolean;
    httpOnly?: boolean;
    maxAge?: number;
    signed?: boolean;
    sameSite?: true | false | 'lax' | 'strict' | 'none';
    encode?: (val: string) => string;
    expires?: Date;
    [key: string]: any;
}

/**
 * Interface defining Cookie Jar Contract.
 */
interface ICookieJar {
    createCookies(name: string, value: any, options?: CookieOptions, isSecure?: boolean): string;
    getJsonCookies(cookies: Record<string, any>, options?: Record<string, any>): Record<string, any>;
    getCookies(cookies?: string, options?: Record<string, any>): Record<string, any>;
    getSignedCookies(cookies: Record<string, any>, secrets: string | string[], options?: Record<string, any>): Record<string, any>;
    parse(options?: Record<string, any>): Function;
}

/**
 * Class Jar Contract.
 */
class Jar implements ICookieJar {
    public createCookies(name: string, value: any, options: CookieOptions = {}, isSecure: boolean = false): string {
        return '';
    }

    public getJsonCookies(cookies: Record<string, any>, options: Record<string, any> = {}): Record<string, any> {
        return {};
    }

    public getCookies(cookies: string = '', options: Record<string, any> = {}): Record<string, any> {
        return {};
    }

    public getSignedCookies(cookies: Record<string, any>, secrets: string | string[], options: Record<string, any> = {}): Record<string, any> {
        return {};
    }

    public parse(options?: Record<string, any>): Function {
        return () => {};
    }
}

export type { ICookieJar, CookieOptions };
export default Jar;