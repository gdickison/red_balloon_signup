import { useRouter } from "next/router"

const SectionWrapper = ({children, show, id}) => {
  const router = useRouter()

  return (
    <>
      {show &&
        <section id={id} className={`relative flex flex-col items-center h-screen ${router.pathname === "/new-employer-account-detail" ? "min-h-[900px]" : "min-h-[900px]"}`} style={{backgroundImage: "url(/images/bg-red-paper.jpg)", backgroundSize: 'cover'}}>
          {children}
        </section>
      }
    </>
  )
}

export default SectionWrapper