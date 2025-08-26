[< Back](../)

# Módulo - `admin`

## [Cadastrar novo administrador](../../../backend/modules/admin/create-admin/)
Este endpoint permite que **administradores autenticados** e com `role` **admin** cadastrem um novo administrador no sistema.

## [Buscar administrador por ID](../../../backend/modules/admin/find-one-admin/)
Este endpoint permite que **administradores autenticados** busquem um administrador específico pelo seu ID.

## [Buscar administradores cadastrados](../../../backend/modules/admin/find-all-admin/)
Este endpoint permite que **administradores autenticados** busquem todos os administradores cadastrados no sistema. A listagem utiliza paginação para otimizar o desempenho e evitar retorno excessivo de dados.

## [Login do administrador](../../../backend/modules/admin/login-admin/)
Este endpoint permite que um **administrador** realize login no sistema informando seu e-mail e senha. Em caso de sucesso, será gerado um **token JWT** que será armazenado em um **cookie HTTP-only** e deverá ser utilizado para acessar endpoints protegidos.

## [Inativar administrador](../../../backend/modules/admin/inactive-admin/)
Este endpoint permite que **administradores autenticados** inativem um administrador do sistema com base no seu ID. Um administrador inativado não poderá realizar login nem acessar endpoints protegidos.

## [Reativar administrador](../../../backend/modules/admin/reactive-admin/)
Este endpoint permite que **administradores autenticados** reativem um administrador do sistema com base no seu ID. Um administrador reativado volta a poder realizar login e acessar endpoints protegidos.

## [Atualizar dados do administrador](../../../backend/modules/admin/update-admin/)
Este endpoint permite que um **administrador autenticado** atualize seus dados no sistema.