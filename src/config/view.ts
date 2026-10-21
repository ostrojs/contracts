interface EngineConfig {
    driver: string;
    extension: string;
    cache: boolean;
    options: Record<string, unknown>;
    root: string;
}

interface ViewConfig {
    default: string;
    engines: Record<string, EngineConfig>;
}

class ViewConfigStub implements ViewConfig {
    default = 'ejs';
    engines: Record<string, EngineConfig> = {};
}

export type { EngineConfig, ViewConfig };
export default ViewConfigStub;
