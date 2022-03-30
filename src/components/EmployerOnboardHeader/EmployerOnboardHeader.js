/* eslint-disable @next/next/no-img-element */
const EmployerOnboardHeader = ({headerText, stepText}) => {
  return (
    // <>
      <div className="flex flex-col justify-between h-44">
        <img className=" w-56 mx-auto my-auto" src="/images/red-balloon-logo-white.png" alt="Red Balloon Free To Work"/>
        <div className="text-rbWhite text-center w-80">
          <h1 className="text-4xl font-medium tracking-tight">{headerText}</h1>
          <p className="text-sm tracking-wide text-center">{stepText}</p>
        </div>
      </div>
    // </>
  )
}

export default EmployerOnboardHeader