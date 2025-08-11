[< Back](../)

# Collection - `admin`

## Descrição

Armazena os dados dos usuários da academia que possuem acesso ao sistema. Contém informações de identificação, credenciais de acesso e status de ativação.

## Estrutura dos Campos

| Campo       | Tipo de Dado | Obrigatório | Valor Padrão | Descrição                                                                                   |
| ----------- | ------------ | ----------- | -------------------- | ------------------------------------------------------------------------------------------- |
| `_id`       | ObjectId     | Sim         | Gerado pelo MongoDB  | Identificador único do usuário                                                              |
| `name`      | String       | Sim         | —                    | Nome completo do usuário                                                                    |
| `email`     | String       | Sim         | —                    | Endereço de e-mail único, validado por regex                                                |
| `password`  | String       | Sim         | —                    | Senha criptografada do usuário                                                              |
| `status`    | Boolean      | Sim         | `true`               | Indica se o usuário está ativo (`true`) ou inativo (`false`)                                |
| `createdAt` | Date         | Sim         | Data atual           | Data de criação do registro (adicionado automaticamente pelo `timestamps: true`)            |
| `updatedAt` | Date         | Sim         | Data atual           | Data da última atualização do registro (adicionado automaticamente pelo `timestamps: true`) |

## Relacionamentos

- Nenhum relacionamento neste schema.

## Índices

| Campo   | Tipo de Índice | Único? | Descrição                                  |
| ------- | -------------- | ------ | ------------------------------------------ |
| `email` | Index          | Sim    | Garante que não existam e-mails duplicados |

## Exemplo de Documento

```json
{
  "_id": "64cfa26e15e4c2a9a1f0b123",
  "name": "João Silva",
  "email": "joao.silva@example.com",
  "password": "$2b$10$eW91cl9wYXNzd29yZF9oYXNo",
  "status": true,
  "createdAt": "2025-08-11T14:00:00.000Z",
  "updatedAt": "2025-08-11T14:30:00.000Z"
}
```

## Observações

- O campo `email` deve seguir o padrão de e-mail válido (`/.+\@.+\..+/`).
- O campo `password` ao ser armazenado no banco deve estar criptografado.
- Alterações de senha e e-mail devem passar por regras de segurança definidas pela aplicação.