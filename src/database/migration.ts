/**
 * Interface defining Database Migration contract.
 */
interface IMigration {
    up(): Promise<void> | void;
    down(): Promise<void> | void;
    getConnection?(): string | null;
}

/**
 * Class Migration contract.
 */
class MigrationContract {
    public async up(): Promise<void> {}
    public async down(): Promise<void> {}
    public getConnection(): string | null {
        return null;
    }
}

export type { IMigration };
export default MigrationContract;
