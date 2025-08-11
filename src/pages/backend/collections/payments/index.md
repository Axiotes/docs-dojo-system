[< Back](../)

# Collection - `payments`

## Descrição

Armazena os registros de pagamentos realizados pelos atletas, incluindo o modo de pagamento, a data, o atleta pagante e o plano adquirido.

## Estrutura dos Campos

| Campo       | Tipo de Dado                       | Obrigatório | Valor Padrão        | Descrição                                                          |
| ----------- | ---------------------------------- | ----------- | ------------------- | ------------------------------------------------------------------ |
| `_id`       | ObjectId                           | Sim         | Gerado pelo MongoDB | Identificador único do pagamento                                   |
| `athlete`   | ObjectId (ref: `athletes`)         | Sim         | —                   | Referência para o atleta que realizou o pagamento                  |
| `mode`      | Enum (`CARD`, `PIX`, `PERSONALLY`) | Sim         | —                   | Modo de pagamento utilizado                                        |
| `date`      | Date                               | Sim         | —                   | Data em que o pagamento foi efetuado                               |
| `plan`      | ObjectId (ref: `plans`)            | Sim         | —                   | Referência para o plano adquirido no pagamento                     |
| `createdAt` | Date                               | Sim         | Data atual          | Data de criação do registro (gerada automaticamente pelo Mongoose) |
| `updatedAt` | Date                               | Sim         | Data atual          | Data da última atualização do registro (gerada automaticamente)    |

## Enumeração `PaymentMode`

| Valor        | Descrição                        |
| ------------ | -------------------------------- |
| `CARD`       | Pagamento realizado via cartão   |
| `PIX`        | Pagamento realizado via PIX      |
| `PERSONALLY` | Pagamento realizado pessoalmente |

## Relacionamentos
### [Athletes](../../../backend/collections/athletes/)
- **Tipo:** N:1 (vários pagamentos podem ser realizados por um único atleta)
- **Campo de referência:** `athlete` em `payments`
- **Função:** Identifica o atleta que efetuou o pagamento.

### [Plans](../../../backend/collections/plans/)
- **Tipo:** N:1 (vários pagamentos podem estar associados a um mesmo plano)
- **Campo de referência:** `plan` em `payments`
- **Função:** Indica o plano adquirido no pagamento.

## Índices

| Campo     | Tipo de Índice | Único? | Descrição                  |
| --------- | -------------- | ------ | -------------------------- |
| `athlete` | Index          | Não    | Facilita buscas por atleta |
| `plan`    | Index          | Não    | Facilita buscas por plano  |
| `mode`    | Index          | Não    | Facilita buscas por modo   |

## Exemplo de Documento

```json
{
  "_id": "64d0c26e15e4c2a9a1f0e123",
  "athlete": "64d0b26e15e4c2a9a1f0d987",
  "mode": "PIX",
  "date": "2025-08-10T15:30:00.000Z",
  "plan": "64cfa26e15e4c2a9a1f0b789",
  "createdAt": "2025-08-10T15:31:00.000Z",
  "updatedAt": "2025-08-10T15:31:00.000Z"
}
```

## Observações

- O campo `mode` aceita apenas os valores definidos no enum `PaymentMode`.
- Os campos `athlete` e `plan` devem referenciar documentos existentes nas collections correspondentes para garantir a integridade dos dados.
- Registros de pagamento sejam tratados como históricos e não sejam alterados após a criação, para manter integridade e rastreabilidade.