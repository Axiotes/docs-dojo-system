[< Back](../)

# Reativar administrador

Este endpoint permite que **administradores autenticados** reativem um administrador do sistema com base no seu ID. Um administrador reativado volta a poder realizar login e acessar endpoints protegidos.

## Método HTTP

`PATCH`

## URL

`api/v1/admin/reactivate/:id`

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
  "data": "Admin successfully reactivated"
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