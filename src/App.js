import React, { useContext, useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthStore from "./store/auth-context";
import MyFrag from "./components/UI/MyFrag";

function App() {
  const ctx = useContext(AuthStore);
  return (
    <MyFrag>
      <MainHeader />
      <main>
        {!ctx.ali && <Login />}
        {ctx.ali && <Home />}
      </main>
    </MyFrag>
  );
}

export default App;
