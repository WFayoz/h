import { createContext, useContext, useState } from "react";
import { modeTypes } from "../types/modeTypes";

export const ModeContext = createContext(null);

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(modeTypes.DARK_MODE);

  const toggleMode = () => {
    setMode((prevMode) =>
      prevMode === modeTypes.DARK_MODE
        ? modeTypes.LIGHT_MODE
        : modeTypes.DARK_MODE
    );
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => useContext(ModeContext);
