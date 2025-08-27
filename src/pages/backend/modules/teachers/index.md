[< Back](../)

# Módulo - `teachers`

## [Cadastrar novo professor](../../../backend/modules/teachers/create-teacher/)
Este endpoint permite que **administradores autenticados** com `role` **admin** cadastrem um novo professor na academia. Cada professor contém informações pessoais, incluindo imagem de perfil obrigatória. A imagem enviada é processada, armazenada no banco de dados como **Buffer** e convertida para **Base64** na resposta.