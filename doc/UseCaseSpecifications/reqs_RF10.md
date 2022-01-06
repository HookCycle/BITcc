# Editar Perfil

- ### Descrição 
    Para melhorar a experiência de uso da plataforma, existe um perfil do orientador, onde ele pode preencher as informações referentes a área de pesquisa/atuação, facilitando a busca por um orientador em uma área de interesse, por parte dos estudantes.

- ### Atores 
    - Educador

- ### Pré-requisitos 
    - Estar logado na plataforma.
    - Ser um educador.

- ### Pós-condições
    - Sucesso na visualização do próprio perfil.
    - Sucesso no preenchimento de informações do perfil.
    
- ### Sequência básica
    ```sh
    1 - Ator entra no site
    2 - Ator preenche seus dados de login
    3 - Ator seleciona o botão de login
    4 - Ator seleciona o botão de perfil
    5 - Ator seleciona botão de editar
    6- Ator edita as informações do perfil
    7- Ator seleciona botão salvar
    ```
    
- ### Sequências alternativas ou de exceção

    ```sh
    1.1 - Erro da plataforma ao entrar no site, encaminhado para a tela de espera/contato suporte
    2.1 - Erro da plataforma ao redirecionar, encaminhado para a tela de espera/contato suporte
    3.1 - Erro da plataforma ao redirecionar, encaminhado para a tela de erro 5XX
    4.1 - Dados inseridos no login são incorretos, aparecendo a mensagem de dados inválidos
    ```