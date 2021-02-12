import { useUser } from '../lib/hooks'
import Layout from '../components/layout'



const Home = () => {
  const user = useUser()

  return (
    <Layout>

{!user && (
  <>
      <div className="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-sm">Welcome to Magic Calculator App</div>

        <li>Please login to use the calculator</li>
      
      </>

)}
      {user && (
        <>
          <p>Currently logged in as:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
     
        </>
      )}

      <style jsx>{`
        li {
          margin-bottom: 0.5rem;
        }
        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
      `}</style>
    </Layout>
  )
}

export default Home
