const URL = 'http://localhost:5000/api';
const enlaces = [
  {
    nombre: 'Inicio',
    path: '/',
    button: false,
    claseIcono: 'fas fa-home',
  },
  {
    nombre: 'Nosotros',
    path: '/nosotros',
    button: false,
    claseIcono: 'fas fa-users',
  },
  {
    nombre: 'Platos',
    path: '/platos',
    button: false,
    claseIcono: 'fas fa-user-tie',
  },
];

const serviciosPrincipales = [
  {
    titulo: 'Comida nacional e internacional',
    icono: 'fa-solid fa-utensils',
    texto:
      'Nuestros platos se distinguen por tener el mejor sabor Venezolano y deleitarse con comidas internacionales.',
  },
  {
    titulo: 'Diferentes sucursales',
    icono: 'fa-solid fa-utensils',
    texto:
      'Hemos abierto las puertas en distintas partes del país para que nuestro sabor llegue a todos los rincones de Venezuela.',
  },
  {
    titulo: 'Más de 20 años en la cocina',
    icono: 'fa-solid fa-utensils',
    texto:
      'Nuestros chefs son expertos en crear obras de artes gastronómicas. Con más de 20 años de trayectoria sirviendo los mejores platos.',
  },
];

const descripcionesNosotrosPrincipal = [
  {
    descripcion:
      'Iniciamos en nuestra casa, distribuyendo comida rápida a los sectores cercanos y fuimos progresando hasta inaugurar nuestra primera sucursal.',
  },
  {
    descripcion:
      'Nuestros platos se distinguen por tener sabor a calidad y aroma a experiencias inolvidables.',
  },
];

const imagenesNosotros = [
  {
    src: require('@/assets/img/restaurante-1.jpg'),
    alt: 'Restaurante 1',
  },
  {
    src: require('@/assets/img/restaurante-2.jpg'),
    alt: 'Restaurante 2',
  },
  {
    src: require('@/assets/img/comida-1.jpg'),
    alt: 'Comida 1',
  },
  {
    src: require('@/assets/img/comida-2.jpg'),
    alt: 'Comida 2',
  },
];

const informacionNosotros = [
  {
    numero: 4,
    titulo: 'Años',
    subtitulo: 'Deleitando paladares',
  },
  {
    numero: 2,
    titulo: 'Chefs',
    subtitulo: 'Con 40 años de trayectoria',
  },
];

const razonesPrincipales = [
  {
    titulo: '24/7 Service',
    descripcion:
      'Servicio de comida rápida y atención al cliente en todo momento',
    claseIcono:
      'fa-solid fa-bell-concierge fa-3x  text-primary mb-4 icono-razon',
  },
  {
    titulo: 'Delivery',
    descripcion:
      'Delivery a domicilio en todo momento, para los sectores más cercanos',
    claseIcono: 'fa-solid fa-truck fa-3x text-primary mb-4 icono-razon',
  },
  {
    titulo: 'Cursos',
    descripcion: 'Cursos de preparación de comida para todos los gustos',
    claseIcono: 'fa-brands fa-leanpub fa-3x  text-primary mb-4 icono-razon',
  },
];

const enlacesOfertas = [
  {
    titulo: 'Carne a la plancha con ensalada y brócoli',
    active: true,
  },
  {
    titulo: 'Patatas fritas con ensalada, tomate & carne',
    active: false,
  },
  {
    titulo:
      'Pollo frito con champiñones, pan de ajo y ensalada con rodajas de queso',
    active: false,
  },
];
const ofertasDisponibles = [
  {
    titulo: 'Carne a la plancha con ensalada y brócoli',
    subtitulo:
      'El mejor plato para personas que quieren cuidar su salud y comer bien',
    descripcion:
      'Plato ideal para una persona, con elección de salsas para la carne y porciones de ensalada generosa. Esta oferta incluye lo que indica la descripción y una bebida gratis por $20.',
    active: true,
    src: require('@/assets/img/oferta-1.jpg'),
  },
  {
    titulo: 'Patatas fritas con ensalada, tomate & carne',
    subtitulo: 'Merienda ideal para comer bien, rápido y sobre todo económico',
    descripcion:
      'Esta oferta incluye 50g de patatas rustica, 22g de ensalida con tomate & 300g de carne al horno, con un costo de $15.',
    active: false,
    src: require('@/assets/img/oferta-2.jpg'),
  },
  {
    titulo:
      'Pollo frito con champiñones, pan de ajo y ensalada con rodajas de queso',
    subtitulo: 'El mejor plata para comer junto a tu familia',
    descripcion:
      'Esta oferta está pensada para la familia, tiene porciones de 1kg de pollo, 40g de ensalada y 25g de pan. Adicional a una bebida gratis por $30.',
    active: false,
    src: require('@/assets/img/oferta-3.jpg'),
  },
];

