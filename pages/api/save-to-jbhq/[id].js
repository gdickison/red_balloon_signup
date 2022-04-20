export default function handler(req, res) {
  fetch(process.env.BACKEND_URL + `employer/${req.query.id}/save`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "accept": "application/json"
    },
    body: JSON.stringify({
      employer_id: req.query.id,
      email: req.body.email,
      password: req.body.password,
      terms_accepted: true
    })
  })
  .then(response => response.json())
  .then(res.status(200).json({ message: 'Employer Saved'}))
}