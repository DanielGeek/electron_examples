const remote = require('electron').remote
const main = remote.require('./main.js')


$(function(){

	const os = require('os')
	const prettyBytes = require('pretty-bytes')

	$('.stats').append('Número de procesadores: <span>' + os.cpus().length + '</span>')
	$('.stats').append('Memoria: <span>' + prettyBytes(os.freemem()) + '</span>')
});