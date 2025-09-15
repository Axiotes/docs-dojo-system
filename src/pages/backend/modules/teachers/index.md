[< Back](../)

# Módulo - `teachers`

## [Cadastrar novo professor](../../../backend/modules/teachers/create-teacher/)
Este endpoint permite que **administradores autenticados** com `role` **admin** cadastrem um novo professor na academia. Cada professor contém informações pessoais, incluindo imagem de perfil obrigatória. A imagem enviada é processada, armazenada no banco de dados como **Buffer** e convertida para **Base64** na resposta.

## [Buscar professor por ID](../../../backend/modules/teachers/find-teacher-by-id/)
Este endpoint permite que **administradores autenticados** com `role` **admin** consultem informações detalhadas de um professor específico. Usuários sem permissão de admin recebem apenas dados públicos do professor.

## [Listar professores com paginação e filtros](../../../backend/modules/teachers/find-all-teachers/)
Este endpoint permite que **administradores autenticados** com `role` **admin** listem todos os professores cadastrados na academia com informações detalhadas dos professores. Usuários sem permissão de admin recebem apenas dados públicos dos professores. É possível aplicar filtros por `status`, `month (mês)` e `year (ano)` e paginar os resultados.

## [Atualizar professor](../../../backend/modules/teachers/update-teacher/)
Este endpoint permite que **administradores autenticados** com `role` **admin** atualizem parcialmente ou totalmente os dados de um professor já cadastrado na academia. O sistema realiza validações de CPF, e-mail, modalidades ativas e compatibilidade com turmas em andamento.

## [Desativar professor](../../../backend/modules/teachers/deactivate/)
Este endpoint permite que **administradores autenticados** com `role` **admin** desativem um professor na academia, tornando-o indisponível para vinculação em turmas e demais funcionalidades do sistema.

## [Reativar professor](../../../backend/modules/teachers/reactivate/)
Este endpoint permite que **administradores autenticados** com `role` **admin** reativem um professor previamente inativado, tornando-o disponível para vinculação em turmas e demais funcionalidades do sistema.