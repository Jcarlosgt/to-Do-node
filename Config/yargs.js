const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcon de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Comando para borrar una tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}