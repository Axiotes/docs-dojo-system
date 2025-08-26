[< Back](../)

# Listar todos os planos
Este endpoint permite que **qualquer usuário**, sem necessidade de autenticação, busque todos os planos cadastrados na academia. A listagem utiliza **paginação** e suporta **filtro por status**.

## Método HTTP

`GET`

## URL

`api/v1/plans`

## Autenticação

* **Não requer autenticação**

## Parâmetros da Requisição

### Query Params

| Campo  | Tipo    | Obrigatório | Validação                             | Exemplo |
| ------ | ------- | ----------- | ------------------------------------- | ------- |
| skip   | number  | Sim         | Inteiro ≥ 0                           | `0`     |
| limit  | number  | Sim         | Inteiro ≥ 1                           | `10`    |
| status | boolean | Não         | `true` (ativos) ou `false` (inativos) | `true`  |

**Exemplo de URL:**

```
api/v1/plans?skip=0&limit=10&status=true
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "data": [
    {
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
  ],
  "pagination": {
    "skip": 0,
    "limit": 10
  },
  "total": 1
}
```

## Respostas de Erro

**Status:** `400 Bad Request` — Falha de validação nos parâmetros

```json
{
  "statusCode": 400,
  "message": [
    "skip must not be less than 0",
    "limit must not be less than 1"
  ],
  "error": "Bad Request"
}
```

## Observações

- Máximo de **30 requisições por minuto** por IP (`@Throttle`)
- Suporta **paginação** através de `skip` e `limit`
- O filtro `status` é opcional e permite listar apenas planos ativos ou inativos
- Endpoint acessível por qualquer usuário, **não requer autenticação**