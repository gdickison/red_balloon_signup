/* eslint-disable @next/next/no-img-element */
const FlyingEagle = ({show}) => {
  return (
    <>
      {show &&
        <img id="flying-eagle" className="fixed top-1/3 left-[-110%] animated" src="/images/flying-eagle.png" alt="Flying Eagle" />
      }
    </>
  )
}

export default FlyingEagle