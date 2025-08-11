[< Back](../)

# Collections do banco de dados

## [`admin`](../../backend/collections/admin/)
Armazena os dados dos administradores da academia que possuem acesso ao sistema. Contém informações de identificação, credenciais de acesso e status de ativação.

## [`modalities`](../../backend/collections/modalities/)
Armazena as modalidades oferecidas pela academia, incluindo informações como nome, descrição, imagem ilustrativa e status de ativação.

## [`plans`](../../backend/collections/plans/)
Armazena os planos disponíveis na academia, definindo período, quantidade de períodos, valor, modalidade associada e status. Cada plano está vinculado a uma modalidade e pode ser associado a vários atletas.

## [`teachers`](../../backend/collections/teachers/)
Armazena os dados dos professores da academia, incluindo informações pessoais, contatos, valor da hora/aula, modalidades que ministram e status ativo/inativo.

## [`athletes`](../../backend/collections/athletes/)
Armazena os dados dos atletas matriculados na academia, incluindo informações pessoais, responsáveis legais (quando aplicável), métodos de pagamento, plano contratado e status de atividade.

## [`classes`](../../backend/collections/classes/)
Armazena as informações das turmas oferecidas pela academia, incluindo a modalidade, professor responsável, horário, faixa etária indicada, limite máximo de alunos, dias da semana em que a turma ocorre, imagem representativa e status da turma.

## [`visits`](../../backend/collections/visits/)
Armazena informações sobre visitantes da academia que não são atletas matriculados, incluindo seus dados pessoais, responsáveis (quando aplicável), quantidade de visitas permitidas e status de atividade.

## [`payments`](../../backend/collections/payments/)
Registra os pagamentos realizados pelos atletas, incluindo o modo de pagamento, a data do pagamento, o atleta associado e o plano adquirido.