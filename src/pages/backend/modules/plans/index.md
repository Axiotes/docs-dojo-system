[< Back](../)

# Módulo - `plans`

## [Cadastrar novo plano](../../../backend/modules/plans/create-plan/)
Este endpoint permite que **administradores autenticados** com `role` **admin** cadastrem um novo plano na academia. O plano deve estar vinculado a uma modalidade ativa para ser criado com sucesso.

## [Buscar plano por ID](../../../backend/modules/plans/find-one-plan/)
Este endpoint permite que **qualquer usuário**, sem necessidade de autenticação, busque um plano específico através do seu ID.

## [Buscar planos](../../../backend/modules/plans/find-plans/)
Este endpoint permite que **qualquer usuário**, sem necessidade de autenticação, busque todos os planos cadastrados na academia. A listagem utiliza **paginação** e suporta **filtro por status**.