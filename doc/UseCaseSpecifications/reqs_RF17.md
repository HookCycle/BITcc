# Filtro de Busca
    
- ### Descrição
    O objetivo é apresentar lista de professores ou alunos seguido um determinado critério, facilitando a busca de informações específicas, como professores que atuam em determinada área, professores que estão disponíveis para orientar um aluno, alunos que estão fazendo o Projeto de Conclusão de curso, entre outros. 

- ### Atores
    - Estudante
    - Educador

- ### Pre-Requisitos
    - Está devidamente logado no sistema.
    - Clicar em alguma opção que contem filtro (Alunos Mentorados; Professores; etc)
    - Clicar no colapsable os parametros de busca

- ### Pós-Condições
    - É dado o resultado do filtro de busca.
    

- ### Sequencia Básica
    ```sh
    1 - Clica em um dos icones do Dashbord que queira filtrar
    2 - Seleciona qual filtro deseja aplicar ou digitar sua busca
    3 - Confirma os parametros de busca
    ```

- ### Sequências alternativas ou de exceção
    ```sh
    1.1 - O dashBord não foi carregado, encaminhado para tela de aguarde/suporte
    1.2 - Não há registos desse usuário, o sistema é redirecionado para área de login;
    3.1 - Sem áres de conhecimento cadastradas pelos professores.
    ```