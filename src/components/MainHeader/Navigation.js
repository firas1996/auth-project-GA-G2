import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthStore from "../../store/auth-context";

const Navigation = () => {
  const authCtx = useContext(AuthStore);
  // return (
  //   <AuthStore.Consumer>
  //     {(authCtx) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {authCtx.ali && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {authCtx.ali && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {authCtx.ali && (
          <li>
            <button onClick={authCtx.logoutHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
  //     }}
  //   </AuthStore.Consumer>
  // );
};

export default Navigation;
