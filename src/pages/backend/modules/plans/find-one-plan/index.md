[< Back](../)

# Buscar plano por ID
Este endpoint permite que **qualquer usuário**, sem necessidade de autenticação, busque um plano específico através do seu ID.

## Método HTTP

`GET`

## URL

`api/v1/plans/:id`

## Autenticação

- **Não requer autenticação**

## Parâmetros da Requisição

### Path Params

| Campo | Tipo   | Obrigatório | Validação                       | Exemplo                      |
| ----- | ------ | ----------- | ------------------------------- | ---------------------------- |
| id    | string | Sim         | Deve ser um **ObjectId** válido | `"66b9c8d1a1b3e7f8c5d4a2b9"` |

## Resposta de Sucesso

**Status:** `200 OK`

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

**Status:** `400 Bad Request` — ID em formato inválido

```json
{
  "statusCode": 400,
  "message": "Invalid id format",
  "error": "Bad Request"
}
```

**Status:** `404 Not Found` — Plano não encontrado

```json
{
  "statusCode": 404,
  "message": "Plan with id 66b9c8d1a1b3e7f8c5d4a2b9 not found"
}
```

## Observações

- Máximo de **30 requisições por minuto** por IP (`@Throttle`)
- O campo `id` deve ser um **ObjectId válido** do MongoDB
- Endpoint acessível por qualquer usuário, **não requer autenticação**