#!make 
.PHONY: dev
dev: 
	sh ./config/scripts/publish_jeffreybarron_markdown.sh
	npm run dev

.PHONY: pull
pull: 
	sh ./config/scripts/publish_jeffreybarron_markdown.sh

.PHONY: build
build: 
	sh ./config/scripts/publish_jeffreybarron_markdown.sh
	npm install
	npm run build

.PHONY: start
start: 
	sh ./config/scripts/publish_jeffreybarron_markdown.sh
	npm install
	npm run build
	npm start

