
    
 # Cadastrar banca de avaliação
  - ### Descrição

    O caso de uso é iniciado quando o administrador começa a cadastrar os membros da banca avaliadora, ou seja, o administrador colocará no sistema os educadores que estarão orientando os estudantes no TCC.

- ### Atores    
     - Administrador
        
- ### Pré-requisitos
   - Estar cadastrado como administrador
   
- ### Pós-condições
     - Validações dos dados feita com sucesso.
     - Cadastro de banca finalizado com sucesso.

- ### Sequência básica

    ```sh
    1 -Seleciona a opção de cadastrar banca avaliadora
    2 - Seleciona quantidade de membros da banca
    3 - Selecionar "adicionar educador"
    4 - Sistema verifica se a quantidade de membros selecionada foi atingida
    5 - Enquanto a quantidade de membros é diferente da quantidade selecionada, a opção de "adicionar educador" permanece ativa.
    6 - Os dados são validados e carregados pelo sistema
    7 - Cadastro de banca finalizado com sucesso
    ```

        
- ### Sequências alternativas ou de exceção
  
    ```sh
    1.1 - Erro da plataforma ao selecionar opção desejada, encaminhado para a tela de espera/contato suporte
    2.1 - Erro da plataforma ao validar quantidade, encaminhado para a tela de espera/contato suporte
    3.1 - Erro da plataforma ao adicionar novos membros , encaminhado para a tela de espera/contato suporte
    4.1 - Erro na validação das quantidades inseridas , encaminhado para a tela de espera/contato suporte
    6.1 - Dados inseridos são incorretos, redirecionado para o passo 4
    7.1 - Erro ao confirmar o cadastro, encaminhado para a tela de espera/contato suporte
        
    ```
