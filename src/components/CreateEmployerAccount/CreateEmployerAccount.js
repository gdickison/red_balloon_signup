/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import ButtonWithArrow from "../../assets/ButtonWithArrow"
import EmployerOnboardHeader from "../EmployerOnboardHeader/index"
import SectionWrapper from "../SectionWrapper/index"


const CreateEmployerAccount = ({show}) => {
  const [newUser, setNewUser] = useState({email: null, password: null})

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
  }

  return (
    <SectionWrapper show={show}>
      <div className="flex flex-col justify-center items-center">
        <EmployerOnboardHeader
          headerText="Create Your Account"
          stepText={["STEP 1/5 - Already have an account? ", <a key={Math.random()} className="underline" href="#">Log in</a>]}
        />
        <div className="flex flex-col items-center space-y-3 my-12 relative">
          <input id="email-input" className="h-11 text-lg px-6 w-80 rounded-full" type="email" name="email" placeholder="Your Email" onChange={handleChange}/>
          <input className="h-11 text-lg px-6 w-80 rounded-full" type="password" name="password" placeholder="Your Password" onChange={handleChange}/>
          <ButtonWithArrow
            buttonText="Sign Up"
            eventHandler={handleCreateAccount}
          />
          <img id="peeking-eagle" className="absolute -top-12" src="/images/peeking-eagle.png" alt="Peeking Eagle" />
        </div>
      </div>
      <div className="flex justify-center relative pt-4 pb-8">
        <img className="w-80" src="/images/banner-combo.svg" alt="Red Balloon American Hero" />
        <img className="absolute -top-6 w-96 drop-shadow-[0_0.5rem_0.5rem_rgba(0,0,0,0.50)]" src="/images/job-seeker.png" alt="Red Balloon American Hero" />
        <div className="hero-quote-wrapper absolute bottom-44 flex z-10">
          <div className="hero-quote bg-rbBlue w-72 text-rbWhite text-center flex flex-wrap">
            <span className="px-6 py-2 text-lg font-medium leading-5">&quot;Employers love that I&apos;m a motivated self-starter!&quot;</span>
          </div>

        </div>
        <div className="hero-who bg-rbRed w-72 h-[4.9rem] absolute bottom-[6.15rem] text-rbWhite font-light italic">
          <div className="flex flex-col items-center py-2">
            <span className="px-6 -my-1 text-lg">Stephen Grammer,</span>
            <span className="px-6 -my-1 text-lg">American Hero</span>
            <span className="px-6 my-1 text-sm">Actual RedBalloon Job-Seeker</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default CreateEmployerAccount