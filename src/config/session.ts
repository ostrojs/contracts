interface SessionConfig {
    driver: string;
    lifetime: number;
    expire_on_close: boolean;
    encrypt: boolean;
    signed: boolean;
    files: string;
    connection: string | null;
    table: string;
    store: string | null;
    lottery: [number, number];
    cookie: string;
    path: string;
    domain: string | null;
    secure: boolean;
    http_only: boolean;
    same_site: 'lax' | 'strict' | 'none' | null;
    resave: boolean;
    saveUninitialized: boolean;
}

class SessionConfigStub implements SessionConfig {
    driver = 'file';
    lifetime = 120;
    expire_on_close = false;
    encrypt = false;
    signed = false;
    files = '';
    connection = null;
    table = 'sessions';
    store = null;
    lottery: [number, number] = [2, 100];
    cookie = 'ostro_session';
    path = '/';
    domain = null;
    secure = false;
    http_only = true;
    same_site: 'lax' | 'strict' | 'none' | null = 'lax';
    resave = false;
    saveUninitialized = false;
}

export type { SessionConfig };
export default SessionConfigStub;
