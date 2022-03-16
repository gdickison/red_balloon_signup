/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"

const CreateEmployerAccount = () => {
  const router = useRouter()

  const [newUser, setNewUser] = useState({email: null, password: null})

  const handleChange = e => {
    e.preventDefault()
    setNewUser({...newUser, [e.target.name]: e.target.value})
    console.log(newUser)
  }

  const handleSubmit = async e => {
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
  }

  return (
    <section style={{backgroundImage: "url(/images/bg-red-paper.jpg)", backgroundSize: 'cover'}}>
      <div className="flex flex-col justify-center items-center">
        <div className="w-80 h-36 my-2 flex justify-center items-center">
          <img className="w-56" src="/images/red-balloon-logo-white.png" alt="Red Balloon Free To Work"/>
        </div>
        <div className="text-rbWhite w-80 h-20 -my-6 flex flex-col justify-around items-center">
          <h1 className="text-4xl">Create Your Account</h1>
          <p className="text-sm">STEP 1/5 - Already have an account? <a className="underline" href="#">Log in</a></p>
        </div>
        <form className="flex flex-col items-center space-y-3 my-12" onSubmit={handleSubmit} method="post">
          <input className="h-11 text-lg px-6 w-80 rounded-full" type="email" name="email" placeholder="Your Email" onChange={handleChange} required/>
          <input className="h-11 text-lg px-6 w-80 rounded-full" type="password" name="password" placeholder="Your Password" onChange={handleChange} required/>
          <button className="flex justify-between items-center text-rbWhite bg-rbBlue border-1 border-rbWhite h-11 w-80 border-2 rounded-full" type="submit">
            <span className="uppercase font-bold tracking-wider text-lg px-6">Sign Up</span>
            <span className="flex items-center p-1">
              <Image className="bg-rbWhite rounded-full" width={28} height={28} src="/images/arrow-circle-right.svg" alt="Sign Up" />
            </span>
          </button>
        </form>
      </div>
      <div className="flex justify-center relative py-8">
        <img className="w-80" src="/images/banner-combo.svg" alt="Red Balloon American Hero" />
        <img className="absolute -top-6" src="/images/job-seeker.png" alt="" />
      </div>
    </section>
  )
}

export default CreateEmployerAccount