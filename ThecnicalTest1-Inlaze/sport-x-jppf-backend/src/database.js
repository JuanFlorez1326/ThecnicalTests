import { createPool } from 'mysql2/promise';

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '0210',
    database: 'thecnical_test',
    port: 3306
});