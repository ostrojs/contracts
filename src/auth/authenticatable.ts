/**
 * Interface defining Authenticatable User Contract.
 */
interface IAuthenticatable {
    getAuthIdentifierName(): string;
    getAuthIdentifier(): any;
    getAuthIdentifierForBroadcasting(): any;
    getAuthPassword(): string | null;
    getRememberToken(): string | null;
    setRememberToken(value: string | null): void;
    getRememberTokenName(): string;
}

/**
 * Class Authenticatable.
 */
class Authenticatable implements IAuthenticatable {
    public getAuthIdentifierName(): string {
        return 'id';
    }

    public getAuthIdentifier(): any {
        return null;
    }

    public getAuthIdentifierForBroadcasting(): any {
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

export type { IAuthenticatable };
export default Authenticatable;