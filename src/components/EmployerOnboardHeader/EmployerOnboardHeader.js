/* eslint-disable @next/next/no-img-element */
const EmployerOnboardHeader = ({headerText, stepText}) => {
  return (
    <>
      <div className="w-80 h-36 flex justify-center items-center">
        <img className="w-56" src="/images/red-balloon-logo-white.png" alt="Red Balloon Free To Work"/>
      </div>
      <div className="text-rbWhite w-80 h-20 -my-5 flex flex-col justify-around items-center">
        <h1 className="text-4xl font-medium tracking-tight">{headerText}</h1>
        <p className="text-sm tracking-wide text-center">{stepText}</p>
      </div>
    </>
  )
}

export default EmployerOnboardHeader