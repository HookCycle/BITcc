# Upload de arquivo

- ### Descrição 
    O usuário pode fazer o upload de um ou mais arquivos durante o desenvolvimento do seu TCC na área especificada na plataforma, bem como acessar arquivos que o educador fez upload.

- ### Atores 
    - Estudante
    - Educador

- ### Pré-requisitos 
    - Usuário logado.
    - Arquivo que siga as normas da plataforma (ex: tamanho, tipo, etc)

- ### Pós-condições
    - Arquivo validado pelo sistema.
    - Upload concluido.
    
- ### Sequência básica
    ```sh
    1 - Ator estar logado na plataforma
    2 - Seleciona fazer "upload de arquivo".
    3 - O arquivo é aprovado pela segurança do sistema.
    4 - Upload concluido.

    ```
    
- ### Sequências alternativas ou de exceção

    ```sh
    1.1 - Erro da plataforma ao entrar no site, encaminhado para a tela de espera/contato suporte
    2.1 - Erro da plataforma ao escolher um arquivo, encaminhado para a tela de espera/contato suporte
    3.1 - Erro da plataforma ao validar upload, encaminhado para a tela de espera/contato suporte
    ```
