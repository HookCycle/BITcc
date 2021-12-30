import { useContext } from "react";
import { FormContext } from "../FormContext";
import "./style.css";

export default function ConfirmInfo() {
  const { backPage } = useContext(FormContext);

  function confirmSignUp() {}

  return (
    <div className="confirm-content">
      <h3>Verifique seus dados</h3>
      <div className="data-view">
        <div className="left">
          <h4>Info pessoal</h4>
          <p>Nome de ususário: {}</p>
          <p>E-mail: {}</p>
          <p>Nome: {}</p>
          <p>Data de nascimento: {}</p>
          <p>Gênero: {}</p>
          <p>Telefone: {}</p>
        </div>
        <div className="right">
          <h4>Info profissional</h4>
          <p>Profissão: {}</p>
          <p>Especialidade: {}</p>
          <p>CRM: {}</p>
          <p>Distância de atendimento: {}km</p>
          <h4>Endereço</h4>
          <p>
            Rua {"nome"}, {"nume"}, {"bairro"}, {"cidade"},{"estado"}
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
