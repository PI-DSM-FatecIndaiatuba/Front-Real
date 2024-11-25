"use client"
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/Herosection/HeroSection";
import Prevencao from "./Components/Prevencao/Prevencao";
import Sintomas from "./Components/Sintomas";
import Comments from "./Components/Comentarios/Comments";
import DireitosReservados from "./Components/Direitos/DireitosReservados";
import Feedback from "./Components/Feedback/Feedback";

export default function Home() {
  return (
    <div>
      <Header/>
      <div id="inicio"><HeroSection/></div>
      <div id="sintomas"><About/></div>
      <Sintomas/>
      <div id="comentarios"><Comments/></div>
      <Feedback/>
      <Prevencao/>
      <div id="contato"><DireitosReservados/></div>
    </div>
  );
}

