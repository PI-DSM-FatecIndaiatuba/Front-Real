import './about.css'

const About = () => {
  return (
    <div className='bg-white font-gudea pl-12 pr-12 flex items-center justify-between gap-3 box-border'>
      <div className="text-black md:w-2/5 lg:w-2/5 text-justify">
        <h1 className='text-xl md:text-2xl lg:text-3xl'>O que é a Dengue?</h1>
        <br />
        <p className='text-xs md:text-lg lg:text-2xl'>A dengue é uma doença viral transmitida pela picada do mosquito Aedes aegypti, um vetor que se reproduz principalmente em locais com água parada. Existem quatro tipos do vírus, e uma pessoa pode ter dengue até quatro vezes na vida, cada uma delas causada por um tipo diferente. Em alguns casos, a doença pode evoluir para uma forma mais grave, conhecida como dengue hemorrágica, que exige atenção médica imediata.</p>
      </div>
      <img className='hidden md:block lg:block w-52 md:w-96 lg:w-2/5' src="./imgs/moskitao-real.PNG" alt="Mosquito da dengue" />
    </div>
  )
}

export default About
