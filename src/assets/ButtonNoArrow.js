import Image from "next/image"

const ButtonNoArrow = ({buttonText}) => {
  return (
    <button className="flex justify-center items-center text-rbWhite bg-rbBlue border-1 border-rbWhite h-11 w-80 border-2 rounded-full" type="submit">
      <span className="uppercase font-bold tracking-wider text-lg px-6">{buttonText}</span>
    </button>
  )
}

export default ButtonNoArrow