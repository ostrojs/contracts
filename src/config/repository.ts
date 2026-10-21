/**
 * Interface defining configuration repository contracts.
 */
interface IConfigRepository {
    get<T = unknown>(key: string, defaultValue?: T | null): T | null;
    set<T = unknown>(key: string, value: T): any;
    has(key: string): boolean;
}

/**
 * Class Repository Contract.
 */
class Repository implements IConfigRepository {
    /**
     * Get the specified configuration value.
     *
     * @param {string} key
     * @param {*} [defaultValue]
     * @returns {*}
     */
    get<T = unknown>(key: string, defaultValue?: T | null): T | null {
        return null;
    }

    /**
     * Set a given configuration value.
     *
     * @param {string} key
     * @param {*} value
     * @returns {*}
     */
    set<T = unknown>(key: string, value: T): any {
    }

    /**
     * Determine if the given configuration value exists.
     *
     * @param {string} key
     * @returns {boolean}
     */
    public has(key: string): boolean {
        return false;
    }
}

export type { IConfigRepository };
export default Repository;

