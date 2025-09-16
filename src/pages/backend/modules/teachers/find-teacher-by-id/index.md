[< Back](../)

# Buscar professor por ID
Este endpoint permite que **administradores autenticados** com `role` **admin** consultem informações detalhadas de um professor específico. Usuários sem permissão de admin recebem apenas dados públicos do professor.

## Método HTTP
`GET`

## URL
`api/v1/teachers/id/:id`

## Autenticação

- **Tipo:** JWT via Cookie
- **Nível de permissão:** Apenas usuários com `role: admin` recebem informações pessoais completas

## Parâmetros da Requisição

### URL Parameters
| Campo | Tipo   | Obrigatório | Validação            | Exemplo                      |
| ----- | ------ | ----------- | -------------------- | ---------------------------- |
| id    | string | Sim         | ID válido do MongoDB | `"66b9d4e1a0f3e6c4f4a21c8e"` |

### Query Parameters
| Campo | Tipo   | Obrigatório | Validação                    | Exemplo |
| ----- | ------ | ----------- | ---------------------------- | ------- |
| month | number | Não         | 1 a 12, mês da carga horária | 8       |
| year  | number | Não         | Ano da carga horária         | 2025    |

**Exemplo de URL:**
```
GET /api/v1/teachers/id/66b9d4e1a0f3e6c4f4a21c8e?month=8&year=2025
```

## Respostas de Sucesso
### Usuário autenticado
**Status:** `200 OK`

```json
{
  "data": {
    "teacher": {
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
      "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABA..."
    },
    "report": {
      "workload": "40:00",
      "salary": "200,00",
      "month": 8,
      "year": 2025
    }
  }
}
```

### Qualquer usuário
**Status:** `200 OK`

```json
{
  "data": {
    "teacher": {
      "_id": "66b9d4e1a0f3e6c4f4a21c8e",
      "name": "Marcos Silva",
      "description": "Faixa Preta 3º Dan. Com mais de 15 anos de experiência no judô.",
      "modalities": [
        {
          "name": "Judô",
          "description": "O Judô é uma arte marcial de origem japonesa",
          "status": true
        }
      ],
      "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABA..."
    },
  }
}
```

## Respostas de Erro

**Status:** `400 Bad Request` — ID inválido

```json
{
  "statusCode": 400,
  "message": "Invalid id format",
  "error": "Bad Request"
}
```

**Status:** `404 Not Found` — Professor não encontrado

```json
{
  "statusCode": 404,
  "message": "Teacher with id 66b9d4e1a0f3e6c4f4a21c8e not found"
}
```

## Observações
- Máximo de **20 requisições por minuto** por IP
- Para usuários não-admin, apenas os campos públicos (`name`, `description`, `image`) são retornados
- Para usuários admin, inclui **carga horária mensal** e **gasto mensal**