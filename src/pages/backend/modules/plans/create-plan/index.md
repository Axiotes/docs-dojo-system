[< Back](../)

# Cadastrar novo plano

Este endpoint permite que **administradores autenticados** com `role` **admin** cadastrem um novo plano na academia. O plano deve estar vinculado a uma modalidade ativa para ser criado com sucesso.

## Método HTTP

`POST`

## URL

`api/v1/plans`

## Autenticação

- **Tipo:** JWT via Cookie
- **Nível de permissão:** Apenas usuários com `role: admin`

## Parâmetros da Requisição

### Body (application/json)

| Campo          | Tipo   | Obrigatório | Validação                                            | Exemplo                      |
| -------------- | ------ | ----------- | ---------------------------------------------------- | ---------------------------- |
| period         | string | Sim         | Enum: `"monthly"`, `"annually"`                      | `"monthly"`                  |
| periodQuantity | number | Sim         | Número inteiro maior que 0                           | `3`                          |
| value          | number | Sim         | Número decimal maior que 0                           | `150.00`                     |
| modality       | string | Sim         | Deve ser um **ObjectId** de uma modalidade ativa     | `"64f1b2a3c4d5e6f7890abc12"` |
| status         | bool   | Não         | `true` (ativo) ou `false` (inativo). Default: `true` | `true`                       |

**Exemplo de Body (JSON):**

```json
{
  "period": "monthly",
  "periodQuantity": 3,
  "value": 150.00,
  "modality": "64f1b2a3c4d5e6f7890abc12"
}
```

## Resposta de Sucesso

**Status:** `201 Created`

```json
{
  "data": {
    "_id": "66b9c8d1a1b3e7f8c5d4a2b9",
    "period": "monthly",
    "periodQuantity": 3,
    "value": 150.00,
    "modality": {
      "_id": "64f1b2a3c4d5e6f7890abc12",
      "name": "Judô",
      "description": "O Judô é uma arte marcial de origem japonesa, criada em 1882 pelo mestre Jigoro Kano.",
      "status": true
    },
    "status": true,
    "createdAt": "2025-08-25T14:30:00.000Z",
    "updatedAt": "2025-08-25T14:30:00.000Z"
  }
}
```

## Respostas de Erro

**Status:** `400 Bad Request` — Falha de validação nos campos ou modalidade inativa

```json
{
  "statusCode": 400,
  "message": [
    "period must be one of the following values: monthly, annually",
    "periodQuantity must be a number greater than 0",
    "Modality with id 64f1b2a3c4d5e6f7890abc12 is disabled"
  ],
  "error": "Bad Request"
}
```

**Status:** `401 Unauthorized` — Token JWT ausente ou inválido

```json
{
  "statusCode": 401,
  "message": "Unauthorized"
}
```

**Status:** `403 Forbidden` — Usuário não tem permissão (role diferente de `admin`)

```json
{
  "statusCode": 403,
  "message": "Forbidden resource"
}
```

**Status:** `404 Not Found` — Modalidade não encontrada

```json
{
  "statusCode": 404,
  "message": "Modality with id 64f1b2a3c4d5e6f7890abc12 not found"
}
```

## Observações

- Máximo de **10 requisições por minuto** por IP (`@Throttle`)
- O campo `modality` deve obrigatoriamente referenciar uma modalidade **existente e ativa**
- Requer autenticação via **token JWT** armazenado em **cookie HTTP-only**