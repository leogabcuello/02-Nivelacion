//setTimeout(() => {
//    console.log('Hola mundo');
//}, 2000);

/*const saludar = () => { 
    console.log('Hola Mundo');
}

setTimeout(saludar,2000) ; */

const getUsuarioById = (id, callback) => {

    const user = {
        id,
        nombre: 'Leonardo'
    }

    setTimeout(() => {
    
        callback(user);
    
    }, 1000);
    
}

//const imprimirUsuario = (usuario) => {
//    console.log(usuario.nombre);
//} 

//getUsuarioById(10, (usuario) => {
//    console.log(usuario.nombre.toUpperCase());
//});

getUsuarioById(10, ({nombre, id})=>{
    console.log(`Nombre : ${nombre} - Id ${id}`);
})
