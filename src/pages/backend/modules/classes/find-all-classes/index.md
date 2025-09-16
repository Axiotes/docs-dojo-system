[< Back](../)

# Listar turmas com paginação e filtros
Este endpoint permite que **qualquer usuário** consulte a lista de turmas disponíveis, com suporte a paginação e filtros por status, modalidade, idade, horário e dias da semana.
Caso o usuário esteja autenticado com `role: admin`, são retornadas informações adicionais, como lista de alunos e dados pessoais do professor.

## Método HTTP
`GET`

## URL
`api/v1/classes`

## Autenticação
- **Tipo:** JWT via Cookie (opcional)
- **Nível de permissão:**
  - Sem autenticação: informações limitadas das turmas.
  - Com autenticação `role: admin`: informações completas.

## Parâmetros da Requisição

### Query Params

| Campo     | Tipo    | Obrigatório | Validação                                                                                      | Exemplo                        |
| --------- | ------- | ----------- | ---------------------------------------------------------------------------------------------- | ------------------------------ |
| skip      | number  | Sim         | Inteiro ≥ 0                                                                                    | `0`                            |
| limit     | number  | Sim         | Inteiro ≥ 1                                                                                    | `10`                           |
| status    | boolean | Não         | `true` ou `false`                                                                              | `true`                         |
| modality  | string  | Não         | ID válido (`ObjectId` do MongoDB)                                                              | `"64f1b2a3c4d5e6f7890abc12"`   |
| minAge    | number  | Não         | Inteiro ≥ 1                                                                                    | `8`                            |
| maxAge    | number  | Não         | Inteiro ≥ 1                                                                                    | `13`                           |
| startHour | string  | Não         | Formato `HH:MM` (24h)                                                                          | `"17:00"`                      |
| endHour   | string  | Não         | Formato `HH:MM` (24h)                                                                          | `"18:00"`                      |
| weekDays  | array   | Não         | Lista de dias da semana (`Segunda-feira` ... `Domingo`). Pode ser passado separado por vírgula | `"Segunda-feira,Quarta-feira"` |

## Resposta de Sucesso

**Status:** `200 OK`

Exemplo de resposta para **usuário comum**:

```json
{
  "data": [
    {
      "_id": "66b9f7a4c2e6d4f3a5c21b9e",
      "modality": { "name": "Judô" },
      "teacher": { "name": "Marcos Silva" },
      "hour": { "start": "08:30", "end": "10:00" },
      "age": { "min": 10, "max": 13 },
      "maxAthletes": 20,
      "weekDays": ["Segunda-feira", "Quarta-feira"],
      "status": true
    }
  ],
  "pagination": {
    "skip": 0,
    "limit": 10
  },
  "total": 1
}
```

Exemplo de resposta para **administrador (`role: admin`)**:

```json
{
  "data": [
    {
      "_id": "66b9f7a4c2e6d4f3a5c21b9e",
      "modality": { "name": "Judô" },
      "teacher": {
        "name": "Marcos Silva",
        "cpf": "12345678901",
        "email": "marcos@academia.com"
      },
      "hour": { "start": "08:30", "end": "10:00" },
      "age": { "min": 10, "max": 13 },
      "maxAthletes": 20,
      "weekDays": ["Segunda-feira", "Quarta-feira"],
      "athletes": [{ "name": "João Pedro", "cpf": "123456789010" }],
      "status": true
    }
  ],
  "pagination": {
    "skip": 0,
    "limit": 10
  },
  "total": 1
}
```

## Respostas de Erro

**Status:** `400 Bad Request` — Parâmetros inválidos

```json
{
  "statusCode": 400,
  "message": [
    "startHour must be in HH:MM format",
    "endHour must be in HH:MM format",
    "\"startHour\" and \"endHour\" parameters must be entered together",
    "\"minAge\" and \"maxAge\" parameters must be entered together",
  ],
  "error": "Bad Request"
}
```

## Observações
- Limite de **30 requisições por minuto** por IP
- Caso não seja enviado token JWT ou seja de usuário não-admin, não retorna lista de alunos nem dados pessoais do professor
- Suporta **paginação e filtros combinados**