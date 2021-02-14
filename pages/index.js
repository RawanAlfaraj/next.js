import Link from "next/link";
import { useUser } from "../lib/hooks";
import Layout from "../components/layout";
import { motion } from "framer-motion";
import Calculator   from '../components/calculator/Calculator'

const Home = () => {
  const user = useUser();

  return (
    <Layout>
      {!user && (
        <>
          {/* homepage - logged out */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            {/* homepage - logged in */}
            <div className="flex flex-col items-center">
              <div className="text-white text-5xl font-thin mt-8 md:mt-12 mb-10">
                Welcome to Magic Calcualtor
              </div>
              <Link href="/login">
                <div className="text-lg items-center justify-center text-center bg-white bg-opacity-25 leading-none text-white rounded-full p-4 w-56 shadow text-sm bg-filter mb-2 cursor-pointer border border-transparent hover:border-purple-300 active:bg-opacity-50">
                  Sign in
                </div>
              </Link>
              <div className="font-thin text-purple-100">
                {" "}
                to use the calculator{" "}
              </div>
            </div>
          </motion.div>
        </>
      )}
      {user && (
        <>
          {/* <p>Currently logged in as:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre> */}

          {/* Calculator */}



          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            <div className="text-center max-w-xl mx-auto text-white text-4xl md:text-5xl font-thin mt-8 md:mt-12 mb-10">
              Magic Calcualtor
            </div>

                       <div className="calc-grid-main">
            <Calculator/>
        </div>


          </motion.div>

{/*           
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.3,
                },
              },
            }}
          >
            <div className="max-w-xl bg-white bg-opacity-10 mx-auto overflow-hidden mt-12 shadow-lg mb-12 bg-transparent shadow-lg  rounded-lg">
              <div className="">
                <div className="pt-16 p-5 pb-6 px-0 md:pr-16 text-white text-center md:text-right text-3xl rounded bg-white bg-opacity-25">
                  2000 + 100
                </div>

                <div className="flex justify-between transparent h-24 px-4 md:px-16 mt-4 md:mt-10">
                  <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <div className="rounded-full h-16 w-16 md:h-20 md:w-20 flex items-center justify-center shadow-lg border border-opacity-25 border-white hover:border-2 hover:border-purple-200 focus:outline-none active:bg-white active:bg-opacity-25">
                      %
                    </div>
                  </div>

                  <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <div className="rounded-full h-16 w-16 md:h-20 md:w-20 flex items-center justify-center shadow-lg border border-opacity-25 border-white hover:border-2 hover:border-purple-200 focus:outline-none active:bg-white active:bg-opacity-25">
                      (
                    </div>
                  </div>

                  <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <div className="rounded-full h-16 w-16 md:h-20 md:w-20 flex items-center justify-center shadow-lg border border-opacity-25 border-white hover:border-2 hover:border-purple-200 focus:outline-none active:bg-white active:bg-opacity-25">
                      )
                    </div>
                  </div>

                  <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <div className="rounded-full h-16 w-16 md:h-20 md:w-20 flex items-center justify-center shadow-lg border border-opacity-25 border-white hover:border-2 hover:border-purple-200 focus:outline-none active:bg-white active:bg-opacity-25">
                      ÷
                    </div>
                  </div>
                </div>

                <div className="flex justify-between transparent h-24 px-4 md:px-16">
                  <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <div className="rounded-full h-16 w-16 md:h-20 md:w-20 flex items-center justify-center shadow-lg border border-opacity-25 border-white hover:border-2 hover:border-purple-200 focus:outline-none active:bg-white active:bg-opacity-25">
                      7
                    </div>
                  </div>

                  <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <div className="rounded-full h-16 w-16 md:h-20 md:w-20 flex items-center justify-center shadow-lg border border-opacity-25 border-white hover:border-2 hover:border-purple-200 focus:outline-none active:bg-white active:bg-opacity-25">
                      8
                    </div>
                  </div>

                  <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <div className="rounded-full h-16 w-16 md:h-20 md:w-20 flex items-center justify-center shadow-lg border border-opacity-25 border-white hover:border-2 hover:border-purple-200 focus:outline-none active:bg-white active:bg-opacity-25">
                      9
                    </div>
                  </div>

                  <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <div className="rounded-full h-16 w-16 md:h-20 md:w-20 flex items-center justify-center shadow-lg border border-opacity-25 border-white hover:border-2 hover:border-purple-200 focus:outline-none active:bg-white active:bg-opacity-25">
                      ×
                    </div>
                  </div>
                </div>

                <div className="flex justify-between transparent h-24 px-4 md:px-16">
                  <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <div className="rounded-full h-16 w-16 md:h-20 md:w-20 flex items-center justify-center shadow-lg border border-opacity-25 border-white hover:border-2 hover:border-purple-200 focus:outline-none active:bg-white active:bg-opacity-25">
                      4
                    </div>
                  </div>

                  <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <div className="rounded-full h-16 w-16 md:h-20 md:w-20 flex items-center justify-center shadow-lg border border-opacity-25 border-white hover:border-2 hover:border-purple-200 focus:outline-none active:bg-white active:bg-opacity-25">
                      5
                    </div>
                  </div>

                  <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <div className="rounded-full h-16 w-16 md:h-20 md:w-20 flex items-center justify-center shadow-lg border border-opacity-25 border-white hover:border-2 hover:border-purple-200 focus:outline-none active:bg-white active:bg-opacity-25">
                      6
                    </div>
                  </div>

                  <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <div className="rounded-full h-16 w-16 md:h-20 md:w-20 flex items-center justify-center shadow-lg border border-opacity-25 border-white hover:border-2 hover:border-purple-200 focus:outline-none active:bg-white active:bg-opacity-25">
                      -
                    </div>
                  </div>
                </div>

                <div className="flex justify-between transparent h-24 px-4 md:px-16">
                  <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <div className="rounded-full h-16 w-16 md:h-20 md:w-20 flex items-center justify-center shadow-lg border border-opacity-25 border-white hover:border-2 hover:border-purple-200 focus:outline-none active:bg-white active:bg-opacity-25">
                      1
                    </div>
                  </div>

                  <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <div className="rounded-full h-16 w-16 md:h-20 md:w-20 flex items-center justify-center shadow-lg border border-opacity-25 border-white hover:border-2 hover:border-purple-200 focus:outline-none active:bg-white active:bg-opacity-25">
                      2
                    </div>
                  </div>

                  <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <div className="rounded-full h-16 w-16 md:h-20 md:w-20 flex items-center justify-center shadow-lg border border-opacity-25 border-white hover:border-2 hover:border-purple-200 focus:outline-none active:bg-white active:bg-opacity-25">
                      3
                    </div>
                  </div>

                  <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <div className="rounded-full h-16 w-16 md:h-20 md:w-20 flex items-center justify-center shadow-lg border border-opacity-25 border-white hover:border-2 hover:border-purple-200 focus:outline-none active:bg-white active:bg-opacity-25">
                      +
                    </div>
                  </div>
                </div>

                <div className="flex justify-between transparent h-24 px-4 md:px-16 mb-4 md:mb-10">
                  <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <div className="rounded-full h-16 w-16 md:h-20 md:w-20 flex items-center justify-center shadow-lg border border-opacity-25 border-white hover:border-2 hover:border-purple-200 focus:outline-none active:bg-white active:bg-opacity-25">
                      +
                    </div>
                  </div>

                  <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <div className="rounded-full h-16 w-16 md:h-20 md:w-20 flex items-center justify-center shadow-lg border border-opacity-25 border-white hover:border-2 hover:border-purple-200 focus:outline-none active:bg-white active:bg-opacity-25">
                      0
                    </div>
                  </div>

                  <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <div className="rounded-full h-16 w-16 md:h-20 md:w-20 flex items-center justify-center shadow-lg border border-opacity-25 border-white hover:border-2 hover:border-purple-200 focus:outline-none active:bg-white active:bg-opacity-25">
                      .
                    </div>
                  </div>

                  <div className="  py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <div className="rounded-full h-16 w-16 md:h-20 md:w-20 flex items-center bg-orange-500 justify-center shadow-lg border border-opacity-25 border-white hover:border-2 hover:border-purple-200 focus:outline-none gradient active:opacity-50">
                      =
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div> */}
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
  );
};

export default Home;
