const SectionWrapper = ({children, show}) => {
  return (
    <>
      {show &&
        <section className="min-h-screen flex flex-col items-center" style={{backgroundImage: "url(/images/bg-red-paper.jpg)", backgroundSize: 'cover'}}>
          {children}
        </section>
      }
    </>
  )
}

export default SectionWrapper