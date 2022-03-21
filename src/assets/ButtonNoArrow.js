import Image from "next/image"

const ButtonNoArrow = ({buttonText, eventHandler}) => {
  return (
    <button className="flex justify-center items-center text-rbWhite bg-rbBlue border-2 border-rbWhite h-11 w-80 rounded-full" onClick={eventHandler}>
      <span className="uppercase font-bold tracking-wider text-lg px-6">{buttonText}</span>
    </button>
  )
}

export default ButtonNoArrow