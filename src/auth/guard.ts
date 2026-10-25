import type { IAuthenticatable } from './authenticatable';

/**
 * Interface defining Guard contract.
 */
interface IGuard {
    user(): Promise<IAuthenticatable | null | any>;
    check(): Promise<boolean>;
    guest(): Promise<boolean>;
    id(): Promise<any>;
    validate(credentials?: Record<string, any>): Promise<boolean>;
    hasUser(): boolean;
    setUser(user: any): this;
    [key: string]: any;
}

/**
 * Interface defining Stateful Guard contract.
 */
interface IStatefulGuard extends IGuard {
    attempt(credentials?: Record<string, any>, remember?: boolean): Promise<boolean>;
    login(user: IAuthenticatable, remember?: boolean): Promise<void>;
    loginUsingId(id: any, remember?: boolean): Promise<IAuthenticatable | null>;
    logout(): Promise<void>;
}

/**
 * Interface defining Request Auth context contract.
 */
interface IAuthRequest {
    guard<T = IGuard | IStatefulGuard>(name?: string): T;
    user(guard?: string): Promise<IAuthenticatable | null | any>;
    check(guard?: string): Promise<boolean>;
    guest(guard?: string): Promise<boolean>;
    id(guard?: string): Promise<any>;
    shouldUse(name?: string): Promise<IAuthenticatable | null | any>;
    setDefaultDriverForCurrentRequest(name: string): void;
    createUserProvider?(provider?: string): any;
    [key: string]: any;
}

/**
 * Class Guard Contract stub.
 */
class Guard implements IGuard {
    public async user(): Promise<any> { return null; }
    public async check(): Promise<boolean> { return false; }
    public async guest(): Promise<boolean> { return true; }
    public async id(): Promise<any> { return null; }
    public async validate(credentials?: Record<string, any>): Promise<boolean> { return false; }
    public hasUser(): boolean { return false; }
    public setUser(user: any): this { return this; }
}

export type { IGuard, IStatefulGuard, IAuthRequest };
export default Guard;
