import Link from "next/link"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>RedBalloon</title>
        <link rel="icon" type="image/png" href="/images/RedBalloon-Icon.png"/>
      </Head>
      <div className="min-h-screen flex flex-col space-y-10 justify-center items-center">
        <Link href="/create-employer-account">
          <a>Create Employer Account</a>
        </Link>
      </div>

    </>
  )
}
