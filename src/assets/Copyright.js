import { useRouter } from "next/router"

const Copyright = () => {
  const router = useRouter()

  return (
    <div id="copyright" className={`text-rbWhite text-xs mb-4 absolute bottom-0 ${router.pathname === "/new-employer-account-detail" ? "opacity-0" : "opacity-100"}`}>
      <span>&copy; RedBalloon, All Rights Reserved</span>
    </div>
  )
}

export default Copyright