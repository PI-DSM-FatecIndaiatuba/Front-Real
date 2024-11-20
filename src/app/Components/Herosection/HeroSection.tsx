const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          Faça a sua parte,
        <span className="bg-gradient-to-r from-green-500 to-blue-800 text-transparent bg-clip-text">
          {" "}
          combata a dengue!
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          O Aedes aegypti é responsável pela transmissão de doenças graves como dengue, zika e chikungunya. Eliminar seus focos de reprodução é essencial para proteger você e sua família dessas doenças. Junte-se a nós na luta contra o mosquito!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="https://www.paho.org/pt/topicos/dengue#info " target="_blank"
          className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md"
        >
          OPAS - O que é Dengue?
        </a>
        <a href="" className="py-3 px-4 mx-3 rounded-md">
          Saiba mais a seguir
        </a>
      </div>
    </div>
  );
};

export default HeroSection;