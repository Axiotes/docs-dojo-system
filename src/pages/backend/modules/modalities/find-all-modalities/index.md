[< Back](../)

# Buscar modalidades
Este endpoint permite que **qualquer usuário**, sem necessidade de autenticação, busque as modalidades cadastradas na academia. Suporta **paginação** e **filtro por status**. A imagem de cada modalidade é convertida de **Buffer** para **Base64** na resposta.

## Método HTTP

`GET`

## URL

`api/v1/modalities`

## Autenticação
- **Não exige autenticação**

## Parâmetros da Requisição

### Query

| Campo  | Tipo    | Obrigatório | Descrição                                               | Exemplo |
| ------ | ------- | ----------- | ------------------------------------------------------- | ------- |
| skip   | number  | Sim         | Número de documentos que serão pulados (para paginação) | `0`     |
| limit  | number  | Sim         | Número máximo de documentos retornados                  | `10`    |
| status | boolean | Não         | Filtra por status da modalidade (`true` ou `false`)     | `true`  |

**Exemplo de URL**

```
api/v1/modalities?skip=0&limit=5&status=true
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "data": [
    {
      "_id": "66b8b02da0b2e6c4f4a21c45",
      "name": "Judô",
      "description": "O Judô é uma arte marcial de origem japonesa, criada em 1882 pelo mestre Jigoro Kano.",
      "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ...",
      "status": true,
      "createdAt": "2025-08-20T15:00:00.000Z",
      "updatedAt": "2025-08-20T15:00:00.000Z"
    },
    {
      "_id": "66b8b07fa0b2e6c4f4a21c46",
      "name": "Karatê",
      "description": "Arte marcial japonesa desenvolvida em Okinawa.",
      "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ...",
      "status": true,
      "createdAt": "2025-08-20T15:05:00.000Z",
      "updatedAt": "2025-08-20T15:05:00.000Z"
    }
  ],
  "pagination": {
    "skip": 0,
    "limit": 5
  },
  "total": 2
}
```

## Respostas de Erro

**Status:** `400 Bad Request` — Erro de validação nos parâmetros

```json
{
  "statusCode": 400,
  "message": [
    "skip must not be less than 0",
    "limit must not be less than 1"
  ],
  "error": "Bad Request"
}
```

## Observações
- Máximo de **30 requisições por minuto** por IP (`@Throttle`).
- Não requer autenticação.
- Imagens retornadas em **Base64** no formato `data:image/jpeg;base64,...`.
- Suporte a **paginação** (`skip` e `limit`) e **filtro por status**.