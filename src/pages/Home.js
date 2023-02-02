import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-10"> Ordum Home</h1>
      <p className="text-4xl font-extrabold mb-10"> Under construction</p>
      <p>Links</p>
      <div className="flex flex-col">
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
    </div>
  );
}
