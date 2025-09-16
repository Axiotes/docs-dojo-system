[< Back](../)

# Guia de Execução do projeto
## Pré-requisitos
### Docker
Para execução do projeto, é necessário ter instalado o docker. Caso não tenha instalado, é possível instalar através do [Docker Docs](https://docs.docker.com/engine/install/)

Comando para verificar se o docker está instalado:
```bash
docker -v
```

## Processo de Execução
#### 1. Clonar o repositório na sua máquina
```bash
git clone git@github.com:Axiotes/dojo-system.git
```
#### 2. Entrar no diretório
```bash
cd dojo-system
```
#### 3. Config das variáveis de ambiente
Use `.env.example` como referência para criar seu arquivo de configuração `.env.development`  
```yaml
MONGODB_URI=mongodb://mongodb:27017/db_dojo_system # URI do container do mongo

JWT_SECRET=your-secret
JWT_EXPIRATION_TIME=1d
```
#### 4. Executar build
```bash
docker-compose build
```
#### 5. Executar aplicação
```bash
docker-compose up
```