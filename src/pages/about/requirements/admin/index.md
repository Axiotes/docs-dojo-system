[< Back](../)

# Requisitos de Administradores

## Presença de Alunos e Visitas
O sistema deve permitir a marcação da presença de alunos e visitantes. Dessa forma, permitindo a ter conhecimento sobre frequência nas aulas de todos os alunos e garantindo que uma visita agendada foi realizada.

## Agenda e Cronograma
O sistema deve disponibilizar um cronograma mensal e semanal, ele deve incluir:

- Informações sobre as turmas em seus respectivos dias de aula
- Visitas agendadas para cada dia
- Eventos agendados

## Indicadores de Desempenho
O sistema deve disponibilizar indicadores de desempenho sobre diferentes campos da academia, como turmas, planos, modalidades, entre outros. Possibilitando aos administradores terem uma melhor visão sobre o desempenho da academia atualmente e no passado, ajudando-los a tomar melhores decisões.

#### Indicadores Gerais
- Total de alunos ativos
- Média de frequência por modalidade
- Taxa de cancelamento
- Receita mensal e anual
- Taxa de visitas convertidas em alunos

#### Indicadores por Turma
- Frequência média da turma
- Total de visitas recebidas mensalmente
- Total de alunos ativos e inativos

#### Indicadores por Plano
- Número de alunos
- Receita gerada
- Total de cancelamentos

## Gerenciamento de Turmas
O sistema deve permitir um controle total sobre todas as turmas disponibilizadas de cada modalidade. Cada turma deve ter obrigatoriamente os seguintes campos:

- Modalidade
- Professor
- Horário de início e término
- Faixa etária
- Quantidade máxima de alunos

Sendo possível cadastrar, editar e visualizar suas informações de forma simple e fácil. Além disso, deve ser possível gerar relatórios sobre as turmas, incluindo a lista de aluno e indicadores de desempenho de cada turma.

## Gerenciamento de Professores
O sistema deve permitir um controle total sobre todos os professores que fazem parte da academia. Cada professor deve ter obrigatoriamente os seguintes campos:
- Nome
- CPF
- Email
- Foto
- Hora aula

Sendo possível cadastrar, editar e visualizar suas informações de forma simple e fácil.

## Gerenciamento de Alunos
O sistema deve permitir um controle total sobre todos os alunos que fazem parte da academia. Alunos maiores de 18 anos, devem ter obrigatoriamente os seguintes campos:
- Nome
- CPF
- Email
- Plano
- Data de Nascimento

Já os alunos menores de 18 anos, devem ter obrigatoriamente os seguintes campos:
- Nome do aluno
- Nome do responsável
- CPF do aluno
- CPF do responsável
- Email do responsável
- Plano
- Data de Nascimento

Sendo possível cadastrar, editar e visualizar suas informações de forma simple e fácil. Além disso, deve ser disponibilizado informações como status do pagamento, frequência, data de cadastro na academia e faixa/progressão do aluno

## Gerenciamento de Visitas
O sistema deve disponibilizar o controle e agendamentos de visitas. Cada visitantes pode agendar até 3 visitas, para isso devem escolher uma turma, data, horário e fornecer as seguintes informações:
- Nome
- CPF
- Email
- Data de nascimento

Visitas menores de 18 anos devem fornecer as seguintes informações sobre seus responsáveis:
- Nome
- CPF
- Email
- Data de nascimento

#### Confirmação de presença
Para que seja contabilizado a quantidade de vezes de um visitante na academia, é necessário que seja marcada a sua presença. Dessa forma, podendo contabilizar e ter controle sobre os visitantes.