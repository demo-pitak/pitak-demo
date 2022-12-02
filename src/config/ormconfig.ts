import path = require('path');
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    password: 'hello',
    port: 5432,
    username: 'postgres',
    database: 'pitak',
    synchronize: true,
    entities: [path.join(__dirname, '..', 'entities', '*.entity.{ts, js}')],
    migrations: [path.join(__dirname, '..', 'migrations', '*.{ts, js}')]
})