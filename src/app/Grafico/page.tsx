"use client";
import React from 'react';
import { Chart } from 'react-google-charts';
import Link from 'next/link'
import { ArrowLeftFromLine } from "lucide-react"


// Dados do gráfico
const data = [
  ['Task', 'Hours per Day'],
  ['Semana 1', 10],
  ['Semana 2', 11],
  ['Semana 3', 8],
  ['Semana 4', 5],
];

// Configurações do gráfico
const options = {
  title: 'Casos de dengue dos ultimos 30 dias',
  backgroundColor: '#000', // Define o fundo preto no gráfico
  titleTextStyle: { color: '#fff' }, // Define a cor do título como branca
  legend: { textStyle: { color: '#fff' } }, // Define a cor da legenda como branca
};

const PieChart: React.FC = () => {
  return (
    <div className='bg-black'>
      <Link href="/"><ArrowLeftFromLine className="ml-8  inline hover:text-neutral-700 duration-200ms hover:duration-150" /></Link>
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="bg-black p-4 rounded-lg shadow-lg">
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width="900px"
            height="500px"
          />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
