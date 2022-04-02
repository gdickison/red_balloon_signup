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
  const [showAlert, setShowAlert] = useState(false)
  const router = useRouter()

  const handleChange = e => {
    e.preventDefault()
    setShowAlert(false)
    setNewUser({...newUser, [e.target.name]: e.target.value})
  }

  const handleCreateAccount = async e => {
    e.preventDefault()
    if(!newUser.email || !newUser.password){
      setShowAlert(true)
      return
    }
    localStorage.setItem("email", newUser.email)
    localStorage.setItem("password", newUser.password)
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

    document.getElementById("create-employer-account").classList.add("fade-out")

    setShowFlyingEagle(true)
    setTimeout(() => {
      setShowCreateEmployerAccount(false)
    }, 1900)
    setTimeout(() => {
      setShowEmployerPledge(true)
    },1800)
  }

  const closeAlert = () => {
    setShowAlert(false)
  }

  const [checked, setChecked] = useState(false)

  const handleChecked = () => {
    setShowAlert(false)
    setChecked(!checked)
  }

  const handlePledge = async e => {
    e.preventDefault()
    if(!checked){
      setShowAlert(true)
      return
    }
    const JSONdata = JSON.stringify(pledge.textContent)
    const endpoint = '/api/employer-pledge'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }
    const response = await fetch(endpoint, options)
    const result = await response.json()

    router.push('/new-employer-account-detail')
  }

  return (
    <div>
      <CreateEmployerAccount
        show={showCreateEmployerAccount}
        eventHandler={handleCreateAccount}
        changeHandler={handleChange}
        showAlert={showAlert}
        closeAlert={closeAlert}
      />
      <FlyingEagle
        show={showFlyingEagle}
      />
      <EmployerPledge
        show={showEmployerPledge}
        changeHandler={handleChecked}
        checked={checked}
        eventHandler={handlePledge}
        showAlert={showAlert}
        closeAlert={closeAlert}
      />
    </div>
  )
}
