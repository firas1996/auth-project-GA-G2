import { createContext, useEffect, useState } from "react";

const AuthStore = createContext({
  email: "",
  password: "",
  ali: false,
  loginHandler: (email, password) => {},
  logoutHandler: () => {},
});
export default AuthStore;

export const MyProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // console.log("effect");
    const statue = localStorage.getItem("logedIn");
    if (statue === "abc") {
      setIsLoggedIn(true);
    }
  }, []);
  // console.log("after");

  const loginHandler = (email, password) => {
    localStorage.setItem("logedIn", "abc");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("logedIn");
    setIsLoggedIn(false);
  };
  return (
    <AuthStore.Provider
      value={{
        ali: isLoggedIn,
        loginHandler: loginHandler,
        logoutHandler: logoutHandler,
      }}
    >
      {children}
    </AuthStore.Provider>
  );
};
