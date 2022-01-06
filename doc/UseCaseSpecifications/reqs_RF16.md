# Ver quantas salas virtuais possui

- ### Descrição 
    As apresentações do trabalho de conclusão de curso podem acontercer de maneira remota, por está com a agenda cheia, é conveniente ter de fácil acesso uma lista com as salas virtuais que o educador deve participar. Com o professor logado, ele clica no botão salas virtuais para ver em quantas salas está cadastrado mostrando o titulo do projeto e data de apresentação.

- ### Atores
    - Educador

- ### Pre-Requisitos
    - Está cadastrado como professor orientador ou banca para um TCC
    - O Educador precisa está logado
    - A data de apresentação de TCC ser posterior ou igual a data atual

- ### Pos-Condições
    - Uma lista com as salas que ele está incluido

- ### Sequencia Básica
    ```sh
    1 - O ator clica no quadro de DashBord 
    2 - O ator clica no botão salas virtuais que está na tela de DasBord
    ```

- ### Sequências alternativas ou de exceção
    ```sh
    1.1 - O dashBord não é carregado, encaminhado para tela de aguarde/suporte
    2.1 - Erro da plataforma ao mostrar a lista, mensagem popUp de Erro, permanece na mesma página
    ```