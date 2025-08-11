[< Back](../)

# Collection - `classes`

## Descrição

Armazena as informações das turmas oferecidas pela academia, incluindo a modalidade, professor responsável, horário, faixa etária indicada, limite máximo de alunos, dias da semana em que a turma ocorre, imagem representativa e status da turma.

## Estrutura dos Campos

| Campo         | Tipo de Dado                            | Obrigatório | Descrição                                                                                       |
| ------------- | --------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------- |
| `_id`         | ObjectId                                | Sim         | Identificador único da turma                                                                    |
| `modality`    | ObjectId (referência para `modalities`) | Sim         | Referência para a modalidade da turma                                                           |
| `teacher`     | ObjectId (referência para `teachers`)   | Sim         | Referência para o professor responsável pela turma                                              |
| `hour`        | Objeto (`Hour`)                         | Sim         | Horário da turma, com campos `start` e `end`                                                    |
| `age`         | Objeto (`Age`)                          | Sim         | Faixa etária da turma, com campos `min` e `max`                                                 |
| `maxStudents` | Number                                  | Sim         | Número máximo de alunos permitidos na turma                                                     |
| `weekDays`    | Array de Strings                        | Sim         | Dias da semana em que a turma ocorre, mínimo 1 valor                                            |
| `image`       | String                                  | Sim         | URL ou caminho da imagem representativa da turma                                                |
| `status`      | Boolean                                 | Sim         | Status da turma (`true` = ativa, `false` = inativa)                                             |
| `createdAt`   | Date                                    | Sim         | Data de criação do registro (automático via `timestamps`)                                       |
| `updatedAt`   | Date                                    | Sim         | Data da última atualização do registro (automático via `timestamps`)                            |

## Tipos Embutidos

### `Age`

| Campo | Tipo   | Descrição                |
| ----- | ------ | ------------------------ |
| `min` | Number | Idade mínima recomendada |
| `max` | Number | Idade máxima recomendada |

### `Hour`

| Campo   | Tipo   | Descrição                                |
| ------- | ------ | ---------------------------------------- |
| `start` | String | Horário de início da aula (ex: "08:00")  |
| `end`   | String | Horário de término da aula (ex: "09:30") |

## Relacionamentos

### [Modalities](../../../backend/collections/modalities/)
- **Tipo:** N:1 (várias turmas podem pertencer a uma modalidade)
- **Campo:** `modality`
- **Função:** Define a modalidade esportiva ou atividade da turma.

### [Teachers](../../../backend/collections/teachers/)
- **Tipo:** N:1 (várias turmas podem ser ministradas por um mesmo professor)
- **Campo:** `teacher`
- **Função:** Define o professor responsável pela turma.

## Índices e Restrições

| Campo      | Restrição              | Descrição                               |
| ---------- | ---------------------- | --------------------------------------- |
| `modality` | Referência obrigatória | Deve existir na collection `modalities` |
| `teacher`  | Referência obrigatória | Deve existir na collection `teachers`   |
| `weekDays` | Validação mínima       | Deve ter pelo menos um dia da semana    |

## Exemplo de Documento

```json
{
  "_id": "64cfa26e15e4c2a9a1f0e456",
  "modality": "64cfa26e15e4c2a9a1f0b789",
  "teacher": "64cfa26e15e4c2a9a1f0c999",
  "hour": {
    "start": "08:00",
    "end": "09:30"
  },
  "age": {
    "min": 12,
    "max": 16
  },
  "maxStudents": 20,
  "weekDays": ["Monday", "Wednesday", "Friday"],
  "image": "https://exemplo.com/images/classes/junior-karate.jpg",
  "status": true,
  "createdAt": "2025-08-11T14:00:00.000Z",
  "updatedAt": "2025-08-11T14:30:00.000Z"
}
```

## Observações
- Os horários (`hour.start` e `hour.end`) devem seguir o formato `HH:mm` para facilitar interpretação e manipulação.
- O campo `weekDays` aceita strings que representam dias da semana.
- Status `false` pode indicar turmas desativadas ou que não estão mais disponíveis para matrícula.