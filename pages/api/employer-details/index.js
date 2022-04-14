// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  const body = req.body

  res.status(200).json({ data: `${body.firstName} ${body.lastName} ${body.businessName} ${body.website} phone ${body.address} ${body.city} ${body.region} ${body.countryCode} ${body.postalCode} ${body.why} ${body.source}` })
}
