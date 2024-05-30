import "./toggle.css";
import { useContext, useEffect, useRef } from "react";
import { ModeContext } from "../../context/modeContext";
import { modeTypes } from "../../types/modeTypes";

const Toggle = ({ }) => {
  const { toggleMode, mode } = useContext(ModeContext);

  return (
    <div className="toggle">
      <input
        className={mode === modeTypes.LIGHT_MODE ? "switched" : ""}
        type="checkbox"
        value={true}
      />
      {/* onCLickni inputga o'tkazish kerak styleni tuglragandan keyin, bir xil emas style saytdagi bilan va "Our Work" sectionda hover buganda animatsiya bilan chiqadgan qilish kerak va rasmni ham qo'yish kerak keyin sizga baland baho qo'yberaman shulani qib tashses 2 ta mazvugaham*/}
      <label className="cursor-pointer" onClick={toggleMode}></label>
    </div>
  );
};

export default Toggle;
