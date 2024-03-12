# node-waitpid2

Originally forked from AvianFlu/node-waitpid changing the behaviour to be more like nature intended.

Upgraded to work with node >= 14 with version 3.

The `waitpid` syscall is used to [wait for a process to change state](https://linux.die.net/man/2/waitpid).

For terminated child processes, waiting for them releases the resources associated with the child in the process table. If you don't do this, they could remain zombies for ever!

You should implement a blocking loop in your application in order to wait for a child process. You should do this asyncronously by passing `WNOHANG` as an option and using a timeout to call `waitpid` until the PID returned is `0` (no child process state changes left). Don't let the `waitpid` call block the whole thread.

Set this as a dependency and npm install will take care of the rest for you (requires support to compile C++ code in the installing environment).

## Release
Run npm version and push the updated tag to the remote and set it as a release in Github. Usage now is by referring to the release tag (i.e. we don't have a pre-built package to use).
