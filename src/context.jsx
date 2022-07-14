import { createContext, useContext, useState } from "react";

const Name = createContext();

const NameContext = ({ children }) => {
  const [myName, setMyName] = useState("Abhay");
  return (
    <Name.Provider value={{ myName, setMyName }}>{children}</Name.Provider>
  );
};
export const NameState = () => {
  return useContext(Name);
};
export default NameContext;
