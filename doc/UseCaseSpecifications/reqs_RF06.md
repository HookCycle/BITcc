# Contatar suporte

- ### Descrição 
    Em caso de erros na plataforma o usuário poderá contatar o suporte na página indicada para informar o erro em questão e receber o auxílio necessário.

- ### Atores 
    - Administrador
    - Estudante
    - Educador

- ### Pré-requisitos 
    - Usuário logado no sistema
    - E-mail ecomp para realização de contato.

- ### Pós-condições
    - Validações de reclamação feita com sucesso.
    - Suporte contactado.
    
- ### Sequência básica
    ```sh
    1 - Ator logado verifica erro no sistema
    2 - Seleciona "contatar suporte"
    3 - Enviar por escrito qual o erro encontrado/ razão do contato
    4 - A requisição é validada pelo sistema
    5 - Suporte contactado com sucesso
    ```
    
- ### Sequências alternativas ou de exceção

    ```sh
    1.1 - Erro da plataforma ao entrar no site, encaminhado para a tela de espera/contato suporte
    2.1 - Erro da plataforma ao selecionar opção desejada, encaminhado para a tela de espera/contato suporte
    3.1 - Erro da plataforma ao redirecionar mensagem, encaminhado para a tela de espera/contato suporte
    4.1 - Erro ao confirmar a requisição, encaminhado para a tela de espera/contato suporte
    ```
