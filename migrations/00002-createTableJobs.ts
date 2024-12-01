import type { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE jobs (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      cp_a int REFERENCES checkpoints (id) ON DELETE cascade,
      code_a varchar(50) NOT NULL,
      cp_b int REFERENCES checkpoints (id) ON DELETE cascade,
      code_b varchar(50) NOT NULL,
      points int NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE jobs`;
}