const enlacesFavoritos = [
  {
    plato: 'Desayuno',
    claseIcono: 'fa fa-coffee fa-2x icono-menu ',
    active: true,
    tipo: 'Desayuno',
  },
  {
    plato: 'Comida rapida',
    claseIcono: 'fa fa-hamburger fa-2x icono-menu ',
    active: false,
    tipo: 'Comida rapida',
  },
  {
    plato: 'Plato fuerte',
    active: false,
    claseIcono: 'fa fa-utensils fa-2x icono-menu',
    tipo: 'Plato fuerte',
  },
];
const favoritos = [
  {
    plato: 'Sandwich de huevo con ensalada y salchicha de corazón',
    descripcion: 'Un plato excelente para comenzar el dia',
    precio: 20,
    src: require('@/assets/img/desayuno-1.jpg'),
    active: true,
    tipo: 'Desayuno',
  },
  {
    plato: 'Huevos fritos con ensalada y sandwich de queso',
    descripcion: 'Adicional incluye salsa de tomate',
    precio: 15,
    src: require('@/assets/img/desayuno-2.webp'),
    active: true,
    tipo: 'Desayuno',
  },
  {
    plato: 'Hamburguesa de carne con papas fritas',
    descripcion: 'Hamburguesa de carne, queso, ensalada y pan de ajonjoli.',
    precio: 5,
    src: require('@/assets/img/comida-rapida-1.webp'),
    active: false,
    tipo: 'Comida rapida',
  },
  {
    plato: 'Perros de maiz con salsa de tomate y queso',
    descripcion: 'Incluye salchicas con mostaza.',
    precio: 3,
    src: require('@/assets/img/comida-rapida-2.jpg'),
    active: false,
    tipo: 'Comida rapida',
  },
  {
    plato: 'Arroz con vegetales, huevos, frutos secos y bebida',
    descripcion:
      'Almuerzo saludable y deliciosa, idea para personas que estan en diera y desean alimentarse bien.',
    precio: 20,
    src: require('@/assets/img/almuerzo-1.jpg'),
    active: false,
    tipo: 'Plato fuerte',
  },
  {
    plato: 'Almuerzo ejecuto con sabor brasileño',
    descripcion: 'Arroz con Frijol, papas fritas, carne, ensalada y bebida.',
    precio: 15,
    src: require('@/assets/img/almuerzo-2.jpg'),
    active: false,
    tipo: 'Plato fuerte',
  },
];
const clientesOpiniones = [
  {
    claseIcono: 'fa fa-quote-left fa-2x text-primary mb-3',
    testimonio:
      'La mejor comida que he probado en mi vida, una experiencia de sabores.',
    nombre: 'Luis Valecillos',
    profesion: 'Chef',
    alt: 'Cliente 1',
    imagen: require('@/assets/img/cliente-1.jpg'),
  },
  {
    claseIcono: 'fa fa-quote-left fa-2x text-primary mb-3',
    testimonio:
      'Me encanta este lugar, me encantan sus platillos. Los he probado casi todos.',
    nombre: 'Luis Alejandro',
    profesion: 'Ingeniero',
    alt: 'Cliente 2',
    imagen: require('@/assets/img/cliente.jpg'),
  },
];

