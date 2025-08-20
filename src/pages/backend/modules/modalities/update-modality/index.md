[< Back](../)

# Editar modalidade
Este endpoint permite que **administradores autenticados** com `role` **admin** editem os dados de uma modalidade já cadastrada. A edição pode ser **parcial ou total**, permitindo atualizar apenas nome, descrição ou imagem. A imagem enviada é processada, armazenada no banco de dados como **Buffer** e convertida para **Base64** na resposta.

## Método HTTP

`PATCH`

## URL

`api/v1/modalities/:id`

## Autenticação

- **Tipo:** JWT via Cookie
- **Nível de permissão:** Apenas usuários com `role: admin`

## Parâmetros da Requisição

### Path

| Campo | Tipo   | Obrigatório | Descrição                           | Exemplo                      |
| ----- | ------ | ----------- | ----------------------------------- | ---------------------------- |
| id    | string | Sim         | ID da modalidade (MongoDB ObjectId) | `"66b8c3e4a0b2e6c4f4a21d89"` |

### Body (multipart/form-data)

| Campo       | Tipo   | Obrigatório | Validação                                | Exemplo                                                                                   |
| ----------- | ------ | ----------- | ---------------------------------------- | ----------------------------------------------------------------------------------------- |
| name        | string | Não         | Texto simples                            | `"Judô"`                                                                                  |
| description | string | Não         | Texto simples                            | `"O Judô é uma arte marcial de origem japonesa, criada em 1882 pelo mestre Jigoro Kano."` |
| image       | file   | Não         | Formatos permitidos: jpg, jpeg, png, gif | *(arquivo)*                                                                               |

**Exemplo de Body (form-data no Postman):**

```
name: Judô
description: O Judô é uma arte marcial de origem japonesa, criada em 1882 pelo mestre Jigoro Kano.
image: [arquivo .png]
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "data": {
    "_id": "66b8c3e4a0b2e6c4f4a21d89",
    "name": "Judô",
    "description": "O Judô é uma arte marcial de origem japonesa, criada em 1882 pelo mestre Jigoro Kano.",
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
    "status": true,
    "createdAt": "2025-08-20T16:10:00.000Z",
    "updatedAt": "2025-08-20T16:15:00.000Z"
  }
}
```

## Respostas de Erro

**Status:** `400 Bad Request` — ID inválido ou falha de validação

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

**Status:** `404 Not Found` — Modalidade não encontrada

```json
{
  "statusCode": 404,
  "message": "Modality not found",
  "error": "Not Found"
}
```

**Status:** `409 Conflict` — Nome da modalidade já existe

```json
{
  "statusCode": 409,
  "message": "Modality with name Judô already exists."
}
```

## Observações
- Máximo de **10 requisições por minuto** por IP (`@Throttle`).
- Permite **edição parcial ou total** (não é necessário enviar todos os campos).
- A imagem, se enviada, é processada e salva em **Buffer**, sendo convertida para **Base64** antes de retornar.
- O campo `name` deve ser único no sistema.
- Requer autenticação via **token JWT** armazenado em **cookie HTTP-only**.