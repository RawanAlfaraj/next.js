import Link from "next/link";
import { useUser } from "../lib/hooks";
import Image from "next/image";

const Header = () => {
  const user = useUser();

  return (
    <header>
      <nav className="bg-transparent text-black font-normal">
        <ul className="mt-2">
          <li className="text-center md:text-left md:ml-0 mx-auto md:mr-auto min-w-full md:min-w-min mb-4 md:mb-0">
            <Image
              src="/MC-Logo.png"
              alt="Picture of the author"
              width={200}
              height={85}
            />
          </li>
          <li className="ml-auto md:ml-0 mr-2 px-4 rounded-xl hover:bg-white hover:bg-opacity-25 active:bg-opacity-50">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          {user ? (
            <>
              <li className="mr-2 px-4 rounded-xl hover:bg-white hover:bg-opacity-25 active:bg-opacity-50">
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li className="mr-auto md:mr-0 px-4 rounded-xl hover:bg-white hover:bg-opacity-25 active:bg-opacity-50">
                <a href="/api/logout">Logout</a>
              </li>
            </>
          ) : (
            <li className="mr-auto md:mr-0 px-4 rounded-xl hover:bg-white hover:bg-opacity-25 active:bg-opacity-50">
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <style jsx>{`
        nav {
          max-width: 50rem;
          margin: 0 auto;
          padding: 0.2rem 1.25rem;
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
          align-items: center;
        }
        li {
          height: fit-content;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
      `}</style>
    </header>
  );
};

export default Header;
