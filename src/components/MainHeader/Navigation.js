import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthStore from "../../store/auth-context";

const Navigation = () => {
  const { ali, logoutHandler } = useContext(AuthStore);
  // return (
  //   <AuthStore.Consumer>
  //     {(authCtx) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {ali && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ali && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ali && (
          <li>
            <button onClick={logoutHandler}>Logout</button>
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
