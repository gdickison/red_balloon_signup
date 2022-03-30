/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head"

const RedirectToJbhq = () => {

  const runLogin = () => {
    const t = {'action':'login','username': localStorage.getItem("email"), 'password': localStorage.getItem("password")};
    document.getElementById('rb').contentWindow.postMessage(t, 'https://www.redballoon.work/login/employer/purchase');
    localStorage.clear()
  }

  return (
    <div className="h-screen">
      <Head>
        <title>The Courageous Economy</title>
        <link rel="icon" type="image/png" href="/images/RedBalloon-Icon.png"/>
      </Head>
      <iframe id="rb" src="https://www.redballoon.work/employer/purchase" title="RedBalloon main site" height="100%" width="100%" onLoad={runLogin}></iframe>
    </div>
  )
}

export default RedirectToJbhq