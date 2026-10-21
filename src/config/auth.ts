interface GuardConfig {
    driver: string;
    provider: string;
    hash?: boolean;
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
