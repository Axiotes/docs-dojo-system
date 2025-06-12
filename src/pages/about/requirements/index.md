[< Back](../)

# Requisitos

## Visualização de Informações
O sistema deve permitir que novos usuário (não cadastrados) visualizem informações essenciais sobre a academia, incluindo:
- Lista de professores e suas especializações
- Modalidades disponíveis (ex: judô, jiu-jitsu, boxe, entre outros)
- Horários e dias das aulas
- Faixa etária recomendada para cada turma
- Planos oferecidos (mensal, trimestral, anual, entre outros)

Essas informações devem estar organizadas de forma clara e acessível, facilitando o entendimento por parte de visitantes interessados. O objetivo é permitir que esses usuários possam:
- Agendar uma visita à academia
- Realizar a inscrição em uma ou mais turmas

## Inscrição de Alunos (Online e Presencial)
O sistema deve permitir a inscrição de novos alunos tanto de forma **presencial** quanto **online**, atendendo aos seguintes critéios:

1. **Escolha de Turma e Plano**  
Em ambos os modos de inscrição, o aluno deve:
- Escolher uma turma (correspondente a sua faixa etária)
- Selecionar um plano de pagamento

2. **Fornecer Dados para Inscrição**
- **Caso aluno menor de 18 anos**  
    É obrigatório o fornecimento dos dados do responsável legal (obrigatoriamente maior de 18 anos) e do atleta. O sistema deve garantir que o responsável seja maior de 18 anos e que o atleta tem idade correspondente a turma selecionada. Os dados informados incluem:
        - Nome completo do responsável e atleta
        - CPF do do responsável e atleta
        - Data de nacimento do do responsável e atleta
        - Email do do responsável
- **Caso atleta maior de 18 anos**  
    O sistema deve garantir que a turma selecionada é para maior de 18 anos. Devem ser fornecidos apenas os dados aluno:
        - Nome completo
        - CPF
        - Email
        - Data de nascimento

3. **Criação de Acesso ao Portal**
    - **Inscrição Online**  
    O aluno criará uma senha no momento da inscrição, que será utilizada para acessar o portal do aluno
    - **Inscrição presencial**  
    Após a confirmação do pagamento, o sistema enviará um email automático para o aluno, contendo um link para criação de sua senha de acesso ao portal

## Agendamento de Visitas a Aulas
O sistema de permitir que usuários agendem **até 3 visitas a aulas**, para que possam conhecer a academia e as modalidades oferecidas antes de realizar a matrícula. Para realizae o agendamento é necessário seguir os seguintes passos:

1. **Escolha de Turma**  
O usuário deve selecionar uma turma específica, respeitando a faixa etária permitida
2. **Fornecer Dados Necessários**
- **Visitante menor de 18 anos**  
Deve ser informado os dados de um responsável legal (obrigatoriamente maior de 18 anos) e do atleta visitante, sendo eles:
    - Nome completo de ambos
    - CPF de ambos
    - Data de nascimento de ambos
    - Email do responsável
- **Visitante maior de 18 anos**  
Deve ser informados apenas os dados do visitante:
    - Nome completo
    - CPF
    - Email
    - Data de nascimento
3. **Confirmação de Presença**  
No momento da aula agendada, a presença do visitante deverá ser confirmada, para que a visita seja oficialmente contabilizada

## Cadastro de Responsáveis e Retirada de Alunos Menores
Para garantir a segurança dos alunos menores de idade, o sistema deve seguir as seguintes regras:

1. **Retirada Autorizada**  
Apenas responsáveis previamente cadastrados no sistema poderão realizar a retirada de alunos menores da academia

2. **Cadastro de Múltiplos Responsáveis**  
Um único aluno poderá ter múltiplos responsáveis

## Acesso ao Portal do Aluno
O sistema deve permitir que alunos acessem o portal do aluno utilizando email e senha fornecido no momendo da inscrição a turma. O sistema deve validar as credenciais e garantir privacidade e segurança, pois o portal disponibiliza informações exclusivas do aluno

## Gerenciamento de Dados Pessoais no Portal do Aluno
O sistema deve permitir que o aluno, ao acessar o Portal do Aluno, possa visualizar com segurança e privacidade todas as informações pessoais fornecidas no momento da inscrição, incluindo nome completo, CPF, email e data de nascimento.

Deverá ser possível editar, complementar ou adicionar novas informações pessois, desde que os dados se mantenham válidos aos critérios exigidos para manter uma matrícula ativa, como:
- Idade do aluno deve continuar compatível com a turma inscrita
- O email deve ser válido e único no sistema
- O CPF deve permanecer válido e único