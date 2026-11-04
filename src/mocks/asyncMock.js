const products = [
  {
    id: 1,
    name: 'G213 Prodigy',
    description:
      'Durabilidad apta para los requisitos de los videojuegos. Los interruptores de tecla Mech-Dome táctiles son resistentes a salpicaduras. Iluminación RGB LIGHTSYNC personalizable. Reposamanos integrado y patas ajustables. Controles multimedia específicos.',
    stock: 5,
    image: '/img/g213.webp',
    price: 500,
    category: 'teclados',
  },
  {
    id: 2,
    name: 'K400 PLUS',
    description:
      'El K400 es un silencioso teclado fácil de usar, con un touchpad integrado y todas las teclas de acceso rápido favoritas de los usuarios de Windows® y Android™. Los controles multimedia simplifican la navegación en un televisor conectado a una PC.',
    stock: 3,
    image: '/img/k400.webp',
    price: 250,
    category: 'teclados',
  },
  {
    id: 3,
    name: 'G502 LIGHTSPEED',
    description:
      'El diseño emblemático del G502 se combina con la tecnología inalámbrica LIGHTSPEED de calidad profesional para una conectividad ultrarrápida y fiable. El sensor HERO 25K cuenta con un seguimiento submicrónico. Compatible con POWERPLAY para una carga continua tanto en reposo como en juego.',
    stock: 10,
    image: '/img/g502.webp',
    price: 350,
    category: 'mouse',
  },
  {
    id: 4,
    name: 'G502 X PLUS',
    description:
      'G502 X PLUS es la última adición a la legendaria gama G502. Reinventado con nuestros primerísimos interruptores híbridos LIGHTFORCE, tecnología inalámbrica LIGHTSPEED de nivel profesional, RGB LIGHTSYNC, sensor HERO 25K, etc.',
    stock: 10,
    image: '/img/g502x.webp',
    price: 600,
    category: 'mouse',
  },
  {
    id: 5,
    name: 'G325',
    description:
      'Sumérgete en el audio del juego. Estos auriculares inalámbricos para gaming ofrecen audio dinámico de 24 bits, un micrófono con formación de haces integrado y más de 24 horas de autonomía. Disfruta de una comodidad excepcional gracias a su diseño ajustable y estilizado.',
    stock: 6,
    image: '/img/g325.webp',
    price: 620,
    category: 'auriculares',
  },
  {
    id: 6,
    name: 'G522 LIGHTSPEED',
    description:
      'Juega como las leyendas con unos auriculares diseñados para gaming de alto voltaje en PC. El audio HQ envolvente, el mejor micrófono de la categoría gaming y el sofisticado RGB LIGHTSYNC lateral convierten cada partida, cada logro y cada avance en algo legendario.',
    stock: 6,
    image: '/img/g522.webp',
    price: 440,
    category: 'auriculares',
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
};
