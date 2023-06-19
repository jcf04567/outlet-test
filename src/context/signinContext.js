import { createContext, useContext, useEffect, useState } from "react";

const signInContext = createContext();

export const useSignInContext = () => useContext(signInContext);

export const SignInProvider = ({ children }) => {
  const [signIn, setSignIn] = useState(false);
  useEffect(() => {
    window.localStorage.getItem("outletAppSignIn") ? setSignIn(true) : setSignIn(false);
  },[]);

  return (
      <signInContext.Provider value={ [signIn, setSignIn]}>
        {children}
      </signInContext.Provider>
  );
};
