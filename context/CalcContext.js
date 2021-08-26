import { createContext, useContext, useState } from "react";

const CalcContext = createContext();

export function CalcContextProvider({ children }) {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(1);

  return (
    <CalcContext.Provider
      value={{ bill, setBill, tip, setTip, people, setPeople }}
    >
      {children}
    </CalcContext.Provider>
  );
}

export function useCalcContext() {
  return useContext(CalcContext); // creates useCalcContext to be used where needed
}
