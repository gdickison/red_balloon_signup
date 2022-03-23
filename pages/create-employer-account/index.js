import CreateEmployerAccount from '../../src/components/CreateEmployerAccount'
import FlyingEagle from '../../src/assets/FlyingEagle'
import EmployerPledge from '../../src/components/EmployerPledge'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const [newUser, setNewUser] = useState({email: null, password: null})
  const [showCreateEmployerAccount, setShowCreateEmployerAccount] = useState(true)
  const [showFlyingEagle, setShowFlyingEagle] = useState(false)
  const [showEmployerPledge, setShowEmployerPledge] = useState(false)
  const router = useRouter()

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
    document.getElementById("create-employer-account").classList.add("fade-out")

    setShowFlyingEagle(true)
    setTimeout(() => {
      setShowCreateEmployerAccount(false)
    }, 1900)
    setTimeout(() => {
      setShowEmployerPledge(true)
      console.log('time!')
    },1800)
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
    router.push('/new-employer-account-detail')
  }

  return (
    <div>
      <CreateEmployerAccount
        show={showCreateEmployerAccount}
        eventHandler={handleCreateAccount}
        changeHandler={handleChange}
      />
      {/* Flying eagle transition */}
      <FlyingEagle
        show={showFlyingEagle}
      />
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
