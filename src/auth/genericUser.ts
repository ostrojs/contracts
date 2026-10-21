/**
 * Interface defining Generic User Contract.
 */
interface IGenericUser {
    getAuthIdentifierName(): string;
    getAuthIdentifier(): any;
    getAuthPassword(): string | null;
    getRememberToken(): string | null;
    setRememberToken(value: string | null): void;
    getRememberTokenName(): string;
}

/**
 * Class GenericUserInterface.
 */
class GenericUserInterface implements IGenericUser {
    public getAuthIdentifierName(): string {
        return 'id';
    }

    public getAuthIdentifier(): any {
        return null;
    }

    public getAuthPassword(): string | null {
        return null;
    }

    public getRememberToken(): string | null {
        return null;
    }

    public setRememberToken(value: string | null): void {
    }

    public getRememberTokenName(): string {
        return 'remember_token';
    }
}

export type { IGenericUser };
export default GenericUserInterface;