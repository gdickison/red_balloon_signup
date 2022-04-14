/* eslint-disable @next/next/no-img-element */
import ButtonWithArrow from "../../assets/ButtonWithArrow"
import EmployerOnboardHeader from "../EmployerOnboardHeader/index"
import SectionWrapper from "../SectionWrapper/index"
import HeroQuote from "../../assets/HeroQoute"
import HeroWho from "../../assets/HeroWho"
import Copyright from "../../assets/Copyright"
import Head from "next/head"
import Alert from "../../assets/Alert"

const CreateEmployerAccount = ({show, changeHandler, eventHandler, showAlert, alertMessage, closeAlert}) => {
  return (
    <>
      <Head>
        <title>RedBalloon</title>
        <link rel="icon" type="image/png" href="/images/RedBalloon-Icon.png"/>
      </Head>
      <SectionWrapper show={show}>
        <div id="create-employer-account">
          <div className="flex flex-col justify-center items-center">
            <EmployerOnboardHeader
              headerText="Create Your Account"
              stepText={["STEP 1/5 - Already have an account? ", <a key={Math.random()} className="underline" href="#">Log in</a>]}
            />
            <div className={`flex flex-col items-center space-y-3 my-6 relative ${showAlert ? 'opacity-60' : 'opacity-100'}`}>
              <input id="email-input" className="h-11 text-lg px-6 w-80 rounded-full" type="email" name="email" placeholder="Your Email" onChange={changeHandler}/>
              <input className="h-11 text-lg px-6 w-80 rounded-full" type="password" name="password" placeholder="Your Password" onChange={changeHandler}/>
              <ButtonWithArrow
                buttonText="Sign Up"
                eventHandler={eventHandler}
              />
              <img id="peeking-eagle" className="fixed top-[22%]" src="/images/peeking-eagle.png" alt="Peeking Eagle" />
            </div>
          </div>
          <div className="flex justify-center relative pt-4 pb-8">
            <img className="w-80" src="/images/banner-combo.svg" alt="Red Balloon American Hero" />
            <img className="absolute -top-6 w-96 drop-shadow-[0_0.5rem_0.5rem_rgba(0,0,0,0.50)]" src="/images/job-seeker.png" alt="Red Balloon American Hero" />
            <div className="hero-quote-wrapper absolute bottom-[13.5rem] flex z-10">
              <HeroQuote
                quote="&quot;Employers love that I&apos;m a motivated self-starter!&quot;"
              />
            </div>
            <div className="hero-who bg-rbRed w-72 h-[4.9rem] absolute bottom-36 text-rbWhite font-light italic">
              <HeroWho
                line1="Stephen Grammer,"
                line2="American Hero"
                line3="Actual RedBalloon Job-Seeker"
              />
            </div>
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

export default CreateEmployerAccount