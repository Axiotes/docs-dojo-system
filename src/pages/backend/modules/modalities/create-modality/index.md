[< Back](../)

# Cadastrar nova modalidade

Este endpoint permite que **administradores autenticados** com `role` **admin** cadastrem uma nova modalidade na academia. Cada modalidade contém nome, descrição e imagem obrigatórios, sendo essencial para vinculação a professores e planos. A imagem enviada é processada, armazenada no banco de dados como **Buffer** e convertida para **Base64** na resposta.

## Método HTTP

`POST`

## URL

`api/v1/modalities`

## Autenticação

- **Tipo:** JWT via Cookie
- **Nível de permissão:** Apenas usuários com `role: admin`

## Parâmetros da Requisição

### Body (multipart/form-data)

| Campo       | Tipo   | Obrigatório | Validação                                | Exemplo                                                                                   |
| ----------- | ------ | ----------- | ---------------------------------------- | ----------------------------------------------------------------------------------------- |
| name        | string | Sim         | Texto simples                            | `"Judô"`                                                                                  |
| description | string | Sim         | Texto simples                            | `"O Judô é uma arte marcial de origem japonesa, criada em 1882 pelo mestre Jigoro Kano."` |
| image       | file   | Sim         | Formatos permitidos: jpg, jpeg, png, gif | *(arquivo)*                                                                               |

**Exemplo de Body (form-data no Postman):**
```
name: Judô
description: O Judô é uma arte marcial de origem japonesa, criada em 1882 pelo mestre Jigoro Kano.
image: [arquivo .jpg, .jpeg, .png ou .gif]
```

## Resposta de Sucesso

**Status:** `201 Created`

```json
{
  "data": {
    "_id": "66b8a7c9a0b2e6c4f4a21b7d",
    "name": "Judô",
    "description": "O Judô é uma arte marcial de origem japonesa, criada em 1882 pelo mestre Jigoro Kano.",
    "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABA...",
    "status": true,
    "createdAt": "2025-08-20T14:30:00.000Z",
    "updatedAt": "2025-08-20T14:30:00.000Z"
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
    "name should not be empty",
    "description should not be empty"
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

**Status:** `409 Conflict` — Nome da modalidade já cadastrado

```json
{
  "statusCode": 409,
  "message": "A modality with this name already exists"
}
```

## Observações
- Máximo de **10 requisições por minuto** por IP (`@Throttle`).
- A imagem é convertida para **Buffer** e armazenada no banco de dados.
- Antes de ser enviada na resposta, é transformada em **Base64** no formato `data:image/jpeg;base64,...`.
- O campo `name` deve ser único no sistema.
- Requer autenticação via **token JWT** armazenado em **cookie HTTP-only**.