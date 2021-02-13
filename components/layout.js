import Head from 'next/head'
import Header from './header'

const Layout = (props) => (
  <>
  <div className="flex flex-col min-h-screen">
    <Head>
      <title>Magic</title>
      <link rel="icon" href="/favicon.ico" />

      <link
            rel="preload"
            href="/fonts/Poppins-Thin.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Poppins-ExtraLight.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Poppins-Light.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Poppins-Medium.ttf"
            as="font"
            crossOrigin=""
          />

    </Head>

    <Header />

    <main className="flex-1">
      <div className="container">{props.children}</div>
    </main>

    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/vercel.svg" alt="Vercel Logo" />
      </a>
    </footer>

    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      body {
        background-image: linear-gradient(-225deg, #cbbacc 0%, #2580b3 100%);
        height: 100%;
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
        color: #333;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      }
      .container {
        max-width: 50rem;
        margin: 0 auto;
        padding: 2rem 1.25rem;
      }
      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style></div>
  </>
)

export default Layout
