[< Back](../)

# Collection - `plans`

## Descrição
Armazena os planos disponíveis na academia, definindo período, quantidade de períodos, valor, modalidade associada e status. Cada plano está vinculado a uma modalidade e pode ser associado a vários atletas.

## Estrutura dos Campos

| Campo            | Tipo de Dado                         | Obrigatório | Valor Padrão | Descrição                                                                               |
| ---------------- | ------------------------------------ | ----------- | -------------------- | --------------------------------------------------------------------------------------- |
| `_id`            | ObjectId                             | Sim         | Gerado pelo MongoDB  | Identificador único do plano                                                            |
| `period`         | String (Enum: `monthly`, `annually`) | Sim         | —                    | Define a unidade do período do plano                                                    |
| `periodQuantity` | Number                               | Sim         | —                    | Quantidade do período definido em `period` (ex.: 1 mês, 3 anos, etc.)                   |
| `value`          | Number                               | Sim         | —                    | Valor monetário do plano                                                                |
| `modality`       | ObjectId (ref: `modalities`)         | Sim         | —                    | Referência para a modalidade à qual o plano pertence                                    |
| `status`         | Boolean                              | Sim         | `true`               | Indica se o plano está ativo (`true`) ou inativo (`false`)                              |
| `createdAt`      | Date                                 | Sim         | Data atual           | Data de criação do registro (gerado automaticamente pelo `timestamps: true`)            |
| `updatedAt`      | Date                                 | Sim         | Data atual           | Data da última atualização do registro (gerado automaticamente pelo `timestamps: true`) |

## Relacionamentos
### [Modalities](../../../backend/collections/modalities/)
- **Tipo:** N:1 (vários planos podem estar vinculados a uma única modalidade)
- **Campo de referência:** `modality` em `plans`
- **Função:** Define a modalidade que o plano contempla.

### [Athletes](../../../backend/collections/athletes)
- **Tipo:** 1\:N (um plano pode estar associado a vários atletas)
- **Campo de referência:** `plan` em `athletes`
- **Função:** Identifica quais atletas estão inscritos no plano.

## Índices

| Campo                          | Tipo de Índice | Único? | Descrição                            |
| ------------------------------ | -------------- | ------ | ------------------------------------ |
| Nenhum definido | —              | —      | Apenas o índice padrão no `_id` gerado pelo MongoDB |

## Exemplo de Documento

```json
{
  "_id": "64cfa26e15e4c2a9a1f0c321",
  "period": "monthly",
  "periodQuantity": 6,
  "value": 450.00,
  "modality": "64cfa26e15e4c2a9a1f0b789",
  "status": true,
  "createdAt": "2025-08-11T14:00:00.000Z",
  "updatedAt": "2025-08-11T14:30:00.000Z"
}
```

## Observações

- O campo `modality` deve conter um ID válido que exista na collection `modalities`.
- O valor (`value`) deve ser tratado com precisão monetária na aplicação.
- Exclusões ou alterações de um plano podem impactar atletas vinculados, sendo necessário verificar dependências antes de mudanças.