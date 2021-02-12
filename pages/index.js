import { useUser } from '../lib/hooks'
import Layout from '../components/layout'



const Home = () => {
  const user = useUser()

  return (
    <Layout>
{!user && (
  <>
        <li>Please login to use the calculator</li>
      </>

)}
      {user && (
        <>
          <p>Currently logged in as:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          
          <div>Claculator</div>

<div className="mx-auto overflow-hidden mt-10 shadow-lg mb-2 bg-transparent shadow-lg border rounded-lg">
    <div className="">
      <div className="pt-16 p-5 pb-6 pr-16 text-white text-right text-3xl rounded bg-white bg-opacity-25">2000 + 100</div>
      
      
 <div className="flex justify-between transparent h-24 px-16 mt-10">
    <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <div className="rounded-full h-20 w-20 flex items-center justify-center shadow-lg border border-opacity-50 border-white hover:border-2 hover:border-gray-500 focus:outline-none active:bg-white active:bg-opacity-25">%</div>
    </div>
  
    <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <div className="rounded-full h-20 w-20 flex items-center justify-center shadow-lg border border-opacity-50 border-white hover:border-2 hover:border-gray-500 focus:outline-none active:bg-white active:bg-opacity-25">(</div>
    </div>
   
    <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <div className="rounded-full h-20 w-20 flex items-center justify-center shadow-lg border border-opacity-50 border-white hover:border-2 hover:border-gray-500 focus:outline-none active:bg-white active:bg-opacity-25">)</div>
    </div>
   
    <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <div className="rounded-full h-20 w-20 flex items-center justify-center shadow-lg border border-opacity-50 border-white hover:border-2 hover:border-gray-500 focus:outline-none active:bg-white active:bg-opacity-25">÷</div>
    </div>
</div>
      
<div className="flex justify-between transparent h-24 px-16">
    <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <div className="rounded-full h-20 w-20 flex items-center justify-center shadow-lg border border-opacity-50 border-white hover:border-2 hover:border-gray-500 focus:outline-none active:bg-white active:bg-opacity-25">7</div>
    </div>
  
    <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <div className="rounded-full h-20 w-20 flex items-center justify-center shadow-lg border border-opacity-50 border-white hover:border-2 hover:border-gray-500 focus:outline-none active:bg-white active:bg-opacity-25">8</div>
    </div>
   
    <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <div className="rounded-full h-20 w-20 flex items-center justify-center shadow-lg border border-opacity-50 border-white hover:border-2 hover:border-gray-500 focus:outline-none active:bg-white active:bg-opacity-25">9</div>
    </div>
   
    <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <div className="rounded-full h-20 w-20 flex items-center justify-center shadow-lg border border-opacity-50 border-white hover:border-2 hover:border-gray-500 focus:outline-none active:bg-white active:bg-opacity-25">×</div>
    </div>
</div>
      
<div className="flex justify-between transparent h-24 px-16">
    <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <div className="rounded-full h-20 w-20 flex items-center justify-center shadow-lg border border-opacity-50 border-white hover:border-2 hover:border-gray-500 focus:outline-none active:bg-white active:bg-opacity-25">4</div>
    </div>
  
    <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <div className="rounded-full h-20 w-20 flex items-center justify-center shadow-lg border border-opacity-50 border-white hover:border-2 hover:border-gray-500 focus:outline-none active:bg-white active:bg-opacity-25">5</div>
    </div>
   
    <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <div className="rounded-full h-20 w-20 flex items-center justify-center shadow-lg border border-opacity-50 border-white hover:border-2 hover:border-gray-500 focus:outline-none active:bg-white active:bg-opacity-25">6</div>
    </div>
   
    <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <div className="rounded-full h-20 w-20 flex items-center justify-center shadow-lg border border-opacity-50 border-white hover:border-2 hover:border-gray-500 focus:outline-none active:bg-white active:bg-opacity-25">-</div>
    </div>
</div>
      
<div className="flex justify-between transparent h-24 px-16">
    <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <div className="rounded-full h-20 w-20 flex items-center justify-center shadow-lg border border-opacity-50 border-white hover:border-2 hover:border-gray-500 focus:outline-none active:bg-white active:bg-opacity-25">1</div>
    </div>
  
    <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <div className="rounded-full h-20 w-20 flex items-center justify-center shadow-lg border border-opacity-50 border-white hover:border-2 hover:border-gray-500 focus:outline-none active:bg-white active:bg-opacity-25">2</div>
    </div>
   
    <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <div className="rounded-full h-20 w-20 flex items-center justify-center shadow-lg border border-opacity-50 border-white hover:border-2 hover:border-gray-500 focus:outline-none active:bg-white active:bg-opacity-25">3</div>
    </div>
   
    <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <div className="rounded-full h-20 w-20 flex items-center justify-center shadow-lg border border-opacity-50 border-white hover:border-2 hover:border-gray-500 focus:outline-none active:bg-white active:bg-opacity-25">+</div>
    </div>
</div>
      

<div className="flex justify-between transparent h-24 px-16 mb-10">
    <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <div className="rounded-full h-20 w-20 flex items-center justify-center shadow-lg border border-opacity-50 border-white hover:border-2 hover:border-gray-500 focus:outline-none active:bg-white active:bg-opacity-25">+</div>
    </div>
  
    <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <div className="rounded-full h-20 w-20 flex items-center justify-center shadow-lg border border-opacity-50 border-white hover:border-2 hover:border-gray-500 focus:outline-none active:bg-white active:bg-opacity-25">0</div>
    </div>
   
    <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <div className="rounded-full h-20 w-20 flex items-center justify-center shadow-lg border border-opacity-50 border-white hover:border-2 hover:border-gray-500 focus:outline-none active:bg-white active:bg-opacity-25">.</div>
    </div>
   
    <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <div className="rounded-full h-20 w-20 flex items-center bg-orange-500 justify-center shadow-lg border border-opacity-50 border-white hover:border-2 hover:border-gray-500 focus:outline-none gradient active:opacity-50">=</div>
    </div>
</div>    
  </div>
</div>

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
