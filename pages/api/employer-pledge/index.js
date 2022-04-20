// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {

  await fetch(process.env.BACKEND_URL + "employer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "accept": "application/json"
    },
    body: JSON.stringify({
      email: req.body.email,
      password: req.body.password,
      terms_accepted: req.body.terms_accepted
    })
  })
  .then(response => response.json())
  .then(data => data.id ? res.status(200).json({id: data.id}) : console.log('error'))
}
