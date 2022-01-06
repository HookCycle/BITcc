# Forgot password
- ### Descrição 
    Para qualquer caso de perda de senha, será possível a recuperação da mesma via e-mail. Uma nova senha será enviada para recuperar o acesso a plataforma.

- ### Atores 
    - Estudante
    - Educador

- ### Pré-condições
    - O indivíduo precisa necessariamente ter acesso ao email cadastrado na plataforma.
 

- ### Pós-condições
    - Email de recuperação de senha enviado
    - Login na plataforma com a nova senha realizado com sucesso
    
- ### Sequência básica
    ```sh
    1 - Ator acessa a plataforma
    2 - Clica na opção (esqueci minha senha)
    3 - O ator digita o email de recuperação
    4 - E dado um alerta de confirmacao que o email de recuperação foi enviado
    5 - O ator vai ate seu email segue os passos e gera sua nova senha
    6 - Nova senha gerada sucesso
    ```
    
- ### Sequências alternativas ou de exceção

    ```sh
    1.1 - Erro ao acessar a plataforma, encaminhado para a tela de espera/contato suporte
    3.1 - Email não é válido, digite novamente
    5.1 - O email de recuperação não é enviado
    6.1 - Erro ao gerar nova senha, encaminhado para a tela de espera/contato suporte
    ```