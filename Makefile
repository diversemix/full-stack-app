.PHONY: all frontend backend build_frontend build_backend test

all: backend frontend 

frontend: build_frontend
	@cd frontend && npm start &

backend : build_backend
	@cd backend &&  npm start &

build_frontend:
	@cd frontend && npm i && npm run build

build_backend:
	@cd backend && npm i 

