import { FormEvent, useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router";
import { FormContext } from "../FormContext";
import "./style.css";

interface Errors {
  fullname: string;
  birthday: string;
  gender: string;
  phonenumber: string;
}

export default function FormPersonalInfo() {
  const history = useHistory();
  const { nextPage } = useContext(FormContext);
  const [fullname, setFullname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [errors, setErrors] = useState({} as Errors);

  function validate(event: FormEvent) {
    event.preventDefault();
    if (fullname === "") {
      setErrors((error) => ({
        ...error,
        fullname: "Preencha seu nome completo!",
      }));
    } else if (birthday === "") {
      setErrors((error) => ({
        ...error,
        birthday: "Selecione sua data de nascimento!",
      }));
    } else if (gender === "") {
      setErrors((error) => ({
        ...error,
        gender: "Selecione seu gênero!",
      }));
    } else if (phonenumber === "") {
      setErrors((error) => ({
        ...error,
        phonenumber: "Preencha seu número de telefone!",
      }));
    } else {
      onSubmit();
    }
  }

  async function onSubmit() {
    nextPage();
  }

  return (
    <div className="pers-content">
      <h3>Dados pessoais</h3>
      <form onSubmit={validate}>
        <input
          className="text"
          name="fullname"
          type="text"
          placeholder="Nome completo"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <div className="second-row">
          <div>
            <label>Data de nacimento</label>
            <input
              name="date"
              type="date"
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>

          <div>
            <label>Gênero</label>
            <select
              name="gender"
              onChange={(e) => setGender(e.target.value)}
              defaultValue="Selecione"
            >
              <option value="Selecione" disabled hidden>
                Gênero
              </option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Não binário">Não binário</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
          <div>
            <label>Telefone pessoal</label>
            <input
              className="text"
              name="phonenumber"
              type="text"
              placeholder="(00)0000-0000"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
            />
          </div>
        </div>
        {errors.fullname && <span>{errors.fullname}</span>}
        {errors.birthday && <span>{errors.birthday}</span>}
        {errors.gender && <span>{errors.gender}</span>}
        {errors.phonenumber && <span>{errors.phonenumber}</span>}
        <button onClick={() => history.push("/")} className="next">
          Landing Page
        </button>
        <button className="next">Próximo</button>
      </form>
    </div>
  );
}
