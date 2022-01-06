# Chatbox

- ### Descrição 
    Ao aproximar-se do término do curso, é necessário realizar o trabalho de conclusão de curso: [TCC](https://comoelaborarumtcc.net/), mentorado por um educador. Para melhorar a comunicação entre os usuários, a plataforma disponibiliza um chatbox.

- ### Atores 
    - Estudante
    - Orientador
    - ADM

- ### Pré-requisitos 
    - Ter cadastro na plataforma.
    - Estar logado na plataforma.

- ### Pós-condições
    - Ter feito uma conexão a plataforma com sucesso.
    
- ### Sequência básica
    ```sh
    1 - Ator entra no site
    2 - Preenche usuário e senha
    3 - Seleciona o botão de login
    4 - Seleciona botão de chatbox
    5 - Seleciona destinatário da mensagem
    6 - Mensagem enviada com sucesso
    ```
    
- ### Sequências alternativas ou de exceção

    ```sh
    1.1 - Erro da plataforma ao entrar no site, encaminhado para a tela de espera/contato suporte
    2.1 - Erro da plataforma ao redirecionar, encaminhado para a tela de espera/contato suporte
    3.1 - Erro da plataforma ao redirecionar, encaminhado para a tela de erro 5XX
    4.1 - Erro na API ao validar os dados, encaminhado para a tela de espera/contato suporte
    5.1 - Dados inseridos são incorretos, aparecendo a mensagem de dados inválidos
    ```