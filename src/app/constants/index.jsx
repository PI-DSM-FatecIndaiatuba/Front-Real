import { Thermometer } from 'lucide-react';
import { Shell } from 'lucide-react';
import { Frown } from 'lucide-react';
import { ZapOff } from 'lucide-react';
import { SprayCan } from 'lucide-react';
import { Unplug } from 'lucide-react';

import user1 from '../assets/profile-pictures/user1.jpg';
import user2 from '../assets/profile-pictures/user2.jpg';
import user3 from '../assets/profile-pictures/user3.jpg';
import user4 from '../assets/profile-pictures/user4.jpg';
import user5 from '../assets/profile-pictures/user5.jpg';
import user6 from '../assets/profile-pictures/user6.jpg';

export const navItems = [
  { label: 'Início', href: '#' },
  { label: 'Sintomas', href: '#sintomas' },
  { label: 'Contatos', href: '#contato' },
  { label: 'Comentários', href: '#comentarios' },
];

export const testimonials = [
  {
    user: 'Ramon Godinho',
    company: 'Aluno da Fatec',
    image: user1,
    text: '"Após uma amigo pegar dengue, fiquei mais atento. Agora, sempre verifico meu quintal para evitar focos de mosquito."',
  },
  {
    user: 'Magal',
    company: 'Aluno da Fiec',
    image: user2,
    text: '"Quando a dengue chegou aqui em casa, foi um susto. Desde então, todo mês fazemos uma limpeza para eliminar os focos do mosquito."',
  },
  {
    user: 'Pedro Bonomo',
    company: 'Jogador do Bairros Unidos',
    image: user3,
    text: '"Já passei pela dengue e foi muito difícil. Agora, faço questão de avisar os vizinhos sempre que vejo algo acumulando água."',
  },
  {
    user: 'Miles Morales',
    company: 'Homem Aranha do Brooklyn',
    image: user4,
    text: '"Participei de uma ação de visitação nas casas para orientar as pessoas sobre como evitar a dengue. A maior parte das famílias não sabia que pequenos cuidados já ajudam a prevenir."',
  },
  {
    user: 'Buzz Lightyear',
    company: 'Patrulha Estelar',
    image: user5,
    text: '"Organizamos mutirões de limpeza no meu bairro. Cada um se responsabiliza por eliminar focos de água nos quintais. A mudança foi visível, a dengue não está mais tão forte aqui."',
  },
  {
    user: 'Chico Bento',
    company: 'Fazenda do Vovô',
    image: user6,
    text: '"No campo, a dengue estava afetando muitos trabalhadores. Decidimos colocar telas em caixas de água e fazer a limpeza das áreas de acúmulo de água, o que ajudou muito a reduzir os casos."',
  },
];

export const features = [
  {
    icon: <Thermometer />,
    text: 'Febre alta súbita',
    description:
      'Geralmente acima de 39°C, a febre surge de forma rápida e intensa, sendo um dos primeiros sinais da doença.',
  },
  {
    icon: <Frown />,
    text: 'Dor de cabeça intensa',
    description:
      'A dor geralmente ocorre na região frontal ou atrás dos olhos e pode ser muito forte.',
  },
  {
    icon: <ZapOff />,
    text: 'Dor muscular e nas articulações',
    description:
      'A dor no corpo, especialmente nas costas, pernas e articulações, é um sintoma comum, o que leva a popularizar o termo "febre quebra-ossos".',
  },
  {
    icon: <Shell />,
    text: 'Náuseas e vômitos',
    description:
      'Os pacientes podem sentir enjoo e, em alguns casos, vomitar, o que contribui para a desidratação.',
  },
  {
    icon: <SprayCan />,
    text: 'Manchas vermelhas na pele',
    description:
      'Erupções cutâneas podem aparecer após alguns dias de febre e geralmente começam no tronco e se espalham para os membros.',
  },
  {
    icon: <Unplug />,
    text: 'Cansaço e fraqueza extrema',
    description:
      'A fadiga é marcante e pode durar por dias após a febre, tornando a recuperação lenta.',
  },
];

export const checklistItems = [
  {
    title: 'Eliminação de focos de água parada',
    description:
      'Elimine ou trate recipientes que acumulem água, como pneus, garrafas e vasos de plantas.',
  },
  {
    title: 'Uso de telas e mosquiteiros',
    description:
      'Instale telas nas janelas e use mosquiteiros para evitar picadas, especialmente à noite.',
  },
  {
    title: 'Aplicação de inseticidas',
    description:
      'Use inseticidas para eliminar mosquitos adultos, com orientação das autoridades de saúde.',
  },
  {
    title: 'Educação e conscientização',
    description:
      'Informe e mobilize a comunidade para eliminar focos de mosquito e prevenir a dengue.',
  },
];

export const pricingOptions = [
  {
    title: 'Prefeitura Indaiatuba',
    price: '🏢',
    features: [
      'Av. Eng. Fábio Roberto Barnabé, 2800 - Jardim Esplanada II',
      '(19)3834-9000 / 0800-770-7702',
      'https://www.indaiatuba.sp.gov.br/',
      '8h às 17h',
    ],
  },
  {
    title: 'Devs',
    price: '💻',
    features: [
      'Somos alunos da FATEC Indaiatuba',
      'Segundo semestre do curso de Desenvolvimento de Software Multiplataforma',
      'https://github.com/PI-DSM-FatecIndaiatuba',
      'Ramon Godinho, Daniel Galvão, Marcelo Reduzino, Giovanna Reduzino e Nathan Ferrascini.',
    ],
  },
  {
    title: 'Política de Privacidade',
    price: '🫣',
    features: [
      'Segurança e Armazenamento',
      'Dados Protegidos',
      'Apenas para uso educacional',
      'Sem fins lucrativos',
    ],
  },
];

export const resourcesLinks = [
  { href: '#', text: 'Getting Started' },
  { href: '#', text: 'Documentation' },
  { href: '#', text: 'Tutorials' },
  { href: '#', text: 'API Reference' },
  { href: '#', text: 'Community Forums' },
];

export const platformLinks = [
  { href: '#', text: 'Features' },
  { href: '#', text: 'Supported Devices' },
  { href: '#', text: 'System Requirements' },
  { href: '#', text: 'Downloads' },
  { href: '#', text: 'Release Notes' },
];

export const communityLinks = [
  { href: '#', text: 'Events' },
  { href: '#', text: 'Meetups' },
  { href: '#', text: 'Conferences' },
  { href: '#', text: 'Hackathons' },
  { href: '#', text: 'Jobs' },
];
