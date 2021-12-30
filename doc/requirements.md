# Relatorio de Especificacoes de casos de uso do SITCC

## Engenharia de Sofware - turma ES

### Integrantes
- Lucas Hellanio


## Requisitos Funcionais

### Lista de Requisitos Funcionais

- RF01 - Cadastrar
- RF02 - ??????
- RF03 - ?????
- RF04 - ?????
- RF05 - ?????
- RF06 - ?????
- .....


### Diagrama de Casos de Uso

```plantuml
@startuml
left to right direction
actor Guest as g
package Professional {
  actor Estudant as c
  actor "Educator" as fc
}
package Restaurant {
  usecase "Register" as RF01
  usecase "Login" as RF02
  usecase "Logoff" as RF03
  usecase "Forget password" as RF04
}
fc --> RF04
g --> RF01
g --> RF02
g --> RF03
@enduml
```

### Especificicações de Casos de Uso

- [RF01](DOC/reqs_RF01.md)
- [RF02](reqs_RF02.md)
- [RF03](reqs_RF03.md)
- [RF04](reqs_RF04.md)
- [RF05](reqs_RF05.md)
- ....


## Requisitos não-funcionais

### Usabilidade

... Segundo ... Autor ...

## Referências

[1] Autor ...

[2] Autor ...

[3] React ...

[4] PlantUML ...

