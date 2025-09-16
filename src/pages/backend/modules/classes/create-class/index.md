[< Back](../)

# Cadastrar nova turma
Este endpoint permite que **administradores autenticados** com `role` **admin** cadastrem uma nova turma na academia. Cada turma deve conter informações obrigatórias, incluindo modalidade, professor responsável, horários, faixa etária, limite de atletas, dias da semana e imagem representativa.

## Método HTTP
`POST`

## URL
`api/v1/classes`

## Autenticação
- **Tipo:** JWT via Cookie
- **Nível de permissão:** Apenas usuários com `role: admin`

## Parâmetros da Requisição

### Body (multipart/form-data)

| Campo       | Tipo   | Obrigatório | Validação                                                                               | Exemplo                               |
| ----------- | ------ | ----------- | --------------------------------------------------------------------------------------- | ------------------------------------- |
| modality    | string | Sim         | ID válido (`ObjectId` do MongoDB) de uma modalidade existente e ativa                   | `"64f1b2a3c4d5e6f7890abc12"`          |
| teacher     | string | Sim         | ID válido (`ObjectId` do MongoDB) de um professor existente e ativo                     | `"64f1b2a3c4d5e6f7890abc34"`          |
| startHour   | string | Sim         | Formato `HH:MM` (24h). Deve ser menor que `endHour`                                     | `"08:30"`                             |
| endHour     | string | Sim         | Formato `HH:MM` (24h). Deve ser maior que `startHour`                                   | `"10:00"`                             |
| minAge      | number | Sim         | Número inteiro ≥ 1                                                                      | `10`                                  |
| maxAge      | number | Sim         | Número inteiro > `minAge`                                                               | `13`                                  |
| maxAthletes | number | Sim         | Número inteiro ≥ 1                                                                      | `20`                                  |
| weekDays    | array  | Sim         | Lista com pelo menos 1 dia da semana. Valores permitidos: `Segunda-feira` ... `Domingo` | `["Segunda-feira","Quarta-feira"]`    |
| image       | file   | Sim         | Formatos permitidos: jpg, jpeg, png, gif. Tamanho máximo: **5MB**                       | (arquivo .jpg, .jpeg, .png ou .gif)\* |

**Exemplo de Body (form-data no Postman):**

```
modality: 64f1b2a3c4d5e6f7890abc12
teacher: 64f1b2a3c4d5e6f7890abc34
startHour: 08:30
endHour: 10:00
minAge: 10
maxAge: 13
maxAthletes: 20
weekDays[]: Segunda-feira
weekDays[]: Quarta-feira
image: [arquivo .jpg, .jpeg, .png ou .gif]
```

## Resposta de Sucesso

**Status:** `201 Created`

```json
{
  "data": {
    "_id": "66b9f7a4c2e6d4f3a5c21b9e",
    "modality": {
      "name": "Judô",
      "description": "Arte marcial de origem japonesa",
      "status": true
    },
    "teacher": {
      "name": "Marcos Silva",
      "description": "Faixa Preta 3º Dan. Mais de 15 anos de experiência"
    },
    "hour": {
      "start": "08:30",
      "end": "10:00"
    },
    "age": {
      "min": 10,
      "max": 13
    },
    "maxAthletes": 20,
    "weekDays": ["Segunda-feira", "Quarta-feira"],
    "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABA...",
    "status": true,
    "createdAt": "2025-09-16T14:30:00.000Z",
    "updatedAt": "2025-09-16T14:30:00.000Z"
  }
}
```

## Respostas de Erro

**Status:** `400 Bad Request` — Falha de validação nos campos ou formato de imagem inválido

```json
{
  "statusCode": 400,
  "message": [
    "endHour must be greater than startHour",
    "maxAge must be greater than minAge",
    "weekDays should not be empty",
    "Only images (jpg, jpeg, png, gif) are allowed"
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

**Status:** `404 Not Found` — Professor ou modalidade não encontrados

```json
{
  "statusCode": 404,
  "message": "Teacher with id 64f1b2a3c4d5e6f7890abc34 not found"
}
```

ou

```json
{
  "statusCode": 404,
  "message": "Modality with id 64f1b2a3c4d5e6f7890abc12 not found"
}
```

**Status:** `400 Bad Request` — Professor não possui a modalidade informada

```json
{
  "statusCode": 400,
  "message": "Teacher Marcos Silva does not have Judô modality"
}
```

## Observações
- Máximo de **5 requisições por minuto** por IP
- O professor deve estar **ativo** e possuir a modalidade vinculada
- A modalidade informada deve estar **ativa**
- A imagem é armazenada como **Buffer** e retornada em **Base64**
- O horário de término deve ser **maior que o horário de início**
- A idade máxima deve ser **maior que a mínima**
- É obrigatório informar **ao menos um dia da semana**
- Requer autenticação via **token JWT** armazenado em **cookie HTTP-only**