/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head"
import { useEffect } from "react";

const NewEmployerSignup = () => {

  const runLogin = () => {
    if(localStorage.getItem("email") && localStorage.getItem("password")){
      console.log('start runLogin')
      const t = {'action':'login','username': localStorage.getItem("email"), 'password': localStorage.getItem("password")};
      document.getElementById('rb').contentWindow.postMessage(t, 'https://www.redballoon.work/login/employer/purchase');
      localStorage.clear()
      console.log('end runLogin')
    }
  }

  useEffect(() => {
    // if (typeof window !== undefined) {
      window.addEventListener('message', (event) => {
        console.log('start addEventListener')
        if (event.origin !== 'https://www.redballoon.work')
            return;
        if (event.data == 'Purchase Done')
        {
            // Disable account
            // Continue to next page
            console.log('purchase done')
        }
        else if (event.data == 'On Purchase Page')
        {
            // Show iframe
            document.getElementById('rb').style.visibility = "visible !important";
            console.log('on purchase page')
        }
        else
            console.log(event);
      });
    // }
  }, [])

  return (
    <div className="h-screen">
      <Head>
        <title>RedBalloon</title>
        <link rel="icon" type="image/png" href="/images/RedBalloon-Icon.png"/>
      </Head>
      <iframe id="rb" src="https://www.redballoon.work/employer/purchase" title="RedBalloon main site" height="100%" width="100%" onLoad={runLogin} style={{ visibility: "hidden !important"}}></iframe>
    </div>
  )
}

export default NewEmployerSignup