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
  .then(response => {
    if(response.status === 404){
      res.status(404).json({message: 'Employer was not found'})
    } else if (response.status === 200){
      res.status(200).json({message: 'Employer has been enabled and added to JBHQ'})
    }
  })
}