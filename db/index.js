import dns from 'dns';
import pg from "pg";
import * as dotenv from "dotenv";
dotenv.config();

dns.setDefaultResultOrder('ipv4first')

export const DATABASE_URL = process.env.URL_POSTGRES;
console.log(DATABASE_URL);

export const pool = new pg.Pool({
  connectionString: DATABASE_URL,
});
