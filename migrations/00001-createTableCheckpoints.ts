import type { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE checkpoints (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(100) NOT NULL,
      address varchar(255) NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE checkpoints`;
}
