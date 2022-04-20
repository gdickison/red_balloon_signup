import CreateEmployerAccount from '../../src/components/CreateEmployerAccount'
import FlyingEagle from '../../src/assets/FlyingEagle'
import EmployerPledge from '../../src/components/EmployerPledge'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const [newUser, setNewUser] = useState({email: "", password: ""})
  const [showCreateEmployerAccount, setShowCreateEmployerAccount] = useState(true)
  const [showFlyingEagle, setShowFlyingEagle] = useState(false)
  const [showEmployerPledge, setShowEmployerPledge] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState()
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
      setAlertMessage("An email address and password are required")
      return
    }

    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!newUser.email.match(emailFormat)){
      setShowAlert(true)
      setAlertMessage("A valid email address is required")
      return
    }

    const passwordFormat = /^(?=.*\d)(?=.*[A-Za-z]).{8,100}$/;
    if(!newUser.password.match(passwordFormat)){
      setShowAlert(true)
      setAlertMessage("Password must be at least 8 characters and include at least 1 number")
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

    let response = await fetch(endpoint, options)
    console.log(response)
    let status = response.status
    let userStatus = await response.json()

    console.log('status', status)
    console.log('email', userStatus.email_found)
    console.log('detail', userStatus.detail_found)

    if(status === 200 && userStatus.email_found && userStatus.detail_found){
      setShowAlert(true)
      setAlertMessage(["There is already an account attached to that email address. Click ", <a className='underline' key="login" href="https://www.redballoon.work/login">here</a>, " to go to the login page."])
    } else if (status === 200 && userStatus.email_found && !userStatus.detail_found){
      router.push(`/new-employer-account-detail/${userStatus.employer_id}`)
    } else if (status === 200){
      document.getElementById("create-employer-account").classList.add("fade-out")

      setShowFlyingEagle(true)
      setTimeout(() => {
        setShowCreateEmployerAccount(false)
      }, 1900)
      setTimeout(() => {
        setShowEmployerPledge(true)
      },1800)
    }
  }

  const closeAlert = () => {
    setShowAlert(false)
    setAlertMessage()
  }

  const [checked, setChecked] = useState(false)

  const handleChecked = () => {
    setShowAlert(false)
    setAlertMessage()
    setChecked(!checked)
  }

  const handlePledge = async e => {
    e.preventDefault()
    if(!checked){
      setShowAlert(true)
      setAlertMessage("You must agree to the Pledge and the Terms of Service")
      return
    }

    const newUserData = {
      terms_accepted: checked,
      ...newUser
    }
    const JSONdata = JSON.stringify(newUserData)
    console.log(JSONdata)
    const endpoint = '/api/employer-pledge'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }
    const response = await fetch(endpoint, options)

    if(response.status === 200){
      console.log(router)
      const getNewEmpolyerId = await response.json()
      const newEmployerId = getNewEmpolyerId.id
      router.push(`/new-employer-account-detail/${newEmployerId}`)
    }
  }

  return (
    <div>
      <CreateEmployerAccount
        show={showCreateEmployerAccount}
        eventHandler={handleCreateAccount}
        changeHandler={handleChange}
        showAlert={showAlert}
        alertMessage={alertMessage}
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
        alertMessage={alertMessage}
        closeAlert={closeAlert}
      />
    </div>
  )
}
