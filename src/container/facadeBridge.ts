/**
 * Dynamic Container & Proxy Facade Bridge
 * 
 * Maps static facade calls directly to container instances with full type fidelity.
 */

export interface IServiceContainerRegistry {
    [key: string]: any;
}

export type FacadeAccessor<TRegistry extends IServiceContainerRegistry, K extends keyof TRegistry> = TRegistry[K];

export interface ITypedContainer<TRegistry extends IServiceContainerRegistry = IServiceContainerRegistry> {
    bind<K extends keyof TRegistry>(abstract: K, concrete: any): void;
    singleton<K extends keyof TRegistry>(abstract: K, concrete: any): void;
    make<K extends keyof TRegistry>(abstract: K): TRegistry[K];
    make<T = unknown>(abstract: string): T;
    has(abstract: string): boolean;
}

export interface IFacade<TTarget = any> {
    getFacadeAccessor(): string | symbol;
    getFacadeRoot(): TTarget;
    clearResolvedInstance(name: string): void;
    clearResolvedInstances(): void;
}
