import { FormEvent, useState } from "react";
import { useContext } from "react";
import { FormContext } from "../FormContext";
import "./style.css";

interface Errors {
  street: string;
  housenumber: string;
  distric: string;
  city: string;
  state: string;
}

export default function FormAddress() {
  const [street, setStreet] = useState("");
  const [housenumber, setHousenumber] = useState<number | string>("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [errors, setErrors] = useState({} as Errors);

  const { backPage, nextPage } = useContext(FormContext);

  function validate(event: FormEvent) {
    event.preventDefault();
    if (street === "") {
      setErrors((error) => ({
        ...error,
        street: "Preencha o nome da rua!",
      }));
    } else if (housenumber === "") {
      setErrors((error) => ({
        ...error,
        housenumber: "Preencha o número!",
      }));
    } else if (district === "") {
      setErrors((error) => ({
        ...error,
        district: "Preencha o nome do bairro!",
      }));
    } else if (city === "") {
      setErrors((error) => ({
        ...error,
        city: "Preencha o nome da cidade!",
      }));
    } else if (state === "") {
      setErrors((error) => ({
        ...error,
        state: "Preencha o estado!",
      }));
    } else {
      onSubmit();
    }
  }

  function onSubmit() {
    nextPage();
  }

  return (
    <div className="address-content">
      <h3>Endereço</h3>
      <form onSubmit={validate}>
        <div className="first-row">
          <input
            name="street"
            type="text"
            placeholder="Rua"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <input
            name="number"
            type="text"
            placeholder="Número"
            value={housenumber}
            onChange={(e) => setHousenumber(Number(e.target.value))}
          />
        </div>
        <div className="second-row">
          <input
            name="district"
            type="text"
            placeholder="Bairro"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
          <input
            name="city"
            type="text"
            placeholder="Cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <input
          name="state"
          type="text"
          placeholder="Estado"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        {errors.street && <span>{errors.street}</span>}
        {errors.housenumber && <span>{errors.housenumber}</span>}
        {errors.distric && <span>{errors.distric}</span>}
        {errors.city && <span>{errors.city}</span>}
        {errors.state && <span>{errors.state}</span>}
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
