const empleados = [
  {
    id: 1,
    nombre: "pepe",
  },
  {
    id: 2,
    nombre: "moni",
  },
  {
    id: 3,
    nombre: "koki",
  },
];

const sueldos = [
  {
    id: 1,
    sueldo: 500,
  },
  {
    id: 2,
    sueldo: 5000,
  },
];

const getUsuarioById = (id) => {
    
    return new Promise((resolve, reject) => {
    
        const empleado = empleados.find((e) => e.id === id);

        if (empleado) {
        resolve(empleado);
        return;
        }

        reject("El empleado no existe!!");
    
    });
};

const getSueldoById = (id) => {
    
    return new Promise((resolve, reject) => {
    
        const sueldo = sueldos.find((s) => s.id === id);

        if (sueldo) {
        resolve(sueldo);
        return;
        }

        reject(`El Id ${id} no tiene sueldo!!`);
    
    });
};

const id = 5;
let nombre;

getUsuarioById(id)
    .then( empleado => {
        nombre=empleado.nombre;
        return getSueldoById(id);
    }).then(sueldo => {
        console.log(`el emplado ${nombre} tiene un sueldo de ${sueldo.sueldo}`);
    })
    .catch((err) => { console.log(err); });
