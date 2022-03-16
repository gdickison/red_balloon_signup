// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  const body = req.body
  console.log('body', body)

  if(!body.email || !body.password){
    return res.status(400).json({data: 'Email or password not found'})
  }
  res.status(200).json({ data: `${body.email} ${body.password}` })
}
