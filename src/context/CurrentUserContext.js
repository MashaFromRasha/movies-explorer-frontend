import React from "react";

export const defaultUserState = {
  _id: "",
  name: "",
  email: "",
  loggedIn: false,
};

export const CurrentUserContext = React.createContext(null);
