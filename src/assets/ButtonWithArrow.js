import Image from "next/image"

const ButtonWithArrow = ({buttonText, eventHandler}) => {
  return (
    <button className="flex justify-between items-center text-rbWhite bg-rbBlue border-1 border-rbWhite h-11 w-full border-2 rounded-full" onClick={eventHandler}>
      <span className="uppercase font-bold tracking-wider text-lg px-6">{buttonText}</span>
      <span className="flex items-center p-1.5">
        <Image className="bg-rbWhite rounded-full" width={28} height={28} src="/images/arrow-circle-right.svg" alt={buttonText} />
      </span>
    </button>
  )
}

export default ButtonWithArrow