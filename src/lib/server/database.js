import config from '../../../knexfile.js';
import knex from 'knex';
import stringcase from 'knex-stringcase';

/** @type {import('knex').Knex} */
const db = knex(stringcase(config));

/** Ensure a connection to the database. */
await db.raw('SELECT 1');

export default db;
