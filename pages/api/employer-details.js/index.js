// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  const body = req.body
  console.log('body', body)

  res.status(200).json({ data: `${body.firstName} ${body.lastName}` })
}
