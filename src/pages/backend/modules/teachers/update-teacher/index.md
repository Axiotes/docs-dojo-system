[< Back](../)

# Atualizar professor
Este endpoint permite que **administradores autenticados** com `role` **admin** atualizem parcialmente ou totalmente os dados de um professor já cadastrado na academia. Todos os campos obrigatórios e opcionais podem ser modificados, incluindo imagem de perfil e modalidades associadas. O sistema realiza validações de CPF, e-mail, modalidades ativas e compatibilidade com turmas em andamento.

## Método HTTP
`PATCH`

## URL
`api/v1/teachers/:id`

## Autenticação
- **Tipo:** JWT via Cookie
- **Nível de permissão:** Apenas usuários com `role: admin`

## Parâmetros da Requisição

### URL Parameters

| Campo | Tipo   | Obrigatório | Validação            | Exemplo                      |
| ----- | ------ | ----------- | -------------------- | ---------------------------- |
| id    | string | Sim         | ID válido do MongoDB | `"66b9d4e1a0f3e6c4f4a21c8e"` |

### Body (multipart/form-data)

| Campo       | Tipo   | Obrigatório | Validação                                                                    | Exemplo                                                             |
| ----------- | ------ | ----------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| name        | string | Não         | Texto simples                                                                | `"Marcos Silva"`                                                    |
| cpf         | string | Não         | Exatamente 11 dígitos, válido, único no sistema                              | `"12345678910"`                                                     |
| email       | string | Não         | Formato válido, único no sistema                                             | `"marcossilva@gmail.com"`                                           |
| hourPrice   | number | Não         | Valor numérico maior que 0                                                   | `5.0`                                                               |
| description | string | Não         | Texto simples                                                                | `"Faixa Preta 3º Dan. Com mais de 15 anos de experiência no judô."` |
| modalities  | array  | Não         | IDs válidos (`ObjectId` do MongoDB), ao menos 1 modalidade ativa obrigatória | `["64f1b2a3c4d5e6f7890abc12"]`                                      |
| image       | file   | Não         | Formatos permitidos: jpg, jpeg, png, gif. Tamanho máximo: **5MB**            | (arquivo .jpg, .jpeg, .png ou .gif)\*                               |

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

**Status:** `200 OK`

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
    "updatedAt": "2025-09-15T18:00:00.000Z"
  }
}
```

## Respostas de Erro

**Status:** `400 Bad Request` — ID inválido ou violação de regras de modalidades vinculadas a turmas

```json
{
  "statusCode": 400,
  "message": [
    "Invalid id format",
    "Teacher Marcos Silva must have the 64f1b2a3c4d5e6f7890abc12 modality to match his class registration"
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

**Status:** `404 Not Found` — Professor ou modalidade não encontrada

```json
{
  "statusCode": 404,
  "message": "Teacher with id 66b9d4e1a0f3e6c4f4a21c8e not found"
}
```

ou

```json
{
  "statusCode": 404,
  "message": "Modalities with id 64f1b2a3c4d5e6f7890abc12 not found"
}
```

**Status:** `409 Conflict` — CPF ou E-mail já cadastrado

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
- Máximo de **10 requisições por minuto** por IP
- `cpf` e `email` devem ser **únicos no sistema**
- `image` é armazenada no banco de dados como **Buffer**. Na resposta, é transformada em **Base64**
- Não é permitido remover modalidades que estejam vinculadas a turmas ativas.
- O professor deve possuir **ao menos uma modalidade ativa** vinculada.
- Autenticação via **token JWT** armazenado em **cookie HTTP-only**.
- Validações de campos e integridade são aplicadas antes da atualização.