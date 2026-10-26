interface GuardConfig {
    driver: string;
    provider: string;
    hash?: boolean;
    secret?: string;
    algorithm?: string;
    issuer?: string;
    audience?: string;
    input_key?: string;
    storage_key?: string;
    token_repository?: any;
    client_repository?: any;
    [key: string]: any;
}

interface EloquentProviderConfig {
    driver: 'eloquent';
    model: unknown;
    [key: string]: any;
}

interface DatabaseProviderConfig {
    driver: 'database';
    table: string;
    connection?: string | null;
    [key: string]: any;
}

interface GenericProviderConfig {
    driver: string;
    model?: unknown;
    table?: string;
    connection?: string | null;
    [key: string]: any;
}

type ProviderConfig = EloquentProviderConfig | DatabaseProviderConfig | GenericProviderConfig;

interface AuthConfig {
    defaults: {
        guard: string;
    };
    guards: Record<string, GuardConfig>;
    providers: Record<string, ProviderConfig>;
}

class AuthConfigStub implements AuthConfig {
    defaults = { guard: 'web' };
    guards: Record<string, GuardConfig> = {};
    providers: Record<string, ProviderConfig> = {};
}

export type { GuardConfig, ProviderConfig, AuthConfig };
export default AuthConfigStub;
