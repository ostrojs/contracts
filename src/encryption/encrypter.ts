/**
 * Interface defining Encrypter Contract.
 */
interface IEncrypter {
    encrypt(value: any, serialize?: boolean): string;
    encryptString(value: string): string;
    decrypt<T = any>(payload: any, unserialize?: boolean): T;
    decryptString(payload: any): string;
    getKey(): string;
}

/**
 * Class EncrypterContract.
 */
class EncrypterContract implements IEncrypter {
    public encrypt(value: any, serialize: boolean = true): string {
        return '';
    }

    public encryptString(value: string): string {
        return '';
    }

    public decrypt<T = any>(payload: any, unserialize: boolean = true): T {
        return (null as unknown) as T;
    }

    public decryptString(payload: any): string {
        return '';
    }

    public getKey(): string {
        return '';
    }
}

export type { IEncrypter };
export default EncrypterContract;