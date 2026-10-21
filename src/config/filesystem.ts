interface LocalDiskConfig {
    driver: 'local';
    root: string;
    encoding: string;
}

interface AzureDiskConfig {
    driver: 'azure';
    key?: string;
    account?: string;
    container?: string;
    url?: string;
}

interface S3DiskConfig {
    driver: 's3';
    key?: string;
    secret?: string;
    region?: string;
    bucket?: string;
    url?: string;
    endpoint?: string;
    use_path_style_endpoint: boolean;
}

type FilesystemDiskConfig =
    | LocalDiskConfig
    | AzureDiskConfig
    | S3DiskConfig
    | Record<string, unknown>;

interface FilesystemConfig {
    default: string;
    cloud: string;
    disks: Record<string, FilesystemDiskConfig>;
}

class FilesystemConfigStub implements FilesystemConfig {
    default = 'local';
    cloud = 's3';
    disks: Record<string, FilesystemDiskConfig> = {};
}

export type {
    LocalDiskConfig,
    AzureDiskConfig,
    S3DiskConfig,
    FilesystemDiskConfig,
    FilesystemConfig
};
export default FilesystemConfigStub;
