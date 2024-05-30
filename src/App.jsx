import Hero from "./components/sections/Hero";
import Section1 from "./components/sections/Section1";
import Header from "./components/header/Header";
import { useContext } from "react";
import { ModeContext } from "./context/modeContext";
import { modeTypes } from "./types/modeTypes";
import Toggle from "./components/sections/Toggle.jsx";

const App = () => {
  const { mode } = useContext(ModeContext);
  const theme = mode === modeTypes.DARK_MODE ? true : false;

  return (
    <div>
      <div className="fixed top-[80%] left-4 z-10">
        <Toggle fromApp={true} />
      </div>
      <div
        className={`
  w-[1280px] mx-auto flex flex-col items-center justify-center 
  ${
    mode === modeTypes.DARK_MODE
      ? "bg-[#29292b] text-white"
      : "bg-white text-black"
  }
`}
      >
        <Header />
        <Hero />
        <Section1 />
      </div>
    </div>
  );
};

export default App;
