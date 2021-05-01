const personaje = {
  nombre: "Leonardo",
  real: "Gabriel",
  profesion: "Analista",
  getDescripcion() {
    return `${nombre} ${real} ${profesion}`;
  },
};

//const nombre = personaje.nombre;
//const real = personaje.real;
//const profesion = personaje.profesion;

//const {nombre, real, profesion, edad = 50} =personaje;
/*
const imprimirPersonaje = ({nombre,real,profesion,edad = 50}) => {
    console.log(nombre, real, profesion, edad);
}
imprimirPersonaje(personaje);
*/
const personajes = ["pepe", "moni", "paola", "dardo"];

//const p1 = personajes[0];
//const p2 = personajes[1];
//const p3 = personajes[2];

const [p1, p2, p3] = personajes;

console.log(p1);
