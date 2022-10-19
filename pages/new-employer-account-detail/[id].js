/* eslint-disable @next/next/no-img-element */
import SectionWrapper from "../../src/components/SectionWrapper"
import EmployerOnboardHeader from "../../src/components/EmployerOnboardHeader"
import ButtonWithArrow from "../../src/assets/ButtonWithArrow"
import HeroQuote from "../../src/assets/HeroQoute"
import Copyright from "../../src/assets/Copyright"
import Head from "next/head"
import Alert from "../../src/assets/Alert"
import { useState } from 'react'
import { useRouter } from "next/router"

import regions from '../../src/data/regions'

const NewEmployerAccountDetail = () => {
  const router = useRouter()

  const [newEmployerDetail, setNewEmployerDetail] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    website: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    region: "",
    countryCode: "",
    postalCode: "",
    whyJoin: "",
    awareness: ""
  })
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")

  const changeHandler = e => {
    e.preventDefault()
    setShowAlert(false)

    if(e.target.name === 'region'){
      setNewEmployerDetail(newEmployerDetail.countryCode = e.target.selectedOptions[0].dataset.countryCode)
    }

    setNewEmployerDetail({...newEmployerDetail, [e.target.name]: e.target.value})

    if(e.target.name === 'region'){
      document.getElementById('region').classList.remove('text-gray-400');
    }
  }

  const phoneNumberFormatter = (e) => {
    if(e.key === 'Tab'){
      return
    }
    if(e.key === 'Enter') {
      eventHandler(e)
      return
    }
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

  const saveToJbhq = async () => {
    const JSONdata = JSON.stringify({
      email: localStorage.getItem("email"),
      password: localStorage.getItem("password")
    })

    // const endpoint = `/api/save-to-jbhq/${router.query.id}` ===> no access on demo site
    const endpoint = `/api/hello`

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSONdata
    }

    const response = await fetch(endpoint, options)

    if(response.status === 404){
      setShowAlert(true)
      setAlertMessage("There was a problem entering your information. Please try again.")
    } else if(response.status === 200){
      router.push(`/new-employer-signup/${router.query.id}`)
    }
  }

  const enterKeyHandler = e => {
    if(e.code === "Enter"){
      eventHandler(e)
    }
  }

  const eventHandler = async e => {
    e.preventDefault()

    const websiteFormat = /^(http(s?):\/\/)?\w+([\.-]?\w+)*(\.\w{2,10})+/;
    if(!newEmployerDetail.website.match(websiteFormat)){
      setShowAlert(true)
      setAlertMessage("A valid web address is required")
      return
    }

    for(const item in newEmployerDetail){
      if((!newEmployerDetail[item] && item !== 'address2') || (newEmployerDetail.phone && (newEmployerDetail.phone.length < 12 || newEmployerDetail.phone.length > 12))){
        setShowAlert(true)
        const alertText = !newEmployerDetail[item] ? "Highlighted fields are required" : (newEmployerDetail.phone.length < 12 || newEmployerDetail.phone.length > 12) ? "Phone number must be 10 digits" : ""
        setAlertMessage(alertText)
        return
      }
    }
    const JSONdata = JSON.stringify(newEmployerDetail)
    // const endpoint = `/api/employer-details/${router.query.id}` ===> no access on demo site
    const endpoint = `/api/hello`

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    const response = await fetch(endpoint, options)
    if(response.status === 409){
      setShowAlert(true)
      setAlertMessage("A business with this name already exists. Check to see if your business already has an account, or enter a different business name.")
    } else if(response.status === 200){
      saveToJbhq()
    }
  }

  const closeAlert = () => {
    setShowAlert(false)
    setAlertMessage("")
  }

  return (
    <>
      <Head>
        <title>RedBalloon</title>
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
                  quote="&quot;Get ready to find amazing talent&#x21;&quot;"
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
            <input id="first-name" className={`h-11 text-lg px-6 w-full rounded-full ${showAlert && !newEmployerDetail.firstName ? 'border-4 border-rbBlue' : showAlert ? 'border-0 opacity-60' : 'border-0'}`} type="text" name="firstName" placeholder="First Name" onChange={changeHandler} onKeyDown={enterKeyHandler}/>
            <input id="last-name" className={`h-11 text-lg px-6 w-full rounded-full ${showAlert && !newEmployerDetail.lastName ? 'border-4 border-rbBlue' : showAlert ? 'border-0 opacity-60' : 'border-0'}`} type="text" name="lastName" placeholder="Last Name" onChange={changeHandler} onKeyDown={enterKeyHandler}/>
            <input id="business-name" className={`h-11 text-lg px-6 w-full rounded-full ${showAlert && !newEmployerDetail.businessName ? 'border-4 border-rbBlue' : showAlert ? 'border-0 opacity-60' : 'border-0'}`} type="text" name="businessName" placeholder="Business Name" onChange={changeHandler} onKeyDown={enterKeyHandler}/>
            <input id="website" className={`h-11 text-lg px-6 w-full rounded-full ${showAlert && !newEmployerDetail.website ? 'border-4 border-rbBlue' : showAlert ? 'border-0 opacity-60' : 'border-0'}`} type="url" name="website" placeholder="Website" onChange={changeHandler} onKeyDown={enterKeyHandler}/>
            <input id="phone" className={`h-11 text-lg px-6 w-full rounded-full ${showAlert && (!newEmployerDetail.phone || newEmployerDetail.phone.length < 12 || newEmployerDetail.phone.length > 12) ? 'border-4 border-rbBlue' : showAlert ? 'border-0 opacity-60' : 'border-0'}`} type="tel" name="phone" placeholder="Phone 555-555-1212" onKeyDown={phoneNumberFormatter} onChange={changeHandler}/>
            <input id="address1" className={`h-11 text-lg px-6 w-full rounded-full ${showAlert && !newEmployerDetail.address1 ? 'border-4 border-rbBlue' : showAlert ? 'border-0 opacity-60' : 'border-0'}`} type="text" name="address1" placeholder="Business Address Line 1" onChange={changeHandler} onKeyDown={enterKeyHandler}/>
            <input id="address2" className={`h-11 text-lg px-6 w-full rounded-full ${showAlert ? 'border-0 opacity-60' : 'border-0'}`} type="text" name="address2" placeholder="Business Address Line 2" onChange={changeHandler} onKeyDown={enterKeyHandler}/>
            <input id="city" className={`h-11 text-lg px-6 w-full rounded-full ${showAlert && !newEmployerDetail.city ? 'border-4 border-rbBlue' : showAlert ? 'border-0 opacity-60' : 'border-0'}`} type="text" name="city" placeholder="City" onChange={changeHandler} onKeyDown={enterKeyHandler}/>
            <div className="flex w-full justify-between">
              <select id="region" className={`${!newEmployerDetail.region ? 'text-gray-400' : 'text-black'} h-11 text-lg px-6 w-[48%] rounded-full bg-rbWhite ${showAlert && !newEmployerDetail.region ? 'border-4 border-rbBlue' : showAlert ? 'border-0 opacity-60' : 'border-0'}`} name="region" placeholder="State/Province" defaultValue={null} onChange={changeHandler} onKeyDown={enterKeyHandler}>
                <option value={null} hidden>State/Province</option>
                {regions.map(region => {
                  return (
                    <option key={region.value} className="text-black" value={region.value} data-country-code={region.country}>{region.display}</option>
                  )
                })}
              </select>
              <input id="postal-code" className={`h-11 text-lg px-6 w-[48%] rounded-full ${showAlert && !newEmployerDetail.postalCode ? 'border-4 border-rbBlue' : showAlert ? 'border-0 opacity-60' : 'border-0'}`} type="text" name="postalCode" placeholder="Zip/Postal Code" onChange={changeHandler} onKeyDown={enterKeyHandler}/>
            </div>
            <input id="whyJoin" className={`h-11 text-lg px-6 w-full rounded-full ${showAlert && !newEmployerDetail.whyJoin ? 'border-4 border-rbBlue' : showAlert ? 'border-0 opacity-60' : 'border-0'}`} type="text" name="whyJoin" placeholder="Why do you want to join RedBalloon?" onChange={changeHandler} onKeyDown={enterKeyHandler}/>
            <input id="awareness" className={`h-11 text-lg px-6 w-full rounded-full ${showAlert && !newEmployerDetail.awareness ? 'border-4 border-rbBlue' : showAlert ? 'border-0 opacity-60' : 'border-0'}`} type="text" name="awareness" placeholder="How did you hear about us?" onChange={changeHandler} onKeyDown={enterKeyHandler}/>
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