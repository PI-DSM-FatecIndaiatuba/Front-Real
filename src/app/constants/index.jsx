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
  { label: 'Sintomas', href: '#' },
  { label: 'Contatos', href: '#' },
  { label: 'Comentários', href: '#' },
];

export const testimonials = [
  {
    user: 'John Doe',
    company: 'Stellar Solutions',
    image: user1,
    text: 'I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.',
  },
  {
    user: 'Jane Smith',
    company: 'Blue Horizon Technologies',
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: 'David Johnson',
    company: 'Quantum Innovations',
    image: user3,
    text: 'Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.',
  },
  {
    user: 'Ronee Brown',
    company: 'Fusion Dynamics',
    image: user4,
    text: 'Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!',
  },
  {
    user: 'Michael Wilson',
    company: 'Visionary Creations',
    image: user5,
    text: 'I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.',
  },
  {
    user: 'Emily Davis',
    company: 'Synergy Systems',
    image: user6,
    text: 'The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.',
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
    title: 'Code merge made easy',
    description: 'Track the performance of your VR apps and gain insights into user behavior.',
  },
  {
    title: 'Review code without worry',
    description: 'Track the performance of your VR apps and gain insights into user behavior.',
  },
  {
    title: 'AI Assistance to reduce time',
    description: 'Track the performance of your VR apps and gain insights into user behavior.',
  },
  {
    title: 'Share work in minutes',
    description: 'Track the performance of your VR apps and gain insights into user behavior.',
  },
];

export const pricingOptions = [
  {
    title: 'Free',
    price: '$0',
    features: ['Private board sharing', '5 Gb Storage', 'Web Analytics', 'Private Mode'],
  },
  {
    title: 'Pro',
    price: '$10',
    features: ['Private board sharing', '10 Gb Storage', 'Web Analytics (Advance)', 'Private Mode'],
  },
  {
    title: 'Enterprise',
    price: '$200',
    features: [
      'Private board sharing',
      'Unlimited Storage',
      'High Performance Network',
      'Private Mode',
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
