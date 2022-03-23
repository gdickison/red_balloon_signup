// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Client } from 'pg'

export default async function handler(req, res) {
  // const newTableQuery = `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  // CREATE TABLE employer_login (
  //   id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
  //   email varchar(40) NOT NULL,
  //   hash_pass varchar(40) NOT NULL,
  //   terms_accepted BOOLEAN NOT NULL
  // );`
  // const client = new Client({connectionString: process.env.DATABASE_URL})

  // await client.connect()
  // const response = await client.query(newTableQuery)
  // console.log(response)
  // await client.end()
  res.status(200).json({ name: 'John Doe' })
}
