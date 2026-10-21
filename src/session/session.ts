/**
 * Interface defining Session Contract.
 */
interface ISession {
    getId(): string;
    flush(): boolean;
    save(callback: Function): void;
    pull<T = unknown>(key: string, defaultValue?: T | null): T | null;
    regenerateToken(): void;
    remove(key: string): void;
    push<T = unknown>(key: string, value: T): void;
    merge(key: string, value: any, defaultValue?: Record<string, any>): void;
    regenerate(destroy: boolean, cb?: Function): void;
    has(key: string): boolean;
    forget(key: string): void;
    get<T = unknown>(key: string, defaultValue?: T | null): T | null;
    all(): Record<string, any>;
    put<T = unknown>(key: string | Record<string, any>, value?: T): void;
    flash<T = unknown>(key: string | Record<string, any>, value?: T): void;
    flashOnly(keys: string[] | string): void;
    flashExcept(keys: string[] | string): void;
    reflash(): void;
    keep(keys: string[] | string): void;
    token(): string | null;
}

/**
 * Class Session Contract.
 */
class Session implements ISession {
    public getId(): string {
        return '';
    }

    public flush(): boolean {
        return true;
    }

    public save(callback: Function): void {
    }

    public pull<T = unknown>(key: string, defaultValue?: T | null): T | null {
        return null;
    }

    public regenerateToken(): void {
    }

    public remove(key: string): void {
    }

    public push<T = unknown>(key: string, value: T): void {
    }

    public merge(key: string, value: any, defaultValue: Record<string, any> = {}): void {
    }

    public regenerate(destroy: boolean, cb?: Function): void {
    }

    public has(key: string): boolean {
        return false;
    }

    public forget(key: string): void {
    }

    get<T = unknown>(key: string, defaultValue?: T | null): T | null {
        return null;
    }

    public all(): Record<string, any> {
        return {};
    }

    public put<T = unknown>(key: string | Record<string, any>, value?: T): void {
    }

    public flash<T = unknown>(key: string | Record<string, any>, value?: T): void {
    }

    public flashOnly(keys: string[] | string): void {
    }

    public flashExcept(keys: string[] | string): void {
    }

    public reflash(): void {
    }

    public keep(keys: string[] | string): void {
    }

    public token(): string | null {
        return null;
    }
}

export type { ISession };
export default Session;