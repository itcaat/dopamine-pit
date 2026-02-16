-include .env
export
SUPABASE_URL := $(VITE_SUPABASE_URL)
PROJECT_REF := $(shell echo $(VITE_SUPABASE_URL) | sed 's|https://\(.*\)\.supabase\.co|\1|')

.PHONY: link deploy-functions deploy-tournament deploy-daily test-tournament test-daily

# Link Supabase project (one time)
link:
	supabase link --project-ref $(PROJECT_REF)

# Deploy all edge functions
deploy-functions: deploy-tournament deploy-daily

deploy-tournament:
	supabase functions deploy tournament-announce

deploy-daily:
	supabase functions deploy daily-standings

# Test functions manually (requires SERVICE_ROLE_KEY env var)
test-tournament:
	curl -s -X POST $(SUPABASE_URL)/functions/v1/tournament-announce \
		-H "Authorization: Bearer $(SERVICE_ROLE_KEY)" \
		-H "Content-Type: application/json" | jq .

test-daily:
	curl -s -X POST $(SUPABASE_URL)/functions/v1/daily-standings \
		-H "Authorization: Bearer $(SERVICE_ROLE_KEY)" \
		-H "Content-Type: application/json" | jq .
