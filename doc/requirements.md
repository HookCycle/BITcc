# Relatorio de Especificacoes de casos de uso do BITCC

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
- RF06 - Contatar Suporte
- RF07 - FAQ
- RF08 - Upload de Arquivos
- RF09 - Cadastrar Banca
- RF10 - Editar Perfil
- RF11 - Cadastrar link da sala virtual.
- RF12 - Ver Quantidade de Orientandos
- RF13 - Visualizar o Próprio Perfil
- RF14 - Fazer Perfil Educacional
- RF15 - Alimentar Feed de Notícias
- RF16 - Ver Quantas Salas Virtuais Possui
- RF17 - Filtro de Busca
- RF18 - Calendário no Dashboard
- RF19 - Chatbox


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
package Plataforma{
  usecase "Filtro de Busca" as RF17
  usecase "Calendário no Dashboard" as RF18
  usecase "Chatbox" as RF19
}
  u --> RF01
  u --> RF02
  u --> RF03
  u --> RF04
  u --> RF05
  u --> RF06
  u --> RF07
  u --> RF08
u <|-[#0000FF]- e
u <|-[#0000FF]- Ad
u <|-[#0000FF]- or
  Ad --> RF09
  or --> RF10
  or --> RF11
  or --> RF12
  or --> RF13
  or --> RF14
  or --> RF15
  or --> RF16
  u --> RF17
  u --> RF18
  u --> RF19
@enduml
```

### Especificicações de Casos de Uso

- [RF01](UseCaseSpecifications/reqs_RF01.md)
- [RF02](UseCaseSpecifications/reqs_RF02.md)
- [RF03](UseCaseSpecifications/reqs_RF03.md)
- [RF04](UseCaseSpecifications/reqs_RF04.md)
- [RF05](UseCaseSpecifications/reqs_RF05.md)
- [RF06](UseCaseSpecifications/reqs_RF06.md)
- [RF07](UseCaseSpecifications/reqs_RF07.md)
- [RF08](UseCaseSpecifications/reqs_RF08.md)
- [RF09](UseCaseSpecifications/reqs_RF09.md)
- [RF10](UseCaseSpecifications/reqs_RF10.md)
- [RF11](UseCaseSpecifications/reqs_RF11.md)
- [RF12](UseCaseSpecifications/reqs_RF12.md)
- [RF13](UseCaseSpecifications/reqs_RF13.md)
- [RF14](UseCaseSpecifications/reqs_RF14.md)
- [RF15](UseCaseSpecifications/reqs_RF15.md)
- [RF16](UseCaseSpecifications/reqs_RF16.md)
- [RF17](UseCaseSpecifications/reqs_RF17.md)
- [RF18](UseCaseSpecifications/reqs_RF18.md)
- [RF19](UseCaseSpecifications/reqs_RF19.md)


## Requisitos não-funcionais

### Usabilidade

- O sistema de Atendimento a Clientes será construído para rodar em ambiente web. Deverá possui um design responsivo
- Os usuários poderam operar no sistema de forma independente.

### Confiabilidade

- o sistema deverá ter alta disponibilidade

## Referências

[1] [PlantUML](https://plantuml.com/)
