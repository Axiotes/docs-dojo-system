[< Back](../)

# Collection - `modalities`

## Descrição
Armazena as modalidades oferecidas pela academia, incluindo informações como nome, descrição, imagem ilustrativa e status de ativação.

## Estrutura dos Campos

| Campo         | Tipo de Dado | Obrigatório | Valor Padrão | Descrição                                                                               |
| ------------- | ------------ | ----------- | -------------------- | --------------------------------------------------------------------------------------- |
| `_id`         | ObjectId     | Sim         | Gerado pelo MongoDB  | Identificador único da modalidade                                                       |
| `name`        | String       | Sim         | —                    | Nome da modalidade (ex.: "Jiu-Jitsu", "Muay Thai")                                      |
| `description` | String       | Sim         | —                    | Descrição da modalidade, destacando suas características, história e benefícios         |
| `image`       | String       | Sim         | —                    | URL, base64 ou caminho da imagem ilustrativa da modalidade                              |
| `status`      | Boolean      | Sim         | `true`               | Indica se a modalidade está ativa (`true`) ou inativa (`false`)                         |
| `createdAt`   | Date         | Sim         | Data atual           | Data de criação do registro (gerado automaticamente pelo `timestamps: true`)            |
| `updatedAt`   | Date         | Sim         | Data atual           | Data da última atualização do registro (gerado automaticamente pelo `timestamps: true`) |

## Relacionamentos
### [Plans](../../../backend/collections/plans)
- **Tipo:** 1\:N (uma modalidade pode estar vinculada a vários planos)
- **Campo de referência:** `modality` em `plans`
- **Função:** Define qual modalidade está associada a um plano específico.

### [Teachers](../../../backend/collections/teachers)
- **Tipo:** N\:N (uma modalidade pode ter vários professores e um professor pode ensinar várias modalidades)
- **Campo de referência:** `modalities` em `teachers`
- **Função:** Lista quais professores estão aptos a lecionar a modalidade.

### [Classes](../../../backend/collections/classes)
- **Tipo:** 1\:N (uma modalidade pode ter várias turmas)
- **Campo de referência:** `modality` em `classes`
- **Função:** Associa a modalidade às turmas que a oferecem.

## Índices

| Campo                          | Tipo de Índice | Único? | Descrição                                           |
| ------------------------------ | -------------- | ------ | --------------------------------------------------- |
| Nenhum definido | —              | —      | Não há índices além do `_id` gerado automaticamente pelo MongoDB |

## Exemplo de Documento

```json
{
  "_id": "64cfa26e15e4c2a9a1f0b789",
  "name": "Judô",
  "description": "O Judô é uma arte marcial de origem japonesa, criada em 1882 pelo mestre Jigoro Kano. Ele desenvolveu o Judô a partir de técnicas do Jiu-Jitsu tradicional, buscando transformar uma arte de combate em uma prática que prioriza a disciplina, o respeito e o desenvolvimento físico e mental. Reconhecido como esporte olímpico desde 1964, o Judô vai muito além da competição. Ele promove valores como respeito, disciplina, autocontrole e perseverança. Além de melhorar a força, flexibilidade e condicionamento físico, o Judô é uma ferramenta para o desenvolvimento pessoal, seja para crianças, jovens ou adultos.",
  "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGNgYAAAAAIAAeIhvDMAAAAASUVORK5CYII=",
  "status": true,
  "createdAt": "2025-08-11T14:00:00.000Z",
  "updatedAt": "2025-08-11T14:30:00.000Z"
}
```

## Observações

- O campo `image` deve conter um caminho válido para exibição da imagem na aplicação.
- A descrição (`description`) deve ser clara e objetiva para uso em páginas de exibição.
