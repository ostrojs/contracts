interface MemoryStoreConfig {
    driver: string;
}

interface DatabaseStoreConfig {
    driver: string;
    table: string;
    connection: string | null;
}

interface FileStoreConfig {
    driver: string;
    path: string;
}

interface SessionStoreConfig {
    stores: string;
    path: string;
}

interface RedisStoreServerConfig {
    host: string;
    port: number | string;
    password?: string;
    user?: string;
}

interface RedisStoreConfig {
    driver: string;
    server: RedisStoreServerConfig;
}

interface MemcachedStoreServerConfig {
    host: string;
    port: number | string;
    weight: number;
    user?: string;
    password?: string;
}

interface MemcachedStoreConfig {
    driver: string;
    persistent_id?: string;
    options: Record<string, unknown>;
    server: MemcachedStoreServerConfig;
}

type CacheStoreConfig =
    | MemoryStoreConfig
    | DatabaseStoreConfig
    | FileStoreConfig
    | SessionStoreConfig
    | RedisStoreConfig
    | MemcachedStoreConfig
    | Record<string, unknown>;

interface CacheConfig {
    default: string;
    enabled: boolean;
    stores: Record<string, CacheStoreConfig>;
    prefix: string;
}

class CacheConfigStub implements CacheConfig {
    default = 'file';
    enabled = true;
    stores: Record<string, CacheStoreConfig> = {};
    prefix = 'ostro';
}

export type {
    MemoryStoreConfig,
    DatabaseStoreConfig,
    FileStoreConfig,
    SessionStoreConfig,
    RedisStoreServerConfig,
    RedisStoreConfig,
    MemcachedStoreServerConfig,
    MemcachedStoreConfig,
    CacheStoreConfig,
    CacheConfig
};
export default CacheConfigStub;
