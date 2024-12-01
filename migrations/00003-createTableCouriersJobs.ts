import type { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE couriers_jobs (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      id_courier int REFERENCES couriers (id) ON DELETE cascade,
      id_job int REFERENCES jobs (id) ON DELETE cascade,
      finished boolean DEFAULT FALSE,
      points int DEFAULT 0
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE couriers_jobs`;
}
