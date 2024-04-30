local:
	make migrate
	make deploy

remote:
	make migrate-remote
	make deploy-remote

deploy:
	wrangler dev

deploy-remote:
	wrangler deploy

migrate:
	wrangler d1 execute sample-db --local --file="./migration/users.sql"

migrate-remote:
	wrangler d1 execute sample-db --remote --file="./migration/users.sql"

query:
	wrangler d1 execute sample-db --local --command "SELECT * FROM users"

query-remote:
	wrangler d1 execute sample-db --remote --command "SELECT * FROM users"
