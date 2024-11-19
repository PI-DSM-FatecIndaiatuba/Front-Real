import './Prevencao.css'

const Prevencao = () => {
  return (
    <div className='p-4 text-center mb-12'>
        <h1 className="text-center font-gudea text-xl md:text-2xl	lg:text-4xl mb-6">Prevenção e Cuidados</h1>
        <div className="font-gudea text-xs md:text-lg lg:text-xl ml-6 text-justify">
          <p className='mb-3'>Para se prevenir da dengue, é importante eliminar os focos do mosquito Aedes aegypti, que transmite a doença:</p>
          <div className="ml-10">
              <ul className='list-disc text-amber-500'>
                <li>Tampe caixas d’água e reservatórios: <span className='text-black'>O mosquito Aedes aegypti coloca seus ovos em locais com água limpa e parada.</span></li>
                <li>Evite acúmulo de água em recipientes: <span className='text-black'>Vire baldes e garrafas com a boca para baixo e descarte materiais que podem acumular água.</span></li>
                <li>Limpe calhas e ralos regularmente: <span className='text-black'>Assim você evita o acúmulo de água nesses locais.</span></li>
              </ul>
          </div>
        </div>
    </div>
  )
}

export default Prevencao
