[< Back](../)

# Atualizar dados de um administrador

Este endpoint permite que um **administrador autenticado** atualize seus dados no sistema. Antes de qualquer alteração, é feita a confirmação do **e-mail** e **senha atuais**. Não é permitido atualizar para um e-mail já existente no sistema.

## Método HTTP

`PATCH`

## URL

`api/v1/admin`

## Autenticação

* **Tipo:** JWT via Cookie
* **Nível de permissão:** Apenas usuários com `role: admin`

## Parâmetros da Requisição

### Body (JSON)

| Campo       | Tipo   | Obrigatório | Validação                                                          | Exemplo                 |
| ----------- | ------ | ----------- | ------------------------------------------------------------------ | ----------------------- |
| email       | string | Sim         | E-mail atual do administrador                                      | `"admin@example.com"`   |
| password    | string | Sim         | Senha atual do administrador                                       | `"CurrentPass123"`      |
| newName     | string | Não         | Novo nome do administrador                                         | `"Novo Nome"`           |
| newEmail    | string | Não         | Novo e-mail (único no sistema)                                     | `"novoemail@gmail.com"` |
| newPassword | string | Não         | Nova senha (mín. 8 caracteres, 1 maiúscula, 1 minúscula, 1 número) | `"NovaSenha123"`        |

**Exemplo de Body**

```json
{
  "email": "admin@example.com",
  "password": "SenhaAntiga123",
  "newName": "João da Silva",
  "newEmail": "joao.silva@example.com",
  "newPassword": "SenhaNova123"
}
```

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
    "updatedAt": "2025-08-14T15:40:00.000Z"
  }
}
```

## Respostas de Erro

**Status:** `404 Not Found` — Email ou senha incorretos

```json
{
  "statusCode": 404,
  "message": "Invalid email or password",
  "error": "Not Found"
}
```

**Status:** `409 Conflict` — E-mail já cadastrado

```json
{
  "statusCode": 409,
  "message": "An admin with this email already exists",
  "error": "Conflict"
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

## Observações

- Máximo de **5 requisições por minuto** por IP (`@Throttle`).
- O campo `newEmail`, quando informado, deve ser único no sistema.
- Caso `newPassword` seja informado, ele será armazenado de forma criptografada.
- Apenas administradores com `status: true` podem realizar a atualização.