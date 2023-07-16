import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider(props) {
  const [userData, setUserData] = useState({
    token: localStorage.getItem("token"),
    id: localStorage.getItem("id_Prosen"),
    nameUser: localStorage.getItem("name_Prosen"),
    email: localStorage.getItem("email_Prosen"),
    logado: localStorage.getItem("logado_Prosen"),
    authAdmin: localStorage.getItem("authAdmin_Prosen"),
    authStudent: localStorage.getItem("authStudent_Prosen"),
    
  });

  return (
    <UserContext.Provider value={[userData, setUserData]}>
      {props.children}
    </UserContext.Provider>
  );
}
