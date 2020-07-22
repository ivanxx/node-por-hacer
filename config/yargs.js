const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado de una tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea por su descripcion', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea a borrar'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}