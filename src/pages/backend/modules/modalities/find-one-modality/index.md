[< Back](../)

# Buscar modalidade por ID

Este endpoint permite que **qualquer usuário**, sem necessidade de autenticação, busque uma modalidade específica através do seu **ID**. A imagem da modalidade é convertida de **Buffer** para **Base64** na resposta.

## Método HTTP

`GET`

## URL

`api/v1/modalities/:id`

## Autenticação

* **Não exige autenticação**

## Parâmetros da Requisição

### Path

| Campo | Tipo   | Obrigatório | Descrição                           | Exemplo                      |
| ----- | ------ | ----------- | ----------------------------------- | ---------------------------- |
| id    | string | Sim         | ID da modalidade (MongoDB ObjectId) | `"66b8b02da0b2e6c4f4a21c45"` |

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "data": {
    "_id": "66b8b02da0b2e6c4f4a21c45",
    "name": "Judô",
    "description": "O Judô é uma arte marcial de origem japonesa, criada em 1882 pelo mestre Jigoro Kano.",
    "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ...",
    "status": true,
    "createdAt": "2025-08-20T15:00:00.000Z",
    "updatedAt": "2025-08-20T15:00:00.000Z"
  }
}
```

## Respostas de Erro

**Status:** `400 Bad Request` — ID em formato inválido

```json
{
  "statusCode": 400,
  "message": "Invalid id format",
  "error": "Bad Request"
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

## Observações
- Máximo de **30 requisições por minuto** por IP (`@Throttle`).
- Não requer autenticação.
- Imagem sempre retornada em **Base64** no formato `data:image/jpeg;base64,...`.

