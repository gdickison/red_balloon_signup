import SectionWrapper from "../SectionWrapper/index"
import EmployerOnboardHeader from "../EmployerOnboardHeader/index"
import ButtonNoArrow from "../../assets/ButtonNoArrow"
import { useState } from 'react'

const EmployerPledge = () => {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    setChecked(!checked)
  }

  const handlePledge = async e => {
    e.preventDefault()
    const JSONdata = pledge
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

    console.log(result)
  }

  return (
    <SectionWrapper show={true}>
      <div className="flex flex-col justify-center items-center w-80">
        <EmployerOnboardHeader
          headerText="Employer Pledge"
          stepText="STEP 2/5"
        />
        <div id="pledge" className="flex flex-col justify-center text-rbWhite text-center">
          <h1 className="text-4xl tracking-tight my-10">By signing up for RedBalloon, I pledge</h1>
          <div className="flex flex-col justify-center space-y-3 w-64 mx-auto">
            <hr className="border-[1px] w-44 mx-auto" />
            <p className="text-lg leading-5">to not discriminate against my company&apos;s employees&apos; personal beliefs,</p>
            <hr className="border-[1px] w-44 mx-auto" />
            <p className="text-lg leading-5">nor infringe on their constitutional rights,</p>
            <hr className="border-[1px] w-44 mx-auto" />
            <p className="text-lg leading-5">nor invade their medical privacy,</p>
            <hr className="border-[1px] w-44 mx-auto" />
            <p className="text-lg leading-5">nor make vaccination a condition of employment</p>
            <hr className="border-[1px] w-44 mx-auto" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <input className="h-8 w-44 text-base px-6 rounded-full" type="checkbox" checked={checked} onChange={handleChange} required />
          <p className="text-rbWhite text-sm leading-5">I have read and agree to the Terms of Service and the Employer Pledge</p>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default EmployerPledge