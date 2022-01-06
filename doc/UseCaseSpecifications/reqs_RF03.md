# Logoff
- ### Descrição 
    O usuário após estar logado, poderá realizar o logoff da plataforma

- ### Atores 
    - Estudante
    - Educador

- ### Pré-condições
    - Qualquer indivíduo que for fazer logoff, precisa necessariamente estar logado na plataforma.
 

- ### Pós-condições
    - Logoff realizado com sucesso
    
- ### Sequência básica
    ```sh
    1 - Ator logado clicar na opção de realizar logoff
    2 - E informado por um alerta que está realizando logoff e pergunta se é isso que deseja
    3 - O ator confirma a ação
    4 - Logoff realizado com sucesso
    ```
    
- ### Sequências alternativas ou de exceção

    ```sh
    1.1 - Erro da plataforma ao clicar na opção de logoff, encaminhado para a tela de espera/contato suporte
    4.1 - Erro ao confirmar o Logoff, encaminhado para a tela de espera/contato suporte
    ```