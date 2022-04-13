/* eslint-disable @next/next/no-img-element */
import SectionWrapper from "../SectionWrapper"
import EmployerOnboardHeader from "../EmployerOnboardHeader"
import ButtonWithArrow from "../../assets/ButtonWithArrow"
import HeroQuote from "../../assets/HeroQoute"
import Copyright from "../../assets/Copyright"
import Head from "next/head"
import Alert from "../../assets/Alert"
import { useState } from 'react'
import { useRouter } from "next/router"

const NewEmployerAccountDetail = () => {
  const router = useRouter()
  const [newEmployerDetail, setNewEmployerDetail] = useState({
    firstName: null,
    lastName: null,
    businessName: null,
    website: null,
    phone: null,
    address: null,
    city: null,
    region: null,
    postalCode: null,
    why: null,
    source: null
  })
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")

  const changeHandler = e => {
    e.preventDefault()
    setShowAlert(false)
    setNewEmployerDetail({...newEmployerDetail, [e.target.name]: e.target.value})
    console.log(newEmployerDetail)
  }

  const phoneNumberFormatter = () => {
    const inputField = document.getElementById("phone")
    const formattedInputValue = formatPhoneNumber(inputField.value)
    inputField.value = formattedInputValue
  }

  const formatPhoneNumber = (value) => {
    if(!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if(phoneNumberLength < 4) return phoneNumber;
    if(phoneNumberLength < 7) {
      return `${phoneNumber.slice(0,3)}-${phoneNumber.slice(3)}`;
    }

    return `${phoneNumber.slice(0,3)}-${phoneNumber.slice(3,6)}-${phoneNumber.slice(6,9)}`;
  }

  const eventHandler = async e => {
    e.preventDefault()
    for(const item in newEmployerDetail){
      if(newEmployerDetail[item] === null || (newEmployerDetail.phone !== null && (newEmployerDetail.phone.length < 12 || newEmployerDetail.phone.length > 12))){
        setShowAlert(true)
        const alertText = newEmployerDetail[item] === null ? "All fields are required" : (newEmployerDetail.phone.length < 12 || newEmployerDetail.phone.length > 12) ? "Phone number must be 10 digits" : ""
        setAlertMessage(alertText)
        return
      }
    }
    const JSONdata = JSON.stringify(newEmployerDetail)
    const endpoint = '/api/employer-details'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    const response = await fetch(endpoint, options)

    const result = await response.json()

    if(response.status === 200){
      router.push('/new-employer-signup')
    }
  }

  const closeAlert = () => {
    setShowAlert(false)
    setAlertMessage("")
  }

  return (
    <>
      <Head>
        <title>The Courageous Economy</title>
        <link rel="icon" type="image/png" href="/images/RedBalloon-Icon.png"/>
      </Head>
      <SectionWrapper show={true}>
        <div className="flex flex-col justify-center items-center">
          <EmployerOnboardHeader
            headerText="Keep Going!"
            stepText="STEP 3/5 - We need just a bit more information to set up your account"
          />
          <div id="uncle-andrew" className="w-screen flex flex-col relative left-[-150%]">
            <div className="absolute left-0 right-0 h-auto w-auto mt-4 xs:mt-0 flex flex-col justify-center items-center">
              <div>
                <picture>
                  <source srcSet="/images/happy-rb-man-sm-sharp.png" media="(max-width: 475px)"/>
                  <img src="/images/happy-rb-man-bg-sharp.png" alt="Uncle Sam" />
                </picture>
              </div>
              <div className="hero-quote-wrapper absolute top-52 xs:top-64 w-64 flex z-10">
                <HeroQuote
                  quote="&quot;We want you to succeed in business&#x21;&quot;"
                />
              </div>
              <div className="hero-who bg-rbRed w-72 absolute top-64 xs:top-80 pt-3 xs:pt-0 xs:-mt-2 text-rbWhite font-light italic">
                <div className="flex flex-col items-center py-2">
                  <span className="px-6 -my-1 text-lg">ANDREW CRAPUCHETTES,</span>
                  <span className="px-6 -my-1 text-lg">CEO &amp; Actual RedBalloon</span>
                  <span className="px-6 -my-1 text-sm">Job Employer</span>
                </div>
              </div>
            </div>
          </div>
          <div id="inputs" className="absolute top-[65%] flex flex-col items-center space-y-3 mt-4 w-5/6 max-w-screen-sm">
            <input id="first-name" className={`h-11 text-lg px-6 w-full rounded-full ${showAlert && !newEmployerDetail.firstName ? 'border-4 border-rbBlue' : showAlert ? 'border-0 opacity-60' : 'border-0'}`} type="text" name="firstName" placeholder="First Name" onChange={changeHandler}/>
            <input id="last-name" className={`h-11 text-lg px-6 w-full rounded-full ${showAlert && !newEmployerDetail.lastName ? 'border-4 border-rbBlue' : showAlert ? 'border-0 opacity-60' : 'border-0'}`} type="text" name="lastName" placeholder="Last Name" onChange={changeHandler}/>
            <input id="business-name" className={`h-11 text-lg px-6 w-full rounded-full ${showAlert && !newEmployerDetail.businessName ? 'border-4 border-rbBlue' : showAlert ? 'border-0 opacity-60' : 'border-0'}`} type="text" name="businessName" placeholder="Business Name" onChange={changeHandler}/>
            <input id="website" className={`h-11 text-lg px-6 w-full rounded-full ${showAlert && !newEmployerDetail.website ? 'border-4 border-rbBlue' : showAlert ? 'border-0 opacity-60' : 'border-0'}`} type="url" name="website" placeholder="Website" onChange={changeHandler}/>
            <input id="phone" className={`h-11 text-lg px-6 w-full rounded-full ${showAlert && (!newEmployerDetail.phone || newEmployerDetail.phone.length < 12 || newEmployerDetail.phone.length > 12) ? 'border-4 border-rbBlue' : showAlert ? 'border-0 opacity-60' : 'border-0'}`} type="tel" name="phone" placeholder="Phone 555-555-1212" onKeyDown={phoneNumberFormatter} onChange={changeHandler}/>
            <input id="address" className={`h-11 text-lg px-6 w-full rounded-full ${showAlert && !newEmployerDetail.address ? 'border-4 border-rbBlue' : showAlert ? 'border-0 opacity-60' : 'border-0'}`} type="text" name="address" placeholder="Business Address" onChange={changeHandler}/>
            <input id="city" className={`h-11 text-lg px-6 w-full rounded-full ${showAlert && !newEmployerDetail.city ? 'border-4 border-rbBlue' : showAlert ? 'border-0 opacity-60' : 'border-0'}`} type="text" name="city" placeholder="City" onChange={changeHandler}/>
            <div className="flex w-full justify-between">
              <input id="region" className={`h-11 text-lg px-6 w-[48%] rounded-full ${showAlert && !newEmployerDetail.region ? 'border-4 border-rbBlue' : showAlert ? 'border-0 opacity-60' : 'border-0'}`} type="text" name="region" placeholder="State/Province" onChange={changeHandler}/>
              <input id="postal-code" className={`h-11 text-lg px-6 w-[48%] rounded-full ${showAlert && !newEmployerDetail.postalCode ? 'border-4 border-rbBlue' : showAlert ? 'border-0 opacity-60' : 'border-0'}`} type="text" name="postalCode" placeholder="Zip/Postal Code" onChange={changeHandler}/>
            </div>
            <input id="why" className={`h-11 text-lg px-6 w-full rounded-full ${showAlert && !newEmployerDetail.why ? 'border-4 border-rbBlue' : showAlert ? 'border-0 opacity-60' : 'border-0'}`} type="text" name="why" placeholder="Why do you want to join RedBalloon?" onChange={changeHandler}/>
            <input id="source" className={`h-11 text-lg px-6 w-full rounded-full ${showAlert && !newEmployerDetail.source ? 'border-4 border-rbBlue' : showAlert ? 'border-0 opacity-60' : 'border-0'}`} type="text" name="source" placeholder="How did you hear about us?" onChange={changeHandler}/>
            <ButtonWithArrow
              buttonText="CONTINUE"
              eventHandler={eventHandler}
            />
          </div>
        </div>
        {showAlert &&
          <Alert
            message={alertMessage}
            closeAlert={closeAlert}
          />
        }
        <Copyright/>
      </SectionWrapper>
    </>
  )
}

export default NewEmployerAccountDetail