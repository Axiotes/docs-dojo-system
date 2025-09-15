[< Back](../)

# Buscar 5 principais professores
Este endpoint retorna os **5 professores** que estão presentes no maior número de turmas cadastradas no sistema.

## Método HTTP
`GET`

## URL
`api/v1/teachers/top-five`

## Autenticação
- **Tipo:** Nenhuma
- **Acesso:** Qualquer usuário pode utilizar este endpoint

## Parâmetros da Requisição
Nenhum parâmetro é necessário.

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "data": [
    {
      "teacher": {
        "name": "Marcos Silva",
        "description": "Faixa Preta 3º Dan. Com mais de 15 anos de experiência no judô.",
        "modalities": [
            {
            "name": "Judô",
            "description": "O Judô é uma arte marcial de origem japonesa",
            "status": true
            }
        ],
        "image": "https://cdn.academia.com/images/teacher1.png"
      },
      "totalClasses": 12
    },
    {
      "teacher": {
        "name": "Ana Souza",
        "description": "Especialista em Muay Thai, formada na Tailândia.",
        "modalities": [
            {
            "name": "Judô",
            "description": "O Judô é uma arte marcial de origem japonesa",
            "status": true
            }
        ],
        "image": "https://cdn.academia.com/images/teacher2.png"
      },
      "totalClasses": 10
    }
  ]
}
```

- `teacher`: objeto contendo apenas `name`, `description`, `modalities` e `image`
- `totalClasses`: quantidade de turmas ativas em que o professor está vinculado

## Respostas de Erro

**Status:** `200 OK` — Nenhum professor encontrado

```json
{
  "data": []
}
```

**Status:** `429 Too Many Requests` — Limite de requisições atingido

```json
{
  "statusCode": 429,
  "message": "Too many requests, please try again later.",
  "error": "Too Many Requests"
}
```

## Observações
- Limite máximo de **30 requisições por minuto** por usuário
- Apenas professores com **status ativo** são considerados
- Caso não existam professores ou turmas ativas, retorna um array vazio
- Caso existam **menos de 5 professores**, serão retornados apenas os disponíveis