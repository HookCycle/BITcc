# Ver quantidade de orientandos

- ### Descrição 
    O caso inicia quando o usuário decide verificar a quantidade de orientandos presente na plataforma, dessa forma ele seleciona do sistema “ver orientandos” a fim de obter a lista de orientandos cadastradas na plataforma.

- ### Atores 
    - Educador

- ### Pré-requisitos 
    - Ser usuário cadastrado na plataforma.
    - E-mail ecomp, para realização do cadastro.

- ### Pós-condições
    - Validações dos dados feita com sucesso.
    - Orientandos cadastrados são listados pelo sistema.
    
- ### Sequência básica
    ```sh
    1 - Ator seleciona "ver orientandos"
    2 - os dados são validados pelo sistemas
    3 - Orientandos cadastrados são listados
    ```
    
- ### Sequências alternativas ou de exceção

    ```sh
    1.1 - Erro da plataforma ao selecionar a opção desejada, encaminhado para a tela de espera/contato suporte
    2.1 - Erro da plataforma ao validar dados, encaminhado para a tela de espera/contato suporte
    3.1 - Erro ao confirmar a requisição, encaminhado para a tela de espera/contato suporte
    3.2 - Erro ao listar orientandos cadastrados, encaminhado para a tela de espera/contato suporte
    ```
