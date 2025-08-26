[< Back](../)

# Módulo - `modalities`

## [Cadastrar nova modalidade](../../../backend/modules/modalities/create-modality/)
Este endpoint permite que **administradores autenticados** com `role` **admin** cadastrem uma nova modalidade na academia. Cada modalidade contém nome, descrição e imagem obrigatórios, sendo essencial para vinculação a professores e planos.

## [Buscar modalidade por ID](../../../backend/modules/modalities/find-one-modality/)
Este endpoint permite que **qualquer usuário**, sem necessidade de autenticação, busque uma modalidade específica através do seu **ID**.

## [Buscar modalidades](../../../backend/modules/modalities/find-all-modalities/)
Este endpoint permite que **qualquer usuário**, sem necessidade de autenticação, busque as modalidades cadastradas na academia. Suporta **paginação** e **filtro por status**.

## [Editar modalidade](../../../backend/modules/modalities/update-modality/)
Este endpoint permite que **administradores autenticados** com `role` **admin** editem os dados de uma modalidade já cadastrada. A edição pode ser **parcial ou total**, permitindo atualizar apenas nome, descrição ou imagem.