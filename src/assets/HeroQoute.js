const HeroQuote = ({quote}) => {
  return (
    <div className="hero-quote bg-rbBlue w-72 text-rbWhite text-center flex flex-wrap">
      <span className="px-6 py-2 text-lg font-medium leading-5">{quote}</span>
    </div>
  )
}

export default HeroQuote