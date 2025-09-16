[< Back](../)

# Buscar turma por ID
Este endpoint permite que **qualquer usuário** consulte as informações de uma turma específica. Caso o usuário esteja autenticado com `role: admin`, são retornadas informações adicionais, como lista de alunos e dados pessoais do professor.

## Método HTTP
`GET`

## URL
`api/v1/classes/id/:id`

## Autenticação
- **Tipo:** JWT via Cookie (opcional)
- **Nível de permissão:**
  - Sem autenticação: informações limitadas da turma (sem lista de alunos e sem dados pessoais do professor).
  - Com autenticação `role: admin`: informações completas da turma.

## Parâmetros da Requisição
### Path Params

| Campo | Tipo   | Obrigatório | Validação                         | Exemplo                      |
| ----- | ------ | ----------- | --------------------------------- | ---------------------------- |
| id    | string | Sim         | ID válido (`ObjectId` do MongoDB) | `"66b9f7a4c2e6d4f3a5c21b9e"` |

## Resposta de Sucesso

**Status:** `200 OK`

Exemplo de resposta para **usuário comum** (sem token ou sem `role: admin`):

```json
{
  "data": {
    "_id": "66b9f7a4c2e6d4f3a5c21b9e",
    "modality": {
      "name": "Judô"
    },
    "teacher": {
      "name": "Marcos Silva"
    },
    "hour": {
      "start": "08:30",
      "end": "10:00"
    },
    "age": {
      "min": 10,
      "max": 13
    },
    "maxAthletes": 20,
    "weekDays": ["Segunda-feira", "Quarta-feira"],
    "status": true
  }
}
```

Exemplo de resposta para **administrador (`role: admin`)**:

```json
{
  "data": {
    "_id": "66b9f7a4c2e6d4f3a5c21b9e",
    "modality": {
      "name": "Judô"
    },
    "teacher": {
      "name": "Marcos Silva",
      "cpf": "12345678901",
      "email": "marcos@academia.com"
    },
    "hour": {
      "start": "08:30",
      "end": "10:00"
    },
    "age": {
      "min": 10,
      "max": 13
    },
    "maxAthletes": 20,
    "weekDays": ["Segunda-feira", "Quarta-feira"],
    "athletes": [
      {
        "name": "João Pedro",
        "cpf": "12345678910"
      }
    ],
    "status": true
  }
}
```

## Respostas de Erro

**Status:** `400 Bad Request` — ID inválido

```json
{
  "statusCode": 400,
  "message": "Invalid id format",
  "error": "Bad Request"
}
```

**Status:** `404 Not Found` — Turma não encontrada

```json
{
  "statusCode": 404,
  "message": "Class with id 66b9f7a4c2e6d4f3a5c21b9e not found",
  "error": "Not Found"
}
```

## Observações
- Limite de **30 requisições por minuto** por IP
- Usuários **não autenticados** ou com `role` diferente de `admin` não recebem lista de alunos nem dados pessoais do professor