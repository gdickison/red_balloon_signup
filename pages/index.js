import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col space-y-10 justify-center items-center">
      <Link href="/create-employer-account">
        <a>Create Employer Account</a>
      </Link>
      <p>Create Job Seeker Account</p>
    </div>
  )
}
