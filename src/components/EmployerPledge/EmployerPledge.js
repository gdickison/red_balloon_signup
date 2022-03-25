/* eslint-disable @next/next/no-img-element */
import SectionWrapper from "../SectionWrapper/index"
import EmployerOnboardHeader from "../EmployerOnboardHeader/index"
import ButtonNoArrow from "../../assets/ButtonNoArrow"
import Copyright from "../../assets/Copyright"
import { useState } from 'react'

const EmployerPledge = ({show, checked, changeHandler, eventHandler}) => {
  return (
    <SectionWrapper show={show}>
      <div className="flex flex-col justify-center items-center">
        <EmployerOnboardHeader
          headerText="Employer Pledge"
          stepText="STEP 2/5"
        />
        <div id="pledge" className="flex flex-col justify-center text-rbWhite text-center">
          <h1 className="text-4xl tracking-tight mt-4 mb-6">By signing up for RedBalloon, I pledge</h1>
          <div className="flex flex-col justify-center space-y-3 w-60 mx-auto text-lg leading-5">
            <hr className="border-[1px] w-44 mx-auto" />
            <p>to not discriminate against my company&apos;s employees&apos; personal beliefs,</p>
            <hr className="border-[1px] w-44 mx-auto" />
            <p>nor infringe on their constitutional rights,</p>
            <hr className="border-[1px] w-44 mx-auto" />
            <div className="flex justify-center">
              <p className="whitespace-nowrap">nor invade their medical privacy,</p>
            </div>
            <hr className="border-[1px] w-44 mx-auto" />
            <p>nor make vaccination a condition of employment</p>
            <hr className="border-[1px] w-44 mx-auto" />
          </div>
        </div>
        <div className="flex items-center mt-5 mb-6 space-x-2 w-60">
          <input className="h-8 w-24 text-base rounded-full" type="checkbox" checked={checked} onChange={changeHandler} required />
          <p className="text-rbWhite text-base leading-5">I have read and agree to the Terms of Service and the Employer Pledge</p>
        </div>
        <ButtonNoArrow buttonText="CONTINUE" eventHandler={eventHandler}/>
        <img className="h-28 mt-4 mb-12" src="/images/red-balloon-seal-of-approval.svg" alt="Red Balloon Seal Of Approval" />
      </div>
      <Copyright/>
    </SectionWrapper>
  )
}

export default EmployerPledge