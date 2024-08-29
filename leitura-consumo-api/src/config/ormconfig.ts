
import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'sqlite',
    database: './database.sqlite',
    entities: [
        // Add entity paths here
    ],
    synchronize: true,
};

export default config;
