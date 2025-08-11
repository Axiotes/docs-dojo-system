[< Back](../)

# Collection - `visits`

## Descrição
Armazena informações sobre visitantes da academia que não são atletas matriculados, incluindo seus dados pessoais, responsáveis (quando aplicável), quantidade de visitas permitidas e status de atividade.

## Estrutura dos Campos

| Campo          | Tipo de Dado                     | Obrigatório | Valor Padrão | Descrição                                                                   |
| -------------- | -------------------------------- | ----------- | -------------------- | --------------------------------------------------------------------------- |
| `_id`          | ObjectId                         | Sim         | Gerado pelo MongoDB  | Identificador único do visitante                                            |
| `name`         | String                           | Sim         | —                    | Nome completo do visitante                                                  |
| `cpf`          | String (11 caracteres, único)    | Sim         | —                    | CPF do visitante, único e com 11 caracteres                                 |
| `email`        | String (único, formato email)    | Não         | —                    | Email do visitante, opcional e único quando informado                       |
| `dateBirth`    | Date                             | Sim         | —                    | Data de nascimento do visitante                                             |
| `responsibles` | Array de objetos (`Responsible`) | Não         | —                    | Lista de responsáveis legais vinculados ao visitante, quando aplicável      |
| `numVisits`    | Number (máximo 3)                | Sim         | —                    | Número de visitas permitidas ao visitante (máximo 3)                        |
| `status`       | Boolean                          | Sim         | `true`               | Indica se o visitante está ativo (`true`) ou inativo (`false`)              |
| `createdAt`    | Date                             | Sim         | Data atual           | Data de criação do registro (automático pelo `timestamps: true`)            |
| `updatedAt`    | Date                             | Sim         | Data atual           | Data da última atualização do registro (automático pelo `timestamps: true`) |

## Campos Embutidos
### `Responsible`
Representa os responsáveis legais do visitante.

| Campo       | Tipo de Dado                         | Obrigatório | Descrição                                     |
| ----------- | ------------------------------------ | ----------- | --------------------------------------------- |
| `name`      | String                               | Sim         | Nome completo do responsável                  |
| `dateBirth` | Date                                 | Sim         | Data de nascimento do responsável             |
| `cpf`       | String (11 caracteres, único)        | Sim         | CPF do responsável, único na coleção embutida |
| `email`     | String (formato email válido, único) | Sim         | Email do responsável                          |

## Índices e Restrições

| Campo   | Restrição           | Descrição                                             |
| ------- | ------------------- | ----------------------------------------------------- |
| `cpf`   | Único e obrigatório | Garante CPF único para cada visitante                 |
| `email` | Único se informado  | Garante email único para visitante (quando informado) |

## Exemplo de Documento

```json
{
  "_id": "64d0b26e15e4c2a9a1f0d987",
  "name": "Lucas Almeida",
  "cpf": "12345678901",
  "email": "lucas.almeida@example.com",
  "dateBirth": "1995-04-12T00:00:00.000Z",
  "responsibles": [
    {
      "name": "Mariana Almeida",
      "dateBirth": "1970-08-30T00:00:00.000Z",
      "cpf": "98765432100",
      "email": "mariana.almeida@example.com"
    }
  ],
  "numVisits": 2,
  "status": true,
  "createdAt": "2025-08-11T14:00:00.000Z",
  "updatedAt": "2025-08-11T14:30:00.000Z"
}
```

## Observações

- O campo `numVisits` é limitado a no máximo 3 visitas, conforme regras internas da academia.
- O campo `responsibles` é opcional e deve ser usado para visitantes menores de idade ou que necessitem de responsáveis legais.
- O campo `status` indica se o visitante está ativo para realização de visitas na academia.
