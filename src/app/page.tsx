import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/Herosection/HeroSection";
import Prevencao from "./Components/Prevencao/Prevencao";
import Sintomas from "./Components/Sintomas";
import Comments from "./Components/Comentarios/Comments";
import DireitosReservados from "./Components/Direitos/DireitosReservados";

export default function Home() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <About/>
      <Sintomas/>
      <Comments/>
      <Prevencao/>
      <DireitosReservados/>
    </>
  );
}
