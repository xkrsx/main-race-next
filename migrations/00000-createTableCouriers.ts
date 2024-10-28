import type { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE couriers (
      id serial PRIMARY KEY,
      number int UNIQUE NOT NULL,
      name varchar(30) NOT NULL,
      points int DEFAULT 0,
      penalties int DEFAULT 0,
      password_hash varchar(80) NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE couriers`;
}
