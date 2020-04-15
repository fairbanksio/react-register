# React-Register v2

## Develop with Docker-Compose

Dependencies: Docker Compose, Docker

1. Clone Repo, change into it, and checkout v2 branch
```sh
git clone https://github.com/Fairbanks-io/react-register
cd react-register
git checkout v2
```

2. Use Docker Compose to stand up environment in daemon mode
```sh
docker-compose up -d
```

3. Follow logs
```sh
docker-compose logs -f
```

4. Edit files in client/src/

5. Cleanup/remove dev environment
```sh
docker-compose down --rmi all --remove-orphans -v
```