const nosotrosImagenes = [
  {
    src: require('@/assets/img/sucursal-1.jpg'),
    alt: 'Sucursal 1',
  },
  {
    src: require('@/assets/img/sucursal-2.jpg'),
    alt: 'Sucursal 2',
  },
  { src: require('@/assets/img/sucursal-3.jpg'), alt: 'Sucursal 3' },
  { src: require('@/assets/img/sucursal-4.jpg'), alt: 'Sucursal 4' },
];
const nosotrosDescripciones = [
  {
    descripcion:
      'En Freshly Foodie encuentras una gran variedad de platos gastronómicos para que deleites tu paladar. Contamos con platos de cocina internacional que volarán tu mente.',
  },
  {
    descripcion:
      'Para nosotros es de suma importancia no solo ser un restaurante sino un lugar donde puedas despejar tu mente y disfrutar la mejor comida!',
  },
];
const nosotrosServicios = [
  {
    titulo: 'Los mejores cafés expresos',
    descripcion:
      'Inicia el día con los mejores cafés, capuchinos y expresos personalizables a tu gusto.',
    claseIcono: 'fa-solid fa-mug-hot fa-2x text-primary mb-3 icono-razon',
  },
  {
    titulo: 'Almuerzos',
    descripcion: 'Gran variedad en platos y acompañantes para tu mediodía.',
    claseIcono: 'fa fa-utensils fa-2x text-primary mb-3 icono-razon',
  },
  {
    titulo: 'No tenemos competencia',
    descripcion: 'Nuestro restaurante tiene un puntaje 5/5 en críticas.',
    claseIcono: 'fa-solid fa-star fa-2x text-primary mb-3 icono-razon',
  },
  {
    titulo: 'Cake birthday',
    descripcion:
      'Ofrecemos servicios de pastelería para tus ocasiones especiales.',
    claseIcono: 'fa-solid fa-cake-candles fa-2x text-primary mb-3 icono-razon',
  },
  {
    titulo: 'Ahorra dinero',
    descripcion:
      'Nuestros precios son insuperables, además contamos con distintos tipos de pagos.',
    claseIcono: 'fa-solid fa-dollar-sign fa-2x text-primary mb-3 icono-razon',
  },
  {
    titulo: 'Reserva tu cita',
    descripcion: 'Puedes agendar el día, hora y mesa que deseas comer en tal.',
    claseIcono:
      'fa-solid fa-calendar-check fa-2x text-primary mb-3 icono-razon',
  },
];

const cocineros = [
  {
    nombre: 'Maria Perez',
    especialista: 'Especialista en pollo & carne',
    src: require('@/assets/img/chef-1.jpg'),
    alt: 'Cocinero 1',
  },
  {
    nombre: 'Jorge Rodriguez',
    especialista: 'Gerente principal & veterano en vinos',
    src: require('@/assets/img/chef-2.jpg'),
    alt: 'Cocinero 2',
  },
];

