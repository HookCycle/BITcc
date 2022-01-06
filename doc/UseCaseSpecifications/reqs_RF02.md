# Login
- ### Descrição 
    O usuário que possuir um cadastro, poderá realizar o login na plataforma e usufruir de todas as suas funcionalidades, também será disponibilizado o uso de funções específicas reservadas para cada tipo de usuário.

- ### Atores 
    - Estudante
    - Educador

- ### Pré-condições
    - Para fazer login na plataforma, é necessário um cadastro individual;
 

- ### Pós-condições
    - Validações dos dados feita com sucesso
    - Login realizado com sucesso
    
- ### Sequência básica
    ```sh
    1 - Ator entrar no site
    2 - Preenche os dados nos inputs referente a conta em que irá de logar
    3 - Os dados são validados pela API
    4 - Login realizado com sucesso
    ```
    
- ### Sequências alternativas ou de exceção

    ```sh
    1.1 - Erro da plataforma ao entrar no site, encaminhado para a tela de espera/contato suporte
    3.1 - Erro na API ao validar os dados, encaminhado para a tela de espera/contato suporte
    3.2 - Dados inseridos são incorretos, insira os dados corretos
    6.2 - Erro ao confirmar o Login, encaminhado para a tela de espera/contato suporte
    ```