#!make 
.PHONY: pull
pull: 
	sh ./config/scripts/publish_jeffreybarron_markdown.sh

.PHONY: start
start: 
	sh ./config/scripts/publish_jeffreybarron_markdown.sh
	npm run build
	npm start

.PHONY: dev
dev: 
	sh ./config/scripts/publish_jeffreybarron_markdown.sh
	npm run dev
