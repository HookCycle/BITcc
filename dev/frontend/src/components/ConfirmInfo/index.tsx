import { useContext } from "react";
import { useHistory } from "react-router";
import { FormContext } from "../FormContext";
import "./style.css";

export default function ConfirmInfo() {
  const { backPage } = useContext(FormContext);
  const history = useHistory();

  function confirmSignUp() {
    history.push("/");
  }

  return (
    <div className="confirm-content">
      <h3>Verifique seus dados</h3>
      <div className="data-view">
        <div className="left">
          <h4>Info pessoal</h4>
          <p>Nome de ususário: {"jbjj"}</p>
          <p>E-mail: {"jbjj@ecomp.poli.br"}</p>
          <p>Nome: {"Joabe Bezerra de Jesus Júnior"}</p>
          <p>Data de nascimento: {"1984/01/01"}</p>
          <p>Gênero: {"Masculino"}</p>
          <p>Telefone: {"(99)99999-9999"}</p>
        </div>
        <div className="right">
          <h4>Info profissional</h4>
          <p>Tipo de Cadastro: {"Educador"}</p>
          <p>Curso: {"Computacao"}</p>
          <p>Codigo: {"001"}</p>
          <h4>Endereço</h4>
          <p>
            {"Rua dos Arcos"}, {"01"}, {"Poco da panela"}, {"Recife"},{"PE"}
          </p>
        </div>
      </div>
      <div className="buttons">
        <button className="back" onClick={backPage}>
          Voltar
        </button>
        <button className="submit" onClick={confirmSignUp}>
          Cadastrar
        </button>
      </div>
    </div>
  );
}
