import { useUser } from "../lib/hooks";
import Layout from "../components/layout";
import { motion } from "framer-motion";

const About = () => {
  const user = useUser({ redirectTo: "/login" });

  return (
    <Layout>
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
        <div className="text-white text-5xl font-thin mt-8 md:mt-12 mb-4">
          About Magic Calculator
        </div>

        <div className="text-gray-500 text-xl font-light mt-8 md:mt-6 mb-10">
          This project is done by Rawan Alfaraj, with the requirments that were
          given for the job application assignement. You can find a full
          report/documentaion of the project HERE. If you have any questions you
          can email me at alfarajrawan@gmail.com or call me at 0548800661.
        </div>

        {user && (
          <>
            <div className="text-white text-5xl font-thin mt-8 md:mt-12 mb-4">
              Your Session:{" "}
            </div>
            <pre className="text-gray-600">{JSON.stringify(user, null, 2)}</pre>
          </>
        )}

        <style jsx>{`
          pre {
            white-space: pre-wrap;
            word-wrap: break-word;
          }
        `}</style>
      </motion.div>
    </Layout>
  );
};

export default About;
