/**
 * Interface defining Paginator contract.
 */
interface IPaginator<T = any> {
    items(): T[];
    count(): number;
    currentPage(): number;
    perPage(): number;
    hasPages(): boolean;
    hasMorePages(): boolean;
    path(): string;
    url(page: number): string;
    fragment(fragment?: string): this | string | null | undefined;
    appends(key: any, value?: any): this;
}

/**
 * Interface defining LengthAwarePaginator contract.
 */
interface ILengthAwarePaginator<T = any> extends IPaginator<T> {
    total(): number;
    lastPage(): number;
    firstItem(): number | null;
    lastItem(): number | null;
}

/**
 * Class Paginator Contract.
 */
class PaginatorContract {
}

export type {
    IPaginator,
    ILengthAwarePaginator
};
export default PaginatorContract;
