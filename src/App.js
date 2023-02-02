import { Routes, Route } from "react-router-dom";
import Header from "./components/UI/Header";
import { Home } from "./pages/Home";
import { LoginWallet } from "./pages/LoginWallet";
import { LoginKilt } from "./pages/LoginKilt";
import { CreateProfile } from "./pages/CreateProfile";

function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <div className="ml-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LoginWallet" element={<LoginWallet />} />
          <Route path="/LoginKilt" element={<LoginKilt />} />
          <Route path="/CreateProfile" element={<CreateProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
