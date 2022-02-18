.PHONY: all frontend backend build_frontend build_backend

all: backend frontend 

frontend: build_frontend
	cd frontend && xterm  -geometry 96x24-0+0 -e npm start &

backend : build_backend
	cd backend && xterm  -geometry 96x24-0-0 -e npm start &

build_frontend:
	cd frontend && npm i && npm run build

build_backend:
	cd backend && npm i 
