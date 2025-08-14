[< Back](../)

# Cadastrar novo administrador
Este endpoint permite que **administradores autenticados** e com `role` **admin** cadastrem um novo administrador no sistema. Ele garante a integridade dos dados, a segurança das credenciais e evita a duplicidade de registros.

## Método HTTP
`POST`

## URL
`api/v1/admin`

## Autenticação
- **Tipo:** JWT via Cookie
- **Nível de permissão:** Apenas usuários com `role: admin`

## Parâmetros da Requisição

### Body (JSON)
| Campo     | Tipo   | Obrigatório | Validação | Exemplo |
|-----------|--------|-------------|-----------|---------|
| name      | string | Sim | Texto simples | `"João da Silva"` |
| email     | string | Sim | Formato de e-mail válido | `"email@gmail.com"` |
| password  | string | Sim | Mín. 8 caracteres, 1 maiúscula, 1 minúscula, 1 número | `"StrongPassword123"` |

**Exemplo de Body**
```json
{
  "name": "João da Silva",
  "email": "joao.silva@example.com",
  "password": "SenhaForte123"
}
````

## Resposta de Sucesso

**Status:** `201 Created`

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

**Status:** `400 Bad Request` — Falha de validação nos campos

```json
{
  "statusCode": 400,
  "message": [
    "email must be an email",
    "password must contain at least one lowercase letter",
    "password should contain at least 1 uppercase character",
    "password must be longer than or equal to 8 characters"
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

**Status:** `409 Conflict` — E-mail já cadastrado

```json
{
  "statusCode": 409,
  "message": "An admin with this email already exists"
}
```

## Limite de Requisições

- Máximo de **10 requisições por minuto** por IP (`@Throttle`).

## Observações

- A senha é criptografada antes de ser armazenada no banco de dados.
- O campo `email` deve ser único no sistema.
- Requer autenticação via token JWT armazenado em cookie HTTP-only.
