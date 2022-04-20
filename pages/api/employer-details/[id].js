// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { useRouter } from "next/router"
export default function handler(req, res) {
  const {id} = req.query
  console.log(req.query)
  console.log(id)
  fetch(process.env.BACKEND_URL + `employer/${req.query.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "accept": "application/json"
    },
    body: JSON.stringify({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      business_name: req.body.businessName,
      website: req.body.website,
      country_code: req.body.phone,
      address1: req.body.address1,
      address2: req.body.address2,
      phone: req.body.city,
      city: req.body.region,
      region: req.body.countryCode,
      postal_code: req.body.postalCode,
      why_join: req.body.whyJoin,
      awareness: req.body.awareness
    })
  })
  .then(response => response.json())
  .then(res.status(200).json({ message: 'Employer Updated'}))
}
