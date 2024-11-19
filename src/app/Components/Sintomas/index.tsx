import { text } from 'stream/consumers'
import Card from '../Card-Sintomas/card'
import './Sintomas.css'

const Sintomas = () => {

  const sintomas = [
    {
      img: "https://www.gov.br/saude/pt-br/assuntos/noticias/2024/fevereiro/aprenda-a-diferenciar-os-sintomas-da-dengue-e-da-gripe/dengue-ou-gripe.png/@@images/5196f0af-1034-4863-8efa-78bdedaff2c0.png",
      titulo: "Febre Alta",
      texto: "Febre alta é quando a temperatura corporal está acima de 39°C. É importante acompanhar a evolução da febre e procurar ajuda médica se houver sinais de piora."
    },

    {
      img: "https://cdn.prod.website-files.com/652421babb6bdd7f92f721b7/652421babb6bdd7f92f7234a_o-que-e-dor-nas-articulacoes.jpg",
      titulo: "Dor nas Articulações",
      texto: "A dor pode ser intensa e afetar várias articulações do corpo, como as dos pés, mãos, dedos, tornozelos e pulsos."
    },

    {
      img: "https://www.saopaulo.sp.gov.br/wp-content/uploads/2024/03/Sintomadengue_750x500-4f077b8a685f5916.jpg",
      titulo: "Manchas Avermelhadas",
      texto: "são um dos principais sinais da dengue e surgem em cerca de 50 a 80% dos casos. Elas são uma manifestação cutânea que ocorre quando os vasos sanguíneos se dilatam e podem aparecer entre o terceiro e o quinto dia de febre."
    }
  ]

  return (
    <div className='mt-12 font-gudea'>
        <h1 className='text-center text-xl md:text-2xl	lg:text-4xl'>Principais Sintomas</h1>
        <div className='flex justify-around mt-10 flex-wrap	'>
          {sintomas.map((info) => <Card key={info.titulo} img={info.img} title={info.titulo} text={info.texto}/>)}
        </div>
    </div>
  )
}

export default Sintomas