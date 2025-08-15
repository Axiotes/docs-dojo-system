[< Back](../)

# Buscar administradores cadastrados

Este endpoint permite que **administradores autenticados** busquem todos os administradores cadastrados no sistema. A listagem utiliza paginação para otimizar o desempenho e evitar retorno excessivo de dados.

## Método HTTP

`GET`

## URL

`api/v1/admin`

## Autenticação

* **Tipo:** JWT via Cookie
* **Nível de permissão:** Apenas usuários com `role: admin`

## Parâmetros da Requisição

### Query Parameters

| Campo  | Tipo    | Obrigatório | Validação                                     | Exemplo |
| ------ | ------- | ----------- | --------------------------------------------- | ------- |
| skip   | number  | Sim         | Número de documentos a serem pulados, >= 0    | `0`     |
| limit  | number  | Sim         | Número de documentos a serem retornados, >= 1 | `10`    |
| status | boolean | Não         | Filtra administradores por status             | `true`  |

**Exemplo de URL**

```
GET api/v1/admin?skip=0&limit=10&status=true
```

## Resposta de Sucesso

**Status:** `201 OK`

```json
{
  "data": [
    {
      "_id": "66b7f4f7cda0a1a6e5a92f32",
      "name": "João da Silva",
      "email": "joao.silva@example.com",
      "status": true,
      "createdAt": "2025-08-14T14:23:00.000Z",
      "updatedAt": "2025-08-14T14:23:00.000Z"
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

## Observações

- Máximo de **10 requisições por minuto** por IP (`@Throttle`).