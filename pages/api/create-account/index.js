export default async function handler(req, res) {
  if(req.body.email && req.body.password){
    let url = new URL(process.env.BACKEND_URL + "employer")
    url.search = new URLSearchParams({
      email: req.body.email
    })

    await fetch(url)
      .then(response => response.json())
      .then(data => res.status(200).json(data))
  }
}
