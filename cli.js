let colors = require('colors');

const { readFile, readFileValidation, readFilesStats } = require('./app.js')

const options = {
    path: {
        demand: true,
        alias: 'p',
        default: "README.md"
    },
}

const argv = require('yargs')
    .command('validate', 'Command to see the result of links validation contained in a Markdow file', options)
    .command('stats', 'Command to see the stats of all', options)
    .command('validateStats', 'Flag indicating if links are validated', options)
    .help()
    .argv

const command = argv._[0];

switch (command) {
    case 'validate':
        console.log(colors.cyan.bold('Validation of the links:'));
        readFileValidation(argv.path);
        break;
    case 'stats':
        console.log(colors.cyan.bold('Stats of the links:'));
        readFilesStats(argv.path)
        break;
    case 'validateStats':
        console.log(colors.cyan.bold('Validation and stats of the links:'));
        readFile(argv.path)
        return;
    default:
        console.log("Execute de --help command for more information")
};