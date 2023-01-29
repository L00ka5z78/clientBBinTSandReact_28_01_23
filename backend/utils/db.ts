
import { createPool } from 'mysql2/promise';


export const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'clientdb',
    port: 3306,
    namedPlaceholders: true,
    decimalNumbers: true
});


