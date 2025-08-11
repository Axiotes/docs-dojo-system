[< Back](../)

# Collection - `classes-history`

## Descrição
Armazena o histórico de presenças das aulas, registrando quais atletas e visitantes compareceram em cada data específica para uma determinada aula.

## Estrutura dos Campos

| Campo                | Tipo de Dado               | Obrigatório | Valor Padrão        | Descrição                                                                      |
| -------------------- | -------------------------- | ----------- | ------------------- | ------------------------------------------------------------------------------ |
| `_id`                | ObjectId                   | Sim         | Gerado pelo MongoDB | Identificador único do registro de histórico                                   |
| `class`              | ObjectId (ref: `classes`)  | Sim         | —                   | Referência para a aula à qual o histórico se refere                            |
| `athletes`           | Array de objetos           | Sim         | —                   | Lista de atletas relacionados à aula com status de presença                    |
| `athletes[].athlete` | ObjectId (ref: `athletes`) | Sim         | —                   | Referência para o atleta                                                       |
| `athletes[].present` | Boolean                    | Sim         | —                   | Indica se o atleta esteve presente (`true`) ou ausente (`false`)               |
| `visits`             | Array de objetos           | Não         | —                   | Lista de visitantes relacionados à aula com status de presença                 |
| `visits[].visit`     | ObjectId (ref: `visits`)   | Não         | —                   | Referência para o visitante (quando aplicável)                                 |
| `visits[].present`   | Boolean                    | Não         | —                   | Indica se o visitante esteve presente (`true`) ou ausente (`false`) (opcional) |
| `date`               | Date                       | Sim         | —                   | Data em que o registro de presença foi realizado                               |

## Relacionamentos
### [Classes](../../../backend/collections/classes/)
- **Tipo:** N:1 (vários históricos podem estar associados a uma única aula)
- **Campo de referência:** `class` em `classes-history`
- **Função:** Indica a aula da qual aquele histórico de presenças se refere.

### [Athletes](../../../backend/collections/athletes/)
- **Tipo:** N\:N (vários atletas podem estar presentes em várias aulas em datas diferentes)
- **Campo de referência:** `athletes.athlete` em `classes-history`
- **Função:** Identifica os atletas que participaram da aula na data registrada.

### [Visits](../../../backend/collections/visits/)
- **Tipo:** N\:N (vários visitantes podem estar presentes em várias aulas em datas diferentes)
- **Campo de referência:** `visits.visit` em `classes-history`
- **Função:** Identifica os visitantes que participaram da aula na data registrada.

## Índices

| Campo   | Tipo de Índice | Único? | Descrição                             |
| ------- | -------------- | ------ | ------------------------------------- |
| `class` | Index          | Não    | Facilita buscas por aula              |
| `date`  | Index          | Não    | Facilita buscas por data do histórico |

## Exemplo de Documento

```json
{
  "_id": "64e2f71a9c1a4b27c1234567",
  "class": "64e2f6d39c1a4b27c1234561",
  "athletes": [
    {
      "athlete": "64d0b26e15e4c2a9a1f0d987",
      "present": true
    },
    {
      "athlete": "64d0b26e15e4c2a9a1f0d988",
      "present": false
    }
  ],
  "visits": [
    {
      "visit": "64d1a36e15e4c2a9a1f0f321",
      "present": true
    }
  ],
  "date": "2025-08-10T18:00:00.000Z"
}
```

## Observações

* O campo `class` deve referenciar um documento válido da collection `classes`.
* O array `athletes` deve conter objetos com referências válidas para atletas e seu status de presença.
* O array `visits` deve conter objetos com referências válidas para atletas e seu status de presença.