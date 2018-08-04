const fs = require('fs');

let listadoPorhacer = [];

const cargarDB = () => {
    try {
        listadoPorhacer = require('../db/data.json');
    } catch (error) {
        listadoPorhacer = [];
    }
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorhacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo grabar', err);
        }
    });
}
const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorhacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorhacer;
}


const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorhacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorhacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();

    let index = listadoPorhacer.findIndex(tarea => tarea.descripcion === descripcion);
    /*La funcion .splice(indice, elemento) nos ayuda a eliminar un elemento de un indice especifico de un
    arreglo  
    Tambien se puede utilizar la funcion .filter() la cual le debemos pasar una funcion en donde retornemos 
    la logica que le pasemos, en este caso la tarea.descripcion !== descripcion y va a retornar todo menos 
    la que sea diferente*/
    if (index >= 0) {
        listadoPorhacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}