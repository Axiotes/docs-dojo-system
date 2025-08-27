[< Back](../)

# Collection - `teachers`

## Descrição
Armazena os dados dos professores da academia, incluindo informações pessoais, contatos, valor da hora/aula (numérico), modalidades que ministram e status ativo/inativo.

## Estrutura dos Campos

| Campo        | Tipo de Dado                                  | Obrigatório              | Valor Padrão | Descrição                                                                   |
| ------------ | --------------------------------------------- | ------------------------ | -------------------- | --------------------------------------------------------------------------- |
| `_id`        | ObjectId                                      | Sim                      | Gerado pelo MongoDB  | Identificador único do professor                                            |
| `name`       | String                                        | Sim                      | —                    | Nome completo do professor                                                  |
| `cpf`        | String (11 caracteres, único)                 | Sim                      | —                    | CPF do professor, deve ser único e ter exatamente 11 caracteres             |
| `email`      | String (único, formato email válido)          | Sim                      | —                    | Endereço de e-mail único e válido                                           |
| `image`      | Buffer                                        | Sim                      | —                    | Arquivo da imagem ilustrativa da turma armazenado em formato binário (Buffer)                                         |
| `hourPrice`  | Number                                        | Sim                      | —                    | Valor cobrado por hora/aula, formato numérico                               |
| `modalities` | Array de ObjectId (referência a `modalities`) | Sim (validação mínimo 1) | —                    | Lista das modalidades que o professor está habilitado a ministrar           |
| `status`     | Boolean                                       | Sim                      | `true`               | Indica se o professor está ativo (`true`) ou inativo (`false`)              |
| `createdAt`  | Date                                          | Sim                      | Data atual           | Data de criação do registro (automático pelo `timestamps: true`)            |
| `updatedAt`  | Date                                          | Sim                      | Data atual           | Data da última atualização do registro (automático pelo `timestamps: true`) |

## Relacionamentos

### [Modalities](../../../backend/collections/modalities/)
- **Tipo:** N\:N (um professor pode ministrar várias modalidades e uma modalidade pode ter vários professores)
- **Campo de referência:** `modalities` (array de ObjectId)
- **Função:** Associa os professores às modalidades que eles lecionam, permitindo filtrar e gerenciar turmas e planos por modalidade.

## Índices

| Campo   | Tipo de Índice | Único? | Descrição                            |
| ------- | -------------- | ------ | ------------------------------------ |
| `cpf`   | Index          | Sim    | Garante que não haja CPF duplicado   |
| `email` | Index          | Sim    | Garante que não haja email duplicado |

## Exemplo de Documento

```json
{
  "_id": "64cfa26e15e4c2a9a1f0c999",
  "name": "Carlos Eduardo",
  "cpf": "12345678901",
  "email": "carlos.eduardo@example.com",
  "image": "https://exemplo.com/fotos/carlos.jpg",
  "hourPrice": 70.0,
  "modalities": [
    "64cfa26e15e4c2a9a1f0b789",
    "64cfa26e15e4c2a9a1f0b790"
  ],
  "status": true,
  "createdAt": "2025-08-11T14:00:00.000Z",
  "updatedAt": "2025-08-11T14:30:00.000Z"
}
```

## Observações

- O array `modalities` deve conter pelo menos um ObjectId válido da collection `modalities`.
- O campo `cpf` deve conter exatamente 11 dígitos numéricos e ser único na base.
- Alterações no status podem impactar o agendamento e visibilidade dos professores na aplicação.