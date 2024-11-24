"use client";
import React from 'react';
import { Chart } from 'react-google-charts';
import Link from 'next/link'
import { ArrowLeftFromLine } from "lucide-react"
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';



// Dados do gráfico
const data = [
  ['Semana', 'Casos por Semana'],
  ['Semana 1', 10],
  ['Semana 2', 11],
  ['Semana 3', 8],
  ['Semana 4', 5],
];

// Configurações do gráfico
const options = {
  title: 'Casos de dengue dos ultimos 30 dias',
  backgroundColor: 'transparent', // Define o fundo como transparente
  titleTextStyle: { color: '#fff' }, // Define a cor do título como branca
  legend: { textStyle: { color: '#fff' } }, // Define a cor da legenda como branca
  fontName: 'Gudea', // Define a font family
};

const PieChart: React.FC = () => {
  return (
    <div>
      <Link href="/"><ArrowLeftFromLine className="ml-8 mt-4 inline hover:text-neutral-700 duration-200ms hover:duration-150" size={28} /></Link>
      <h1 className="text-2xl sm:text-4xl lg:text-7xl text-center tracking-wide">Gráfico de <span className='bg-gradient-to-r from-green-500 to-blue-800 text-transparent bg-clip-text'>Casos de Dengue</span></h1>
      <div className="flex items-center justify-center">
        <div className="p-2 w-full max-w-4xl">
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width="100%"
            height="400px"
          />
        </div>
      </div>
      <div className='p-5 text-sm sm:text-base md:text-lg lg:text-xl'>
        <h2 className='text-center text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6'>A Matemática da Dengue: Compreendendo os Fatores que Influenciam a Doença</h2>
        <div className="md:px-8 lg:px-16">
          <p className='text-justify indent-3'>
            A propagação da dengue pode ser explicada por meio de modelos matemáticos, como o
            modelo SIR (Suscetível-Infectado-Recuperado). Este modelo avalia como a doença se
            espalha em uma população, dividindo as pessoas em grupos: aquelas que podem ser
            infectadas, as já infectadas e as que se recuperaram, adquirindo imunidade.
          </p>
          <br />
          <p>Diversos fatores influenciam a disseminação da dengue:</p>
          <ul className='list-disc pl-6'>
            <li><span className='font-bold'>Chuvas:</span> Aumentam os criadouros de mosquito devido à água parada</li>
            <li><span className='font-bold'>Densidade Populacional:</span> Mais pessoas próximas facilitam a transmissão</li>
            <li><span className='font-bold'>Recuperação e imunidade:</span> Após a doença, as pessoas desenvolvem imunidade
            ao sorotipo específico.</li>
            <li><span className='font-bold'>Temperatura e clima:</span> Climas quentes aceleram o ciclo de vida do mosquito.</li>
            <li><span className='font-bold'>Medidas de controle:</span> Campanhas de conscientização, eliminação de criadouros
            e acesso a cuidados médicos podem diminuir a taxa de transmissão.</li>
          </ul>
          <br />
          <p>Como os modelos ajudam?</p>
          <br />
          <p>Os modelos SIR dividem a população em três grupos:</p>
          <ul className='list-disc pl-8'>
            <li><span className='font-bold'>Suscetíveis (S):</span> Indivíduos que ainda não tiveram contato com o agente infeccioso e, portanto, podem ser infectados. </li>
            <li><span className='font-bold'>Infectados (I):</span>  Indivíduos que contraíram a doença e são capazes de transmiti-la a outros.</li>
            <li><span className='font-bold'>Recuperados (R):</span>  Indivíduos que já superaram a doença, adquirindo imunidade e não transmitindo mais o agente infeccioso.</li>
          </ul>
          <br />
          <p>O modelo usa equações simples para representar essas mudanças:</p>
          <br />
          <ol className='list-decimal pl-8'>
            <li>Diminuição dos suscetíveis (S)</li>
            <br />
            <p className='text-center'><InlineMath math="dS/dt = -\beta \cdot S \cdot I" /></p>
            <br />
            <p className='text-justify mb-2'>Explicação: Mostra como o número de suscetíveis diminui, sendo proporcional aos contatos entre suscetíveis (𝑆) e infectados (𝐼), com 𝛽 sendo a taxa de transmissão.</p>
            <br />
            <li>Aumento dos Recuperados (R):</li>
            <br />
            <p className='text-center'><InlineMath math="dR/dt = \gamma \cdot I" /></p>
            <br />
            <p className='text-justify mb-2'>Explicação: Mostra como os recuperados aumentam, sendo proporcional ao número de infectados (𝐼) multiplicado pela taxa de recuperação (𝛾)</p>
          </ol>
          <br />
          <p>Por exemplo: se 𝛾 = 0,1e há 1.000 infectados, 100 pessoas se recuperam por dia (𝛾 . 𝐼)</p>
          <br />
          <p>Esses cálculos mostram como a dengue se espalha e ajudam a planejar intervenções,
          como campanhas de prevenção e combate ao mosquito.</p>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
