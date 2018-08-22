const opt = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    alias: 'l',
    default: 10
  }
}

const argv = require('yargs')
              .command('crear', 'Crear un elemento por hacer',{
                descripcion: {
                  demand: true,
                  alias: 'd',
                  desc: 'Descripción de una tarea por hacer'
                }
              })
              .command('actualizar', 'Actualiza un estado completado de una tarea', {
                descripcion: {
                  demand: true,
                  alias: 'd',
                  desc: 'Descripción de una tarea por hacer'
                },
                completado: {
                  alias: 'c',
                  default: true,
                  desc: 'Marca como completado o pendiente la tarea'
                }
              })
              .command('listar', 'Lista todas las tareas', {})
              .command('borrar', 'Borra una tarea', {
                descripcion: {
                  demand: true,
                  alias: 'd'
                }
              })
              .help()
              .argv;

module.exports = {
  argv
}
