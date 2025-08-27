[< Back](../)

# Cadastrar novo professor
Este endpoint permite que **administradores autenticados** com `role` **admin** cadastrem um novo professor na academia. Cada professor contém informações pessoais, incluindo imagem de perfil obrigatória. A imagem enviada é processada, armazenada no banco de dados como **Buffer** e convertida para **Base64** na resposta.

## Método HTTP

`POST`

## URL

`api/v1/teachers`

## Autenticação

- **Tipo:** JWT via Cookie
- **Nível de permissão:** Apenas usuários com `role: admin`

## Parâmetros da Requisição

### Body (multipart/form-data)

| Campo       | Tipo   | Obrigatório | Validação                                                                    | Exemplo                                                             |
| ----------- | ------ | ----------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| name        | string | Sim         | Texto simples                                                                | `"Marcos Silva"`                                                    |
| cpf         | string | Sim         | Exatamente 11 dígitos, apenas números, único no sistema                      | `"12345678910"`                                                     |
| email       | string | Sim         | Formato válido de e-mail, único no sistema                                   | `"marcossilva@gmail.com"`                                           |
| hourPrice   | number | Sim         | Valor numérico maior que 0                                                   | `5.0`                                                               |
| description | string | Sim         | Texto simples                                                                | `"Faixa Preta 3º Dan. Com mais de 15 anos de experiência no judô."` |
| modalities  | array  | Sim         | IDs válidos (`ObjectId` do MongoDB), ao menos 1 modalidade ativa obrigatória | `["64f1b2a3c4d5e6f7890abc12"]`                                      |
| image       | file   | Sim         | Formatos permitidos: jpg, jpeg, png, gif. Tamanho máximo: **5MB**            | (arquivo .jpg, .jpeg, .png ou .gif)*                               |

**Exemplo de Body (form-data no Postman):**

```
name: Marcos Silva
cpf: 12345678910
email: marcossilva@gmail.com
hourPrice: 5.0
description: Faixa Preta 3º Dan. Com mais de 15 anos de experiência no judô.
modalities[]: 64f1b2a3c4d5e6f7890abc12
image: [arquivo .jpg, .jpeg, .png ou .gif]
```

## Resposta de Sucesso

**Status:** `201 Created`

```json
{
  "data": {
    "_id": "66b9d4e1a0f3e6c4f4a21c8e",
    "name": "Marcos Silva",
    "cpf": "12345678910",
    "email": "marcossilva@gmail.com",
    "hourPrice": 5,
    "description": "Faixa Preta 3º Dan. Com mais de 15 anos de experiência no judô.",
    "modalities": [
      {
        "name": "Judô",
        "description": "O Judô é uma arte marcial de origem japonesa",
        "status": true
      }
    ],
    "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABA...",
    "status": true,
    "createdAt": "2025-08-27T14:30:00.000Z",
    "updatedAt": "2025-08-27T14:30:00.000Z"
  }
}
```

## Respostas de Erro

**Status:** `400 Bad Request` — Falha de validação nos campos ou formato de imagem inválido

```json
{
  "statusCode": 400,
  "message": [
    "Only images (jpg, jpeg, png, gif) are allowed",
    "cpf must be exactly 11 digits",
    "email must be an email",
    "modalities should not be empty"
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

**Status:** `404 Not Found` — Alguma modalidade não encontrada no banco

```json
{
  "statusCode": 404,
  "message": "Modalities with id 64f1b2a3c4d5e6f7890abc12 not found"
}
```

**Status:** `409 Conflict` — CPF ou Email já cadastrado

```json
{
  "statusCode": 409,
  "message": "CPF 12345678910 already exists"
}
```

ou

```json
{
  "statusCode": 409,
  "message": "Email marcossilva@gmail.com already exists"
}
```

## Observações

- Máximo de **5 requisições por minuto** por IP (`@Throttle`).
- A imagem é convertida para **Buffer** e armazenada no banco de dados.
- Antes de ser enviada na resposta, é transformada em **Base64** no formato `data:image/jpeg;base64,...`.
- O `cpf` e `email` devem ser **únicos no sistema**.
- O professor deve possuir **ao menos uma modalidade ativa** vinculada.
- Requer autenticação via **token JWT** armazenado em **cookie HTTP-only**.