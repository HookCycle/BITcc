# Visualizar o próprio perfil

- ### Descrição 
    Para melhorar a experiência de uso da plataforma, existe um perfil do orientador, onde ele pode visualizar as informações referentes a área de pesquisa/atuação dele.

- ### Atores 
    - Educador

- ### Pré-requisitos 
    - Estar logado na plataforma.
    - Ser um educador.

- ### Pós-condições
    - Sucesso na visualização do próprio perfil.
    
- ### Sequência básica
    ```sh
    1 - Ator entra no site
    2 - Ator preenche seus dados de login
    3 - Ator seleciona o botão de login
    4 - Ator seleciona o botão de perfil
    ```
    
- ### Sequências alternativas ou de exceção

    ```sh
    1.1 - Erro da plataforma ao entrar no site, encaminhado para a tela de espera/contato suporte
    2.1 - Erro da plataforma ao redirecionar, encaminhado para a tela de espera/contato suporte
    3.1 - Erro da plataforma ao redirecionar, encaminhado para a tela de erro 5XX
    4.1 - Dados inseridos no login são incorretos, aparecendo a mensagem de dados inválidos
    ```