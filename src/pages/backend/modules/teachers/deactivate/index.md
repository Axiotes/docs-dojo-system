[< Back](../)

# Desativar professor
Este endpoint permite que **administradores autenticados** com `role` **admin** desativem um professor na academia, tornando-o indisponível para vinculação em turmas e demais funcionalidades do sistema.

## Método HTTP

`PATCH`

## URL

`api/v1/teachers/deactivate/:id`

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
PATCH /api/v1/teachers/deactivate/66b9d4e1a0f3e6c4f4a21c8e
```

## Resposta de Sucesso
**Status:** `200 OK`

```json
{
  "data": "Teacher successfully deactivate"
}
```

## Respostas de Erro
**Status:** `400 Bad Request` — ID inválido ou professor vinculado a turmas ativas

```json
{
  "statusCode": 400,
  "message": [
    "Invalid id format",
    "Teacher is registered in active classes"
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

**Status:** `404 Not Found` — Professor não encontrado
```json
{
  "statusCode": 404,
  "message": "Teacher with id 66b9d4e1a0f3e6c4f4a21c8e not found"
}
```

## Observações
- Ao **desativar** um professor, ele **não** poderá mais ser vinculado a novas turmas
- Antes da desativação, é verificado se o professor não possui nenhuma turma ativa vinculada
- Máximo de **10 requisições por minuto** por administrador
- Autenticação via **token JWT** armazenado em **cookie HTTP-only**