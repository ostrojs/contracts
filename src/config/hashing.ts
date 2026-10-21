interface BcryptConfig {
    rounds: number;
}

interface CryptoConfig {
    rounds: number;
}

interface HashingConfig {
    driver: string;
    bcrypt: BcryptConfig;
    crypto: CryptoConfig;
}

class HashingConfigStub implements HashingConfig {
    driver = 'bcrypt';
    bcrypt = { rounds: 10 };
    crypto = { rounds: 10 };
}

export type { BcryptConfig, CryptoConfig, HashingConfig };
export default HashingConfigStub;
