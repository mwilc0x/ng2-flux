WELCOME=\033[37m ng2-flux \033[39m

all: hello webpack

hello:
	@echo "\n${WELCOME}\n"

webpack:
	@npm install && node_modules/babel/bin/babel-node server.js
