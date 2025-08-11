[< Back](../)

# Collection - `athletes`

## Descrição
Armazena os dados dos atletas matriculados na academia, incluindo informações pessoais, responsáveis legais (quando aplicável), métodos de pagamento, plano contratado e status de atividade.

## Estrutura dos Campos

| Campo           | Tipo de Dado                         | Obrigatório | Padrão/Valor Inicial | Descrição                                                                            |
| --------------- | ------------------------------------ | ----------- | -------------------- | ------------------------------------------------------------------------------------ |
| `_id`           | ObjectId                             | Sim         | Gerado pelo MongoDB  | Identificador único do atleta                                                        |
| `name`          | String                               | Sim         | —                    | Nome completo do atleta                                                              |
| `cpf`           | String (11 caracteres, único)        | Sim         | —                    | CPF do atleta, deve ser único e ter exatamente 11 caracteres                         |
| `email`         | String (único, formato email válido) | Não         | —                    | Endereço de e-mail do atleta, opcional                                               |
| `dateBirth`     | Date                                 | Sim         | —                    | Data de nascimento do atleta                                                         |
| `password`      | String                               | Não         | —                    | Senha para acesso à plataforma (opcional)                                            |
| `responsibles`  | Array de objetos (`Responsible`)     | Não         | —                    | Lista de responsáveis legais vinculados ao atleta (ex.: pais ou responsáveis legais) |
| `paymentMethod` | Array de objetos (`PaymentMethod`)   | Não         | —                    | Métodos de pagamento associados ao atleta                                            |
| `plan`          | ObjectId (ref: `plans`)              | Sim         | —                    | Referência para o plano contratado pelo atleta                                       |
| `status`        | Boolean                              | Sim         | `true`               | Indica se o atleta está ativo (`true`) ou inativo (`false`)                          |
| `createdAt`     | Date                                 | Sim         | Data atual           | Data de criação do registro (automático pelo `timestamps: true`)                     |
| `updatedAt`     | Date                                 | Sim         | Data atual           | Data da última atualização do registro (automático pelo `timestamps: true`)          |

## Campos Embutidos
### `Responsible`
Representa os responsáveis legais do atleta.

| Campo       | Tipo de Dado                         | Obrigatório | Descrição                                     |
| ----------- | ------------------------------------ | ----------- | --------------------------------------------- |
| `name`      | String                               | Sim         | Nome completo do responsável                  |
| `dateBirth` | Date                                 | Sim         | Data de nascimento do responsável             |
| `cpf`       | String (11 caracteres, único)        | Sim         | CPF do responsável, único na coleção embutida |
| `email`     | String (formato email válido, único) | Sim         | Email do responsável                          |

### `PaymentMethod`
Representa métodos de pagamento associados ao atleta.

| Campo            | Tipo de Dado      | Obrigatório | Descrição                                    |
| ---------------- | ----------------- | ----------- | -------------------------------------------- |
| `cardType`       | Enum (`CREDIT`, `DEBIT`) | Sim  | Tipo do cartão (ex: `CREDIT`, `DEBIT`)       |
| `cardholderName` | String            | Sim         | Nome do titular do cartão                    |
| `cardNumber`     | String            | Sim         | Número do cartão                             |
| `expirationDate` | String            | Sim         | Data de validade do cartão (formato `MM/AA`) |
| `cvv`            | Number            | Sim         | Código de segurança do cartão (CVV)          |

## Relacionamentos
### [Plans](../../../backend/collections/plans/)
- **Tipo:** N:1 (vários atletas podem ter o mesmo plano)
- **Campo de referência:** `plan` em `athletes`
- **Função:** Indica qual plano o atleta contratou.

## Índices

| Campo   | Tipo de Índice | Único? | Descrição                                               |
| ------- | -------------- | ------ | ------------------------------------------------------- |
| `cpf`   | Index          | Sim    | Garante que não haja CPF duplicado                      |
| `email` | Index          | Sim    | Garante que não haja email duplicado (quando informado) |

## Exemplo de Documento

```json
{
  "_id": "64cfa26e15e4c2a9a1f0d123",
  "name": "Ana Silva",
  "cpf": "98765432100",
  "email": "ana.silva@example.com",
  "dateBirth": "1990-05-20T00:00:00.000Z",
  "password": "hashed_password",
  "responsibles": [
    {
      "name": "Carlos Silva",
      "dateBirth": "1965-10-15T00:00:00.000Z",
      "cpf": "12345678999",
      "email": "carlos.silva@example.com"
    }
  ],
  "paymentMethod": [
    {
      "cardType": "CREDIT",
      "cardholderName": "Carlos Silva",
      "cardNumber": "1234123412341234",
      "expirationDate": "12/25",
      "cvv": 123
    }
  ],
  "plan": "64cfa26e15e4c2a9a1f0c321",
  "status": true,
  "createdAt": "2025-08-11T14:00:00.000Z",
  "updatedAt": "2025-08-11T14:30:00.000Z"
}
```

## Observações
- O campo `plan` deve referenciar um documento válido da collection `plans`.
- Campos de responsáveis e métodos de pagamento são opcionais, mas importantes para controle e faturamento.
- O campo `cpf` deve ser único para cada atleta.
- Emails são opcionais, porém quando informados devem ser únicos e válidos.
