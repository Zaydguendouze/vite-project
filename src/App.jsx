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
    <div className="App">
      <Navbar usr={user} />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
