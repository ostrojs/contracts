/**
 * Interface defining Authorizable Contract.
 */
interface IAuthorizable {
    can(ability: string, ...args: any[]): Promise<boolean> | boolean;
    cannot(ability: string, ...args: any[]): Promise<boolean> | boolean;
}

/**
 * Class Authorizable.
 */
class Authorizable implements IAuthorizable {
    public can(ability: string, ...args: any[]): Promise<boolean> | boolean {
        return false;
    }

    public cannot(ability: string, ...args: any[]): Promise<boolean> | boolean {
        return true;
    }
}

export type { IAuthorizable };
export default Authorizable;