// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const body = req.body

  res.status(200).json({ data: `${body.email} ${body.password}` })
}
