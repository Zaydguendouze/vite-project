import "./App.css";
import { useState, useEffect } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);
      });
  }, []);
  return (
    <div className="flex flex-col h-screen">
      <Navbar usr={user} />
      <div className="flex-grow mb-20">
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
