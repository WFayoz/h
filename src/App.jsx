import Hero from "./components/sections/Hero";
import Section1 from "./components/sections/Section1";
import Header from "./components/header/Header";

const App = () => {
  // const [themeMode, setThemeMode] = useState("dark");
  // const darkTheme = () => {
  //   setThemeMode("dark");
  // };
  // const lightTheme = () => {
  //   setThemeMode("light");
  // };
  // useEffect(() => {
  //   document.querySelector("html").classList.remove("dark", "light");
  //   document.querySelector("html").classList.add('themeMode');
  // }, [themeMode]);
  return (
    <div className="w-[1280px] mx-auto flex flex-col items-center justify-center">
      <Header />
      <Hero />
      <Section1 />
    </div>
  );
};

export default App;
