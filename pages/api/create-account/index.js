// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Client } from 'pg'

export default async function handler(req, res) {
  const body = req.body
  // const checkForUser = `SELECT exists (SELECT 1 FROM employer_login WHERE email = ${body}.email AND hash_pass = ${body}.password);`
  // const client = new Client({connectionString: process.env.DATABASE_URL})
  // await client.connect()
  // const response = await client.query(checkForUser)
  // console.log('res', response)
  // await client.end()

  res.status(200).json({ data: `${body.email} ${body.password}` })
}
