import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    console.log("effect");
    const statue = localStorage.getItem("logedIn");
    if (statue === "abc") {
      setIsLoggedIn(true);
    }
  }, []);
  console.log("after");

  const loginHandler = (email, password) => {
    localStorage.setItem("logedIn", "abc");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("logedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
