## Start
docker compose up -d --build

## View logs: 
docker compose logs -f backend 
docker compose logs -f frontend
docker compose logs -f db

## Stop everything
docker compose down