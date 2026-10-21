interface StackChannelConfig {
    driver: 'stack';
    channels: string[];
    ignore_exceptions: boolean;
}

interface SingleChannelConfig {
    driver: 'single';
    path: string;
    level: string;
}

interface DailyChannelConfig {
    driver: 'daily';
    path: string;
    date_pattern: string;
    level: string;
    days: number;
}

interface ConsoleChannelConfig {
    driver: 'console';
    level: string;
}

interface SyslogChannelConfig {
    driver: 'syslog';
    level: string;
}

type LogChannelConfig =
    | StackChannelConfig
    | SingleChannelConfig
    | DailyChannelConfig
    | ConsoleChannelConfig
    | SyslogChannelConfig
    | Record<string, unknown>;

interface LoggingConfig {
    default: string;
    channels: Record<string, LogChannelConfig>;
}

class LoggingConfigStub implements LoggingConfig {
    default = 'stack';
    channels: Record<string, LogChannelConfig> = {};
}

export type {
    StackChannelConfig,
    SingleChannelConfig,
    DailyChannelConfig,
    ConsoleChannelConfig,
    SyslogChannelConfig,
    LogChannelConfig,
    LoggingConfig
};
export default LoggingConfigStub;
