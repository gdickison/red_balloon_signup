/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head"

const NewEmployerSignup = () => {

  const runLogin = () => {
    if(localStorage.getItem("email") && localStorage.getItem("password")){
      const t = {'action':'login','username': localStorage.getItem("email"), 'password': localStorage.getItem("password")};
      document.getElementById('rb').contentWindow.postMessage(t, 'https://www.redballoon.work/login/employer/purchase');
      localStorage.clear()
    }
  }

  // For the parent frame to receive the message from the purchase complete page
  window.addEventListener('message', (event) => {
    if (event.origin !== 'https://www.redballoon.work')
        return;
    if (event.data == 'Purchase Done')
    {
        // Disable account
        // Continue to next page
    }
    else if (event.data == 'On Purchase Page')
    {
        // Show iframe
        document.getElementById('rb').style.display = 'block';
    }
    else
        console.log(event);
  });

  return (
    <div className="h-screen">
      <Head>
        <title>RedBalloon</title>
        <link rel="icon" type="image/png" href="/images/RedBalloon-Icon.png"/>
      </Head>
      <iframe id="rb" src="https://www.redballoon.work/employer/purchase" title="RedBalloon main site" height="100%" width="100%" onLoad={runLogin} style={{ display: 'none'}}></iframe>
    </div>
  )
}

export default NewEmployerSignup