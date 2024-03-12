
// This is the location where node-gyp will place the compiled code
const binding = require('../build/Release/waitpid.node');

module.exports = {
	waitpid: function waitpid(pid, options) {
		  //returns the exit code/signal
		  return binding.waitpid(pid, options);
		},
	WNOHANG: binding.WNOHANG,
	WUNTRACED: binding.WUNTRACED,
	WCONTINUED: binding.WCONTINUED
}
