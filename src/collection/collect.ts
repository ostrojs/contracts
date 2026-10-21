/**
 * Interface defining Collection Contract.
 */
interface ICollection<T = any> {
    all(): T[];
    toArray(): T[];
    toJSON(): T[];
    count(): number;
    isEmpty(): boolean;
    isNotEmpty(): boolean;
    first(predicate?: (item: T) => boolean, defaultValue?: any): T | null;
    last(predicate?: (item: T) => boolean, defaultValue?: any): T | null;
    get(key: any, defaultValue?: any): any;
    put(key: any, value: any): this;
    map<R = any>(callback: (item: T, key: any) => R): ICollection<R>;
    filter(predicate: (item: T, key: any) => boolean): ICollection<T>;
    reduce<U = any>(callback: (accumulator: U, item: T) => U, initialValue?: U): U;
}

/**
 * Class CollectContract.
 */
class CollectContract {
    public all(): any[] {
        return [];
    }
}

export type { ICollection };
export default CollectContract;