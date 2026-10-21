/**
 * Interface defining CanResetPassword Contract.
 */
interface ICanResetPassword {
    getEmailForPasswordReset(): string;
    sendPasswordResetNotification(token: string): Promise<void> | void;
}

/**
 * Class CanResetPassword.
 */
class CanResetPassword implements ICanResetPassword {
    public getEmailForPasswordReset(): string {
        return '';
    }

    public sendPasswordResetNotification(token: string): Promise<void> | void {
    }
}

export type { ICanResetPassword };
export default CanResetPassword;