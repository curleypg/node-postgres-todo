const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/inventory';

const client = new pg.Client(connectionString);
client.connect();

var setup_query = 'CREATE TABLE items(id SERIAL PRIMARY KEY, name VARCHAR(40) not null, description text, date_added timestamp not null, date_modified timestamp, deleted boolean default false)';
const query = client.query(setup_query);
query.on('end', () => { client.end(); });