const menuFreshly = [
  {
    plato: 'Sandwich de huevo con ensalada y salchicha de corazón',
    descripcion: 'Un plato excelente para comenzar el dia',
    precio: 20,
    src: require('@/assets/img/desayuno-1.jpg'),
    active: true,
    tipo: 'Desayuno',
  },
  {
    plato: 'Huevos fritos con ensalada y sandwich de queso',
    descripcion: 'Adicional incluye salsa de tomate',
    precio: 15,
    src: require('@/assets/img/desayuno-2.webp'),
    active: true,
    tipo: 'Desayuno',
  },
  {
    plato: 'Desayuno americano',
    descripcion:
      'Waffles con jamon, queso cocidos, tomate, lechuga y champiñones.',
    precio: 17,
    src: require('@/assets/img/desayuno-3.jpg'),
    active: true,
    tipo: 'Desayuno',
  },
  {
    plato: 'Desayuno vegetariano',
    descripcion: 'Con roll turquia, ensalada, y pollo a la plancha.',
    precio: 14,
    src: require('@/assets/img/desayuno-4.png'),
    active: true,
    tipo: 'Desayuno',
  },
  {
    plato: 'Hamburguesa de carne con papas fritas',
    descripcion: 'Hamburguesa de carne, queso, ensalada y pan de ajonjoli.',
    precio: 5,
    src: require('@/assets/img/comida-rapida-1.webp'),
    active: false,
    tipo: 'Comida rapida',
  },
  {
    plato: 'Perros de maiz con salsa de tomate y queso',
    descripcion: 'Incluye salchicas con mostaza.',
    precio: 3,
    src: require('@/assets/img/comida-rapida-2.jpg'),
    active: false,
    tipo: 'Comida rapida',
  },
  {
    plato: 'Pizza de queso con mozzarella & salsa de tomate',
    descripcion:
      'Incluye 400g de harina de trigo, 100g de queso mozzarella y 50g de jamón cocido salchicha ó peperoni.',
    precio: 18,
    src: require('@/assets/img/comida-rapida-3.jpg'),
    active: false,
    tipo: 'Comida rapida',
  },
  {
    plato: 'Shawarma de pollo, huevos, con ensalada y salchichas',
    descripcion:
      'Incluye 200g de muslos de pollo, pimenton dulce, canela molida, yogur natural y zumo de limóm.',
    precio: 12,
    src: require('@/assets/img/comida-rapida-4.jpg'),
    active: false,
    tipo: 'Comida rapida',
  },
  {
    plato: 'Arroz con vegetales, huevos, frutos secos y bebida',
    descripcion:
      'Almuerzo saludable y deliciosa, idea para personas que estan en diera y desean alimentarse bien.',
    precio: 20,
    src: require('@/assets/img/almuerzo-1.jpg'),
    active: false,
    tipo: 'Plato fuerte',
  },
  {
    plato: 'Almuerzo ejecutivo con sabor brasileño',
    descripcion: 'Arroz con Frijol, papas fritas, carne, ensalada y bebida.',
    precio: 15,
    src: require('@/assets/img/almuerzo-2.jpg'),
    active: false,
    tipo: 'Plato fuerte',
  },
  {
    plato: 'Almuerzo familiar con sabor colombiano',
    descripcion:
      'Arroz con Frijoles chinos, papas rusticas, carne encebollada y huevos cocidos.',
    precio: 10,
    src: require('@/assets/img/almuerzo-3.jpg'),
    active: false,
    tipo: 'Plato fuerte',
  },
  {
    plato: 'Almuerzo para llevar con sabor italiano',
    descripcion:
      'Pasta con salchica, crema agria huevos en tortilla y salsa de tomate.',
    precio: 18,
    src: require('@/assets/img/almuerzo-4.jpg'),
    active: false,
    tipo: 'Plato fuerte',
  },
];

const platosOpiniones = [
  {
    claseIcono: 'fa fa-quote-left fa-2x text-primary mb-3',
    testimonio:
      'Atención personalizada, servicio de calidad y atención muy profesional. Recomiendo.',
    nombre: 'Ana Maria',
    profesion: 'Periodista',
    alt: 'Cliente 1',
    imagen: require('@/assets/img/cliente-6.jpg'),
  },
  {
    claseIcono: 'fa fa-quote-left fa-2x text-primary mb-3',
    testimonio:
      'Agradable servicio, muy amable y comida de primera. Es una maravillosa opción.',
    nombre: 'Hector Garcia',
    profesion: 'Administrador',
    alt: 'Cliente 2',
    imagen: require('@/assets/img/cliente-4.jpg'),
  },
  {
    claseIcono: 'fa fa-quote-left fa-2x text-primary mb-3',
    testimonio:
      'Me gusto mucha la idea de reservar una mesa en la que poder comer con una persona familiar.',
    nombre: 'Manuel  Perez',
    profesion: 'Abogado',
    alt: 'Cliente 2',
    imagen: require('@/assets/img/cliente-3.webp'),
  },
  {
    claseIcono: 'fa fa-quote-left fa-2x text-primary mb-3',
    testimonio:
      'Recomendados por mis amigos, excelente servicio y buena comida.',
    nombre: 'Jimena Lopez',
    profesion: 'Maestra de cocina',
    alt: 'Cliente 2',
    imagen: require('@/assets/img/cliente-5.webp'),
  },
];
export {
  URL,
  enlaces,
  serviciosPrincipales,
  descripcionesNosotrosPrincipal,
  imagenesNosotros,
  informacionNosotros,
  razonesPrincipales,
  enlacesOfertas,
  ofertasDisponibles,
  enlacesFavoritos,
  favoritos,
  clientesOpiniones,
  nosotrosImagenes,
  nosotrosDescripciones,
  nosotrosServicios,
  cocineros,
  menuFreshly,
  platosOpiniones,
};
