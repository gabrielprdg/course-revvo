# Backend PHP + PostgreSQL + Docker

## Como rodar

1. Suba os containers:

```sh
docker-compose up --build
```

2. Acesse o container PHP e rode o script de criação das tabelas:

```sh
docker-compose exec db psql -U revvo -d revvo -f /var/www/html/init.sql
```

3. Os endpoints estarão disponíveis em http://localhost:8000/cursos/ e http://localhost:8000/slideshow/

## Variáveis de ambiente
- DB_HOST: db
- DB_NAME: revvo
- DB_USER: revvo
- DB_PASS: revvo123

## Estrutura das tabelas
Veja `init.sql` para detalhes. 