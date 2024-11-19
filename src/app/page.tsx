import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Prevencao from "./Components/Prevencao/Prevencao";
import Sintomas from "./Components/Sintomas";

export default function Home() {
  return (
    <>
      <Header/>
      <About/>
      <Sintomas/>
      <Prevencao/>
    </>
  );
}
