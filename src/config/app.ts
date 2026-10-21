interface AppConfig {
    name: string;
    port: number | string;
    host: string;
    env: string;
    debug: boolean;
    url: string;
    asset_url: string | null;
    timezone: string;
    locale: string;
    fallback_locale: string;
    key: string | undefined;
    cipher: string;
    providers: unknown[];
    aliases: Record<string, unknown>;
}

class AppConfigStub implements AppConfig {
    name = '';
    port = 8080;
    host = '127.0.0.1';
    env = 'development';
    debug = true;
    url = '';
    asset_url = null;
    timezone = 'UTC';
    locale = 'en';
    fallback_locale = 'en';
    key = undefined;
    cipher = 'AES-256-CBC';
    providers = [];
    aliases = {};
}

export type { AppConfig };
export default AppConfigStub;
