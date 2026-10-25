/**
 * Interface defining Collection Contract.
 */
interface ICollection<T = any> extends Iterable<T> {
    isArray?(): boolean;
    isJson?(): boolean;
    all(): T[];
    toArray(): T[];
    toJSON(): T[];
    count(): number;
    isEmpty(): boolean | ICollection<any>;
    isNotEmpty(): boolean | ICollection<any>;
    first(predicate?: (item: T) => boolean, defaultValue?: any): T | null;
    last(predicate?: (item: T) => boolean, defaultValue?: any): T | null;
    get(key: any, defaultValue?: any): any;
    put(key: any, value: any): this;
    push(...items: any[]): this;
    prepend(...items: any[]): this;
    has?(key: any): boolean;
    unique?(): ICollection<T>;
    difference?(other: any): ICollection<T>;
    loadMorph?(relation: any, relations: any): this;
    loadMorphCount?(relation: any, relations: any): this;
    getIterator?(): Iterator<T>;
    flatMap<R = any>(callback: (item: T, key: any) => R[]): ICollection<R>;
    map<R = any>(callback: (item: T, key: any) => R): ICollection<R>;
    filter(predicate: (item: T, key: any) => boolean): ICollection<T>;
    reduce<U = any>(callback: (accumulator: U, item: T) => U, initialValue?: U): U;
    [Symbol.iterator](): Iterator<T>;
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