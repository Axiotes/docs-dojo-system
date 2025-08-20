[< Back](../)

# Inativar administrador

Este endpoint permite que **administradores autenticados** inativem um administrador do sistema com base no seu ID. Um administrador inativado não poderá realizar login nem acessar endpoints protegidos.

## Método HTTP

`PATCH`

## URL

`api/v1/admin/inactive/:id`

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
  "data": "Admin successfully deactivated"
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

## Limite de Requisições

- Máximo de **10 requisições por minuto** por IP (`@Throttle`).