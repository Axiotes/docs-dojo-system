[< Back](../)

# Reativar professor
Este endpoint permite que **administradores autenticados** com `role` **admin** reativem um professor previamente inativado, tornando-o disponível para vinculação em turmas e demais funcionalidades do sistema.

## Método HTTP
`PATCH`

## URL
`api/v1/teachers/reactivate/:id`

## Autenticação
- **Tipo:** JWT via Cookie
- **Nível de permissão:** Apenas usuários com `role: admin`

## Parâmetros da Requisição
### URL Parameters

| Campo | Tipo   | Obrigatório | Validação            | Exemplo                      |
| ----- | ------ | ----------- | -------------------- | ---------------------------- |
| id    | string | Sim         | ID válido do MongoDB | `"66b9d4e1a0f3e6c4f4a21c8e"` |

**Exemplo de URL:**
```
PATCH /api/v1/teachers/reactivate/66b9d4e1a0f3e6c4f4a21c8e
```

## Resposta de Sucesso
**Status:** `200 OK`

```json
{
  "data": "Teacher successfully reactivate"
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

**Status:** `404 Not Found` — Professor não encontrado
```json
{
  "statusCode": 404,
  "message": "Teacher with id 66b9d4e1a0f3e6c4f4a21c8e not found"
}
```

## Observações
- Máximo de **10 requisições por minuto** por administrador
- Reativação apenas altera o status do professor para **ativo**
- Autenticação via **token JWT** armazenado em **cookie HTTP-only**