import { FormEvent, useContext } from "react";
import { useState } from "react";
import { FormContext } from "../FormContext";
import "./style.css";

interface Errors {
  registernumber: string;
  typeRegister: string;
  course: string;
}

export default function FormProfessionalInfo() {
  const [registernumber, setRegisternumber] = useState("");
  const [typeRegister, setTypeRegister] = useState("");
  const [course, setCourse] = useState("");
  const [errors, setErrors] = useState({} as Errors);
  const { backPage, nextPage } = useContext(FormContext);

  function validate(event: FormEvent) {
    event.preventDefault();
    if (registernumber === "") {
      setErrors((error) => ({
        ...error,
        registernumber: "Preencha seu codigo!",
      }));
    } else if (typeRegister === "") {
      setErrors((error) => ({
        ...error,
        typeRegister: "Selecione seu tipo de cadastro!",
      }));
    } else if (course === "") {
      setErrors((error) => ({
        ...error,
        course: "Selecione seu curso!",
      }));
    } else {
      onSubmit();
    }
  }

  function onSubmit() {
    nextPage();
  }

  return (
    <div className="professional-content">
      <h3>Dados profissionais</h3>
      <form onSubmit={validate}>
        <input
          type="text"
          placeholder="Codigo"
          value={registernumber}
          onChange={(e) => setRegisternumber(e.target.value)}
        />
        <select
          name="typeRegister"
          onChange={(e) => setTypeRegister(e.target.value)}
          defaultValue="Selecione"
        >
          <option value="Selecione" disabled hidden>
            Tipo de Cadastro
          </option>
          <option value="Educador(a)">Educador(a)</option>
          <option value="Estudante(a)">Estudante(a)</option>
        </select>

        <select onChange={(e) => setCourse(e.target.value)}>
          {typeRegister === "Educador(a)" ? (
            <>
              <option value="Computacao">Computacao</option>
              <option value="Eletrica">Eletrica</option>
              <option value="Mecatronica">Mecatronica</option>
              <option value="Civil">Civil</option>
              <option value="Telecomunicacoes">Telecomunicacoes</option>
            </>
          ) : (
            <>
              <option value="Computacao">Computacao</option>
              <option value="Eletrica">Eletrica</option>
              <option value="Civil">Civil</option>
            </>
          )}
        </select>
        {errors.registernumber && <span>{errors.registernumber}</span>}
        {errors.typeRegister && <span>{errors.typeRegister}</span>}
        {errors.course && <span>{errors.course}</span>}
        <div className="buttons">
          <button className="back" onClick={backPage}>
            Voltar
          </button>
          <button className="next" type="submit">
            Próximo
          </button>
        </div>
      </form>
    </div>
  );
}
