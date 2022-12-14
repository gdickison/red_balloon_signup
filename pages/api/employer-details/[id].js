// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { useRouter } from "next/router"
export default function handler(req, res) {
  const {id} = req.query
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
      country_code: req.body.countryCode,
      address1: req.body.address1,
      address2: req.body.address2,
      phone: req.body.phone,
      city: req.body.city,
      region: req.body.region,
      postal_code: req.body.postalCode,
      why_join: req.body.whyJoin,
      awareness: req.body.awareness
    })
  })
  .then(response => {
    if(response.status === 409){
      res.status(409).json({message: 'Employer already exists'})
    } else if(response.status === 200){
      res.status(200).json({message: 'Employer Updated'})
    }
  })
}
