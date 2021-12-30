# Cadastro

- ### Descrição 
    Ao aproximar-se do término do curso, é necessário realizar o trabalho de conclusão de curso: [TCC](https://comoelaborarumtcc.net/), mentorado por um educador. Para se fazer uso da plataforma é preciso realizar um cadastro de acordo com suas especificações, utilizando a plataforma de forma distinta em decorrência da sua posição acadêmica (estudante ou educador). Será necessário para o cadastro como aluno, o nome completo, E-mail ecomp, CPF e senha. Para o cadastro na posição de educador, haverá um campo adicional que solicitará o código do educador.

- ### Atores 
    - Estudante
    - Educador

- ### Pré-requisitos 
    - Vínculo com uma instituição de ensino superior (UPE).
    - E-mail ecomp, para realização do cadastro.

- ### Pós-condições
    - Validações dos dados feita com sucesso.
    - Cadastro realizado.
    
- ### Sequência básica
    ```sh
    1 - Ator entrar no site
    2 - Seleciona realizar cadastro
    3 - Selecione o tipo de cadastro que deseja realizar (Estudante, Educador)
    4 - Preenche os dados referente ao tipo de cadastro escolhido
    5 - Os dados são validados pela API
    6 - Cadastro realizado com sucesso
    ```
    
- ### Sequências alternativas ou de exceção

    ```sh
    1.1 - Erro da plataforma ao entrar no site, encaminhado para a tela de espera/contato suporte
    2.1 - Erro da plataforma ao redirecionar, encaminhado para a tela de espera/contato suporte
    3.1 - Erro da plataforma ao redirecionar, encaminhado para a tela de espera/contato suporte
    5.1 - Erro na API ao validar os dados, encaminhado para a tela de espera/contato suporte
    6.1 - Dados inseridos são incorretos, redirecionado para o passo 4
    6.2 - Erro ao confirmar o cadastro, encaminhado para a tela de espera/contato suporte
    ```
