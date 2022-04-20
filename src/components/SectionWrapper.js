const SectionWrapper = ({children, show, id}) => {

  return (
    <>
      {show &&
        <section id={id} className="relative flex flex-col items-center h-screen overflow-hidden min-h-[900px]" style={{backgroundImage: "url(/images/bg-red-paper.jpg)", backgroundSize: 'cover'}}>
          {children}
        </section>
      }
    </>
  )
}

export default SectionWrapper