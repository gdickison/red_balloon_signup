/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head"
import { useState } from "react";
import { useRouter } from "next/router";

const NewEmployerSignup = () => {
  const router = useRouter()

  // const [loggedIn, setLoggedIn] = useState(false) ===> no access to login on demo site
  const [loggedIn, setLoggedIn] = useState(true)

  const runLogin = () => {
    if(localStorage.getItem("email") && localStorage.getItem("password")){
      const t = {'action':'login','username': localStorage.getItem("email"), 'password': localStorage.getItem("password")};
      document.getElementById('rb').contentWindow.postMessage(t, 'https://www.redballoon.work/login/employer/purchase');
      localStorage.clear()
      setLoggedIn(true)
    }
  }

  // DISABLED ON DEMO SITE
  // if (loggedIn && typeof window !== undefined) {
  //   window.addEventListener('message', (event) => {
  //     if (event.origin !== 'https://www.redballoon.work')
  //         return;
  //     if (event.data == 'Purchase Done' && router.query.id !== undefined)
  //     {
  //         // Disable account
  //         const JSONdata = JSON.stringify(router.query.id)
  //         const endpoint = `/api/disable-employer/${router.query.id}`

  //         const options = {
  //           method: 'POST',
  //           headers: {
  //             'ContentType': 'application/json'
  //           },
  //           body: JSONdata
  //         }

  //         fetch(endpoint, options)
  //     }
  //     else if (event.data == 'On Purchase Page' && loggedIn)
  //     {
  //         // Show iframe
  //         document.getElementById('rb').removeAttribute('hidden');
  //     }
  //     else
  //         console.log(event);
  //   });
  // }

  return (
    <div className="h-screen">
      <Head>
        <title>RedBalloon</title>
        <link rel="icon" type="image/png" href="/images/RedBalloon-Icon.png"/>
      </Head>
      {!loggedIn &&
        <div className="h-screen flex justify-center items-center">
          <svg role="status" className="mr-2 w-1/4 h-1/4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
        </div>
      }
      {/* No access to the iframe on demo site */}
      {/* <iframe id="rb" src="https://www.redballoon.work/employer/purchase" title="RedBalloon main site" height="100%" width="100%" onLoad={runLogin} hidden></iframe> */}
      <div className="h-screen flex items-center justify-center">
        <h1>iframe to RedBalloon payment page goes here on production site</h1>
      </div>
    </div>
  )
}

export default NewEmployerSignup