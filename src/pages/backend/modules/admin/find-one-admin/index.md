[< Back](../)

# Buscar administrador por ID

Este endpoint permite que **administradores autenticados** busquem um administrador específico pelo seu ID. Apenas usuários com token JWT e cargo `admin` podem utilizar esta funcionalidade.

## Método HTTP

`GET`

## URL

`api/v1/admin/:id`

## Autenticação

* **Tipo:** JWT via Cookie
* **Nível de permissão:** Apenas usuários com `role: admin`

## Parâmetros da Requisição

### Path

| Campo | Tipo   | Obrigatório | Validação               | Exemplo                      |
| ----- | ------ | ----------- | ----------------------- | ---------------------------- |
| id    | string | Sim         | Formato ObjectId válido | `"66b7f4f7cda0a1a6e5a92f32"` |

## Resposta de Sucesso

**Status:** `201 OK`

```json
{
  "data": {
    "_id": "66b7f4f7cda0a1a6e5a92f32",
    "name": "João da Silva",
    "email": "joao.silva@example.com",
    "status": true,
    "createdAt": "2025-08-14T14:23:00.000Z",
    "updatedAt": "2025-08-14T14:23:00.000Z"
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

**Status:** `404 Not Found` — Administrador não encontrado

```json
{
  "statusCode": 404,
  "message": "Admin not found"
}
```

## Observações

- Máximo de **10 requisições por minuto** por IP (`@Throttle`).