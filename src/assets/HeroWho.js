const HeroWho = ({line1, line2, line3}) => {
  return (
    <div className="flex flex-col items-center py-2">
      <span className="px-6 -my-1 text-lg">{line1}</span>
      <span className="px-6 -my-1 text-lg">{line2}</span>
      <span className="px-6 my-1 text-sm">{line3}</span>
    </div>
  )
}

export default HeroWho