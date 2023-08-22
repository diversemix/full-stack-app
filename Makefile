.PHONY: all frontend backend build_frontend build_backend test network

all: network backend frontend 

network:
	@echo Setting up...
	-docker network create full-stack

frontend: network
	docker run -u node -d --rm \
		-w /home/node/app \
		-v ${PWD}/frontend:/home/node/app \
		-p 3000:3000 \
		--name frontend \
		--network full-stack \
		node:18-alpine npm start

backend : 
	docker run -u node -d --rm \
		-w /home/node/app \
		-v ${PWD}/backend:/home/node/app \
		-p 3001:3001 \
		--name backend \
		--network full-stack \
		node:18-alpine npm start

stop:
	docker stop frontend backend
