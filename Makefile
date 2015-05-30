WELCOME=\033[37m ng2-flux \033[39m

all: hello webpack

hello:
	@echo "\n${WELCOME}\n"

webpack:
	@npm install && npm install -g babel && babel-node src/server/server.js
