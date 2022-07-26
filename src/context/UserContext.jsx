import { createContext, useContext, useState } from "react";
import { STORAGE_KEY_USER } from "../const/StorageKeys";
import { storageRead } from "../utils/storage";

// Context -> exposing state
const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext); // {user, setUser} returns an object
};

// Provider -> managing state
const UserProvider = ({ children }) => {
  //magic strings, numbers
  const [user, setUser] = useState(storageRead(STORAGE_KEY_USER));

  const state = {
    user,
    setUser,
  };
  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

export default UserProvider;
