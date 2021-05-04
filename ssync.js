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
  
const getUsuarioById = async (id) => {
    
    try {
        
        const empleado = empleados.find((e) => e.id === id);

        if (empleado) {
            return(empleado);
        }
        throw new Error(`el empleado con id ${id} no existe`);
    }catch (error){
        throw error;
    }
};

const getSueldoById = async (id) => {
    
  try {
      
    const sueldo = sueldos.find((s) => s.id === id);

      if (sueldo) {
          return(sueldo);
      }
      throw new Error(`el sueldo con id ${id} no existe`);
  }catch (error){
      throw error;  
  }
};

const id = 1;

const getDatosCompletos = async (id)=>{

    try {
      
      const empleado = await getUsuarioById(id);
      const sueldo = await getSueldoById(id);
//      return `el empleado ${empleado.nombre} tiene un sueldo de ${sueldo.sueldo} `;
      return {
        id,
        nombre: empleado.nombre,
        sueldo: sueldo.sueldo
      }
    } catch (error){
      throw error;
    } 
}

getDatosCompletos(id)
    .then(data => {console.log(`el empleado ${data.nombre} tiene un sueldo de ${data.sueldo} `);})
    .catch(e =>{console.log(e.message);});