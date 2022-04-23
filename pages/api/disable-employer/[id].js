export default function handler(req, res) {
  fetch(process.env.BACKEND_URL + `employer/${req.query.id}/disable`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
      "accept": "application/json"
    },
    body: JSON.stringify({
      employer_id: req.query.id
    })
  })
  .then(response => response.json())
  .then(res.status(200).json({message: "Employer Disabled"}))
}