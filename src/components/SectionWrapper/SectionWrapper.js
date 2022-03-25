const SectionWrapper = ({children, show, id}) => {
  return (
    <>
      {show &&
        <section id={id} className="relative min-h-screen flex flex-col items-center" style={{backgroundImage: "url(/images/bg-red-paper.jpg)", backgroundSize: 'cover'}}>
          {children}
        </section>
      }
    </>
  )
}

export default SectionWrapper