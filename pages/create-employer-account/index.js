import CreateEmployerAccount from '../../src/components/CreateEmployerAccount'
import EmployerPledge from '../../src/components/EmployerPledge'
import { useState } from 'react'

export default function Home() {
  const [newUser, setNewUser] = useState({email: null, password: null})
  const [showCreateEmployerAccount, setShowCreateEmployerAccount] = useState(true)
  const [showEmployerPledge, setShowEmployerPledge] = useState(false)

  const handleChange = e => {
    e.preventDefault()
    setNewUser({...newUser, [e.target.name]: e.target.value})
    console.log(newUser)
  }

  const handleCreateAccount = async e => {
    e.preventDefault()
    const JSONdata = JSON.stringify(newUser)
    const endpoint = '/api/create-account'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    const response = await fetch(endpoint, options)

    const result = await response.json()

    console.log(result)
    setShowCreateEmployerAccount(false)
    setShowEmployerPledge(true)
  }

  const [checked, setChecked] = useState(false)

  const handleChecked = () => {
    setChecked(!checked)
  }

  const handlePledge = async e => {
    e.preventDefault()
    console.log('click')
    const JSONdata = JSON.stringify(pledge.textContent)
    const endpoint = '/api/employer-pledge'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }
console.log(options)
    const response = await fetch(endpoint, options)
    const result = await response.json()

    console.log(result)
  }

  return (
    <div>
      <CreateEmployerAccount
        show={showCreateEmployerAccount}
        eventHandler={handleCreateAccount}
        changeHandler={handleChange}
      />
      {/* Flying eagle transition */}
      <section className='hidden h-screen'>
        <div>
          <h1>Flying eagle transition</h1>
        </div>
      </section>
      {/* Take the pledge */}
      <EmployerPledge
        show={showEmployerPledge}
        changeHandler={handleChecked}
        checked={checked}
        eventHandler={handlePledge}
      />
    </div>
  )
}
