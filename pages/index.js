import CreateEmployerAccount from '../src/components/CreateEmployerAccount'
import EmployerPledge from '../src/components/EmployerPledge'
import NewEmployerAccountInfo from '../src/components/NewEmployerAccountInfo'


export default function Home() {
  return (
    <div>
    {/* Create Account */}
      <CreateEmployerAccount
        show={true}
      />
      {/* Flying eagle transition */}
      <section className='hidden h-screen'>
        <div>
          <h1>Flying eagle transition</h1>
        </div>
      </section>
      {/* Take the pledge */}
      <EmployerPledge
        show={true}
      />
      {/* Add data & finish */}
      <NewEmployerAccountInfo/>
    </div>
  )
}
