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
  .then(response => {
    if(response.status = 404){
      res.status(404).json({message: 'Employer was not found'})
    } else if(response.status === 200){
      res.status(200).json({message: 'Employer has been disabled'})
    }
  })
}