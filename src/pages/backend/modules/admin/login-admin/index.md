[< Back](../)

# Login do administrador
Este endpoint permite que um **administrador** realize login no sistema informando seu e-mail e senha. Em caso de sucesso, será gerado um **token JWT** que será armazenado em um **cookie HTTP-only** e deverá ser utilizado para acessar endpoints protegidos.

## Método HTTP

`POST`

## URL

`api/v1/admin/login`

## Autenticação

* **Tipo:** Não requer autenticação para acesso.
* **Após o login:** Token JWT via Cookie para endpoints protegidos.

## Parâmetros da Requisição

### Body (JSON)

| Campo    | Tipo   | Obrigatório | Validação                | Exemplo               |
| -------- | ------ | ----------- | ------------------------ | --------------------- |
| email    | string | Sim         | Formato de e-mail válido | `"email@gmail.com"`   |
| password | string | Sim         | Texto simples            | `"StrongPassword123"` |

**Exemplo de Body**

```json
{
  "email": "joao.silva@example.com",
  "password": "StrongPassword123"
}
```

## Resposta de Sucesso

**Status:** `201 OK`

```json
{
  "data": "Login successful"
}
```

> **Observação:** O token JWT não é retornado no corpo da resposta, mas sim definido em um **cookie seguro** chamado `token` com validade de 7 dias (`maxAge: 604800000 ms`).

## Respostas de Erro

**Status:** `404 Not Found` — Email ou senha inválidos

```json
{
  "statusCode": 404,
  "message": "Invalid email or password",
  "error": "Not Found"
}
```

**Status:** `429 Too Many Requests` — Limite de requisições excedido

```json
{
  "statusCode": 429,
  "message": "Too many requests"
}
```

## Observações

- Máximo de **5 requisições por minuto** por IP (`@Throttle`).
- O token JWT é assinado contendo o `id` do administrador e sua `role: admin`.
- Apenas administradores com `status: true` podem realizar login.
- O cookie `token` é configurado com as seguintes propriedades:
  - `httpOnly: true` — protege contra acesso via JavaScript.
  - `secure: true` em produção.
  - `sameSite: lax`.
  - `maxAge: 7 dias`.