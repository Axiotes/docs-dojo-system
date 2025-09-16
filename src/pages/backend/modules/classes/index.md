[< Back](../)

# Módulo - `classes`

## [Cadastrar nova turma](../../../backend/modules/classes/create-class/)
Este endpoint permite que **administradores autenticados** com `role` **admin** cadastrem uma nova turma na academia. Cada turma deve conter informações obrigatórias, incluindo modalidade, professor responsável, horários, faixa etária, limite de atletas, dias da semana e imagem representativa.

## [Buscar turma por ID](../../../backend/modules/classes/find-class-by-id/)
Este endpoint permite que **qualquer usuário** consulte as informações de uma turma específica. Caso o usuário esteja autenticado com `role: admin`, são retornadas informações adicionais, como lista de alunos e dados pessoais do professor.

## [Listar turmas com paginação e filtros](../../../backend/modules/classes/find-all-classes/)
Este endpoint permite que **qualquer usuário** consulte a lista de turmas disponíveis, com suporte a paginação e filtros por status, modalidade, idade, horário e dias da semana.
Caso o usuário esteja autenticado com `role: admin`, são retornadas informações adicionais, como lista de alunos e dados pessoais do professor.