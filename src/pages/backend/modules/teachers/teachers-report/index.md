[< Back](../)

# Gerar relatório dos professores
Este endpoint permite que **administradores** gerem um relatório de todos os professores cadastrados no sistema, exportando os dados em **PDF**.

O relatório contém:
- Informações pessoais (`name`, `cpf`, `email`)
- Modalidades disponíveis
- Quantidade de turmas vinculadas
- Valor da hora/aula (`hourPrice`)
- Carga horária mensal
- Salário mensal (`carga horária × valor da hora/aula`)
- Data de cadastro
- Indicadores:
  - Total de professores ativos
  - Gastos totais
  - Média do valor/hora
  - Média de carga horária
  - Média salarial
  - Professor com mais aulas
  - Professor com menos aulas
  - Evolução de custos em relação ao mês anterior

## Método HTTP

`GET`

## URL

`api/v1/teachers/report`

## Autenticação
- **Tipo:** JWT via Cookie
- **Nível de permissão:** Apenas usuários com `role: admin`

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "data": {
    "filename": "teachers-report.pdf",
    "mimeType": "application/pdf",
    "file": "data:application/pdf;base64,JVBERi0xLjUKJ..."
  }
}
```

- `filename`: nome do arquivo PDF gerado
- `mimeType`: tipo do arquivo (sempre `application/pdf`)
- `file`: conteúdo do relatório em base64 (pode ser convertido de volta para PDF)

## Respostas de Erro

**Status:** `400 Bad Request` — Erro de validação ou dados inconsistentes

```json
{
  "statusCode": 400,
  "message": "Invalid data for report generation",
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
  "message": "Forbidden resource",
  "error": "Forbidden"
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
- Limite máximo de requisições **10 por minuto** por administrador
- O relatório é gerado a partir de um **template Handlebars** (`teacher-report.hbs`) convertido em PDF via **Puppeteer**
- Conteúdo do relatório em base64