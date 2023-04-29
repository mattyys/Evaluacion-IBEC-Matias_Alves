// Evaluación de Algorítmos - Ibec
console.log('Iniciando Evaluación de Algorítmos');

//Ejercicio 1
const cartProducts = [
  {
    id: 1,
    name: 'pan',
    price: 20,
    description: 'frances',
    image: 'assets/image/jp1.png',
    category: 'general',
    sale: true,
    stock: 40,
  },
  {
    id: 2,
    name: 'bollo',
    price: 5.5,
    description: 'rellenos con dulce',
    image: 'assets/image/01.jpg',
    category: 'merienda',
    sale: true,
    stock: 50,
  },
  {
    id: 3,
    name: 'pan',
    price: 80,
    description: 'viena',
    image: 'assets/image/01.jpg',
    category: 'general',
    sale: false,
    stock: 30,
  },
  {
    id: 4,
    name: 'croissant',
    price: 30,
    description: 'croissant relleno de dulce de leche',
    image: 'assets/image/01.jpg',
    category: 'desayuno merienda',
    sale: true,
    stock: 20,
  },
  {
    id: 5,
    name: 'torta',
    price: 120.5,
    description: 'torta de fiambre',
    image: 'assets/image/01.jpg',
    category: 'almuerzo',
    sale: false,
    stock: 20,
  },
];

//Ejercicio 2

//funcion de ordenamiento de menor a mayor precio
const orderLowerPrice = (a, b) => a.price - b.price;
//funcion de ordenamiendo de mayor a menor precio
const orderHigherPrice = (a, b) => b.price - a.price;

//se crea variable para guardar las colecciones ordenadas e imprimirlas
let orderByPrice = cartProducts.sort(orderLowerPrice);

console.log('Orden de Menor a Mayor Precio');
console.log(orderByPrice);

console.log('Orden de Mayor a Menor Precio');
orderByPrice = cartProducts.sort(orderHigherPrice);
console.log(orderByPrice);
