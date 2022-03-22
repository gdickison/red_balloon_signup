/* eslint-disable @next/next/no-img-element */
import SectionWrapper from "../SectionWrapper"
import EmployerOnboardHeader from "../EmployerOnboardHeader"
import ButtonWithArrow from "../../assets/ButtonWithArrow"

const NewEmployerAccountDetail = () => {
  const changeHandler = e => {
    console.log(e.target.value)
  }

  const eventHandler = () => {
    console.log('click')
  }
  return (
    <SectionWrapper show={true}>
      <div className="flex flex-col justify-center items-center">
        <EmployerOnboardHeader
          headerText="Keep Going!"
          stepText="STEP 3/5 - We need just a bit more information to set up your account"
        />
        <div className="mt-6 -mb-4">
          <img src="/images/great-seal-outlined.png" alt="Great Seal" className="drop-shadow-[0_0.5rem_0.5rem_rgba(0,0,0,0.50)]"/>
        </div>
         <div className="flex flex-col items-center space-y-3 my-12 relative">
          <input id="first-name" className="h-11 text-lg px-6 w-80 rounded-full" type="text" name="first-name" placeholder="First Name" onChange={changeHandler}/>
          <input id="last-name" className="h-11 text-lg px-6 w-80 rounded-full" type="password" name="last-name" placeholder="Last Name" onChange={changeHandler}/>
          <input id="business-name" className="h-11 text-lg px-6 w-80 rounded-full" type="text" name="business-name" placeholder="Business Name" onChange={changeHandler}/>
          <input id="website" className="h-11 text-lg px-6 w-80 rounded-full" type="url" name="website" placeholder="Website" onChange={changeHandler}/>
          <input id="address-1" className="h-11 text-lg px-6 w-80 rounded-full" type="text" name="address-1" placeholder="Address 1" onChange={changeHandler}/>
          <input id="address-2" className="h-11 text-lg px-6 w-80 rounded-full" type="text" name="address-2" placeholder="Address 2" onChange={changeHandler}/>
          <input id="city" className="h-11 text-lg px-6 w-80 rounded-full" type="text" name="city" placeholder="City" onChange={changeHandler}/>
          <div className="flex w-80 justify-between">
            <input id="state" className="h-11 text-lg px-6 w-[9.5rem] rounded-full" type="text" name="state" placeholder="State" onChange={changeHandler}/>
            <input id="zip" className="h-11 text-lg px-6 w-[9.5rem] rounded-full" type="text" name="zip" placeholder="Zip" onChange={changeHandler}/>
          </div>
          <ButtonWithArrow
            buttonText="CONTINUE"
            eventHandler={eventHandler}
          />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default NewEmployerAccountDetail