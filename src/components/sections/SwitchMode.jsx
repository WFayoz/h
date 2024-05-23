// import React from "react";
// import useTheme from "../../contexts/Theme";

// const SwitchMode = () => {
//   const { themeMode, darkTheme, lightTheme } = useTheme();

//   const onChangeBtn = (e) => {
//     const darkModeStatus = e.currentTarget.checked;
//     if (darkModeStatus) {
//       darkTheme();
//     } else {
//       lightTheme();
//     }
//   };

//   return (
//     <label className="relative inline-block w-14 h-8">
//       <input
//         type="checkbox"
//         onChange={onChangeBtn}
//         checked={themeMode === "dark"}
//         className="opacity-0 w-0 h-0"
//       />
//       <span
//         className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-400 rounded-full transition duration-300
//         ${themeMode === "dark" ? "bg-blue-500" : ""}`}
//       ></span>
//       <span
//         className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300
//         ${themeMode === "dark" ? "transform translate-x-6" : "transform translate-x-0"}`}
//       ></span>
//     </label>
//   );
// };

// export default SwitchMode;
