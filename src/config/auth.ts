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

interface ProviderConfig {
    driver: string;
    model: unknown;
}

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
