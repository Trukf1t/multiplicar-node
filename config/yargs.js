const opts = {
    base: {
        deman: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }

}

const argv = require('yargs').command('listar', 'Imprime en consola la tabla de multiplicar',
        opts
    ).command('crear', 'Creae un archivo con la tabla de multiplicar',
        opts
    )
    .help()
    .argv;

module.exports = {
    argv
}