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

const getUsuarioById = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id);

  if (empleado) {
    callback(null, empleado);
    return;
  }
  callback(new Error("El empleado no existe!!"));
};

const getSueldoById = (id, callback) => {
  const sueldo = sueldos.find((s) => s.id === id);

  if (sueldo) {
    callback(null, sueldo);
    return;
  }
  callback(new Error("El empleado labura gratarola"));
};

const id = 1;

getUsuarioById(id, (error, empleado) => {
  if (error) {
    console.log("ERROR !!!!!!");
    console.log(error);
    return;
  }

  getSueldoById(id, (error, sueldo) => {
    if (error) {
      console.log("ERROR !!!!!!");
      console.log(error);
      return;
    }
    console.log(`el empleado: ${empleado.nombre} cobra ${sueldo.sueldo}`);
  });
});
