# Deletar Conta
- ### Descrição 
    O usuário que possuir uma conta, terá a opção de deletar a mesma durante o uso da plataforma. 

- ### Atores 
    - Estudante
    - Educador

- ### Pré-condições
    - O indivíduo precisa estar logado na sua conta.
 

- ### Pós-condições
    - Conta deletada com sucesso
    
- ### Sequência básica
    ```sh
    1 - Ator logado clicar na opção de editar perfil
    2 - Nessa tela a opção de deletar sua conta
    3 - O ator confirma a ação clicando no botão de deletar conta
    4 - É dada um alerta de confirmação que sua conta será deletada
    5 - O ator confirma a ação
    4 - Conta deletada com sucesso
    ```
- ### Sequências alternativas ou de exceção

    ```sh
    1.1 - Erro da plataforma ao clicar na opção de editar perfil, encaminhado para a tela de espera/contato suporte
    4.1 - Erro ao confirmar a ação de deletar conta, encaminhado para a tela de espera/contato suporte
    ```