# Relatorio de Especificacoes de casos de uso do SITCC

## Engenharia de Sofware - turma ES

### Integrantes
- Bruna Lins
- Lucas Hellanio
- Pedro Gabriel Lima
- Silas Nunes

## Requisitos Funcionais

### Lista de Requisitos Funcionais

- RF01 - Cadastrar
- RF02 - Login
- RF03 - Logoff
- RF04 - Deletar Conta
- RF05 - Esqueci a senha
- RF06 - ?????
- RF07 - FAQ
- RF08 - ?????
- RF09 - ?????
- RF10 - Editar Perfil
- RF11 - ?????
- RF12 - ?????
- RF13 - Visualizar o Próprio Perfil
- RF14 - ?????
- RF15 - ?????
- RF16 - ?????
- RF17 - ?????
- RF18 - Calendário no Dashboard
- RF19 - Chatbox
- .....


### Diagrama de Casos de Uso

```plantuml
@startuml
left to right direction
actor Usuario as u
package Atores {
  actor Estudante as e
  actor "Educador" as or
  actor "ADM" as Ad
}
package Usuário {
  usecase "Fazer Cadastro" as RF01
  usecase "Login" as RF02
  usecase "Logoff" as RF03
  usecase "Esqueceu a senha" as RF04
  usecase "Apagar conta" as RF05
  usecase "Contatar Suporte" as RF06
  usecase "FAQ" as RF07
  usecase "Upload de Arquivos" as RF08
}
package Admin{
  usecase "Cadastrar Banca" as RF09
}
package Educador{
  usecase "Editar Perfil" as RF10
  usecase "Cadastrar Link Sala" as RF11
  usecase "Ver Quantidade de Orientandos" as RF12
  usecase "Visualizar Próprio Perfil" as RF13
  usecase "Fazer Perfil Educacional" as RF14
  usecase "Alimentar Feed de Notícias" as RF15
  usecase "Ver Quantas Salas Virtuais Possui" as RF16
}
```

### Especificicações de Casos de Uso

- [RF01](UseCaseSpecifications/reqs_RF01.md)
- [RF02](UseCaseSpecifications/reqs_RF02.md)
- [RF03](UseCaseSpecifications/reqs_RF03.md)
- [RF04](UseCaseSpecifications/reqs_RF04.md)
- [RF05](UseCaseSpecifications/reqs_RF05.md)
- ....


## Requisitos não-funcionais

### Usabilidade

... Segundo ... Autor ...

## Referências

[1] Autor ...

[2] Autor ...

[3] React ...

[4] PlantUML ...

