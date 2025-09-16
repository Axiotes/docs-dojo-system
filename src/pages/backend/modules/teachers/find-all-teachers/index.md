[< Back](../)

# Listar professores com paginação e filtros
Este endpoint permite que **administradores autenticados** com `role` **admin** listem todos os professores cadastrados na academia com informações detalhadas dos professores. Usuários sem permissão de admin recebem apenas dados públicos dos professores. É possível aplicar filtros por `status`, `month (mês)` e `year (ano)` e paginar os resultados.

## Método HTTP
`GET`

## URL
`api/v1/teachers`

## Autenticação
- **Tipo:** JWT via Cookie
- **Nível de permissão:** Apenas usuários com `role: admin` recebem informações pessoais completas

## Parâmetros da Requisição

### Query Parameters

| Campo  | Tipo    | Obrigatório | Validação                           | Exemplo |
| ------ | ------- | ----------- | ----------------------------------- | ------- |
| skip   | number  | Sim         | Número de documentos a pular        | 0       |
| limit  | number  | Sim         | Número de documentos a retornar     | 10      |
| status | boolean | Não         | Filtrar professores ativos/inativos | true    |
| month  | number  | Não         | 1 a 12, mês da carga horária        | 8       |
| year   | number  | Não         | Ano da carga horária                | 2025    |

**Exemplo de URL:**
```
GET /api/v1/teachers?skip=0&limit=10&status=true&month=8&year=2025
```

## Respostas de Sucesso
### Usuário autenticado
**Status:** `200 OK`

```json
{
  "data": [
    {
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
  ],
  "pagination": {
    "skip": 0,
    "limit": 10
  },
  "total": 1
}
```

### Qualquer usuário
**Status:** `200 OK`

```json
{
  "data": [
    {
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
  ],
  "pagination": {
    "skip": 0,
    "limit": 10
  },
  "total": 1
}
```

## Observações
- Máximo de **20 requisições por minuto** por IP
- Para usuários não-admin, apenas os campos públicos (`name`, `description`, `image`) são retornados
- Para usuários admin, inclui **carga horária mensal** e **gasto mensal** para cada professor
- Paginação aplicada via `skip` e `limit`
- Filtro opcional por `status` (ativo/inativo)