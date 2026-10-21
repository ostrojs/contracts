interface AxiosRequestOptions {
    maxContentLength: number;
    httpAgent: any;
    httpsAgent: any;
    timeout: number;
}

interface AxiosRequestConfig {
    driver: 'axios';
    options: AxiosRequestOptions;
}

interface RequestAdapterOptions {
    maxContentLength: number;
    forever: boolean;
    timeout: number;
}

interface RequestAdapterConfig {
    driver: 'request';
    options: RequestAdapterOptions;
}

type HttpRequestConfig = AxiosRequestConfig | RequestAdapterConfig | Record<string, unknown>;

interface XhrConfig {
    default: string;
    requests: Record<string, HttpRequestConfig>;
}

class XhrConfigStub implements XhrConfig {
    default = 'axios';
    requests: Record<string, HttpRequestConfig> = {};
}

export type {
    AxiosRequestOptions,
    AxiosRequestConfig,
    RequestAdapterOptions,
    RequestAdapterConfig,
    HttpRequestConfig,
    XhrConfig
};
export default XhrConfigStub;
