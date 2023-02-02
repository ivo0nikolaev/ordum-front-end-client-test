import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="relative w-full z-20 mb-10  border-b border-black">
      <div className="flex justify-between md:w-5/12 text-xl md:text-normal">
        <Link to="/">
          <a className="font-bold text-blue-600">
            Home
          </a>
        </Link>
        <Link to="CreateProfile">
          <a className="font-bold text-blue-600">
            Create Profile
          </a>
        </Link>
        <Link to="LoginWallet">
          <a className="font-bold text-blue-600">
            Phala Login
          </a>
        </Link>
        <Link to="LoginKilt">
          <a className="font-bold text-blue-600">
            KILT Login
          </a>
        </Link>
      </div>
    </header>
  );
}
