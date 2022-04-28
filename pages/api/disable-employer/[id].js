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
  .then(res => res.json())
  .then(response => {
    if (response.statusCode == 200) {
      res.status(200).json({message: 'Employer has been disabled'});
    } else {
      res.status(response.statusCode).json({message: response.message});
    }
  })
}
