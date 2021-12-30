import { FormEvent, useContext } from "react";
import { useState } from "react";
import { FormContext } from "../FormContext";
import "./style.css";

interface Errors {
  registernumber: string;
  profession: string;
  specialty: string;
}

export default function FormProfessionalInfo() {
  const [registernumber, setRegisternumber] = useState("");
  const [profession, setProfession] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [maxrange, setMaxRange] = useState(1);
  const [errors, setErrors] = useState({} as Errors);
  const { backPage, nextPage } = useContext(FormContext);

  function validate(event: FormEvent) {
    event.preventDefault();
    if (registernumber === "") {
      setErrors((error) => ({
        ...error,
        registernumber: "Preencha seu CRM!",
      }));
    } else if (profession === "") {
      setErrors((error) => ({
        ...error,
        profession: "Selecione sua profissão!",
      }));
    } else if (specialty === "") {
      setErrors((error) => ({
        ...error,
        specialty: "Selecione sua especialidade!",
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
          placeholder="CRM"
          value={registernumber}
          onChange={(e) => setRegisternumber(e.target.value)}
        />
        <select
          name="profession"
          onChange={(e) => setProfession(e.target.value)}
          defaultValue="Selecione"
        >
          <option value="Selecione" disabled hidden>
            Profissão
          </option>
          <option value="Médico(a)">Médico(a)</option>
          <option value="Enfermeiro(a)">Enfermeiro(a)</option>
        </select>

        <select onChange={(e) => setSpecialty(e.target.value)}>
          {profession === "Médico(a)" ? (
            <>
              <option value="Ginecologista">Ginecologista</option>
              <option value="Dermatologista">Dermatologista</option>
              <option value="Ortopedista">Ortopedista</option>
              <option value="Cardiologista">Cardiologista</option>
              <option value="Otorrinolaringologista">
                Otorrinolaringologista
              </option>
            </>
          ) : (
            <>
              <option value="Enfermeiro(a) UTI">Enfermeiro(a) UTI</option>
              <option value="Enfermeiro(a) pediátrico">
                Enfermeiro(a) pediátrico
              </option>
              <option value="Enfermeiro(a) urgencia">
                Enfermeiro(a) urgencia
              </option>
            </>
          )}
        </select>
        <label>Distância máx de atendimento</label>
        <div className="range">
          <input
            type="range"
            min="1"
            max="10"
            value={maxrange}
            onChange={(e) => setMaxRange(Number(e.target.value))}
          />
          <span>{maxrange + " km"}</span>
        </div>
        {errors.registernumber && <span>{errors.registernumber}</span>}
        {errors.profession && <span>{errors.profession}</span>}
        {errors.specialty && <span>{errors.specialty}</span>}
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
