import { useState } from "react";
import "./style.css";

export default function EditUser() {
  const [nome, setNome] = useState("Joabe Jesus");
  const [email, setEmail] = useState("test@gmail.com");
  const [phonenumber, setPhonenumber] = useState("(81)99999-9999");
  const [street, setStreet] = useState("rua alto sao jose");
  const [housenumber, setHousenumber] = useState(100);
  const [district, setDistrict] = useState("Olinda");
  const [city, setCity] = useState("Recife");
  const [state, setState] = useState("PE");

  const [formacao, setFormacao] = useState(
    "Doutorado em IA pela Universidade de Pernambuco"
  );
  const [especialidade, setEspecialidade] = useState("IA");
  const [tccMentodados, setTccMentodados] = useState(
    "Estudo de diagrama de casos de usos"
  );

  return (
    <div className="edit-container">
      <h2>Editar informações</h2>
      <div className="edit-content">
        <form onSubmit={() => {}}>
          <div id="edit">
            <div className="left">
              <h3>Info pessoal</h3>
              <input
                type="text"
                name="nome"
                placeholder={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                }}
              />
              <input
                type="email"
                name="email"
                placeholder={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="text"
                name="phonenumber"
                placeholder={phonenumber}
                onChange={(e) => {
                  setPhonenumber(e.target.value);
                }}
              />
            </div>
            <div className="right">
              <h3>Endereço</h3>
              <div className="first-row">
                <input
                  type="text"
                  name="street"
                  placeholder={street}
                  onChange={(e) => {
                    setStreet(e.target.value);
                  }}
                />
                <input
                  type="text"
                  name="housenumber"
                  placeholder={String(housenumber)}
                  onChange={(e) => {
                    setHousenumber(Number(e.target.value));
                  }}
                />
              </div>
              <div className="second-row">
                <input
                  type="text"
                  name="district"
                  placeholder={district}
                  onChange={(e) => {
                    setDistrict(e.target.value);
                  }}
                />
                <input
                  type="text"
                  name="city"
                  placeholder={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </div>
              <input
                type="text"
                name="State"
                placeholder={state}
                onChange={(e) => {
                  setState(e.target.value);
                }}
              />
            </div>
          </div>

          <div id="edit-personal">
            <div>
              <h3>Perfil educacional</h3>
              <input
                type="text"
                name="formacao"
                placeholder={formacao}
                onChange={(e) => {
                  setFormacao(e.target.value);
                }}
              />
              <input
                type="text"
                name="especialidade"
                placeholder={especialidade}
                onChange={(e) => {
                  setEspecialidade(e.target.value);
                }}
              />
              <input
                type="text"
                name="tccMentodados"
                placeholder={tccMentodados}
                onChange={(e) => {
                  setTccMentodados(e.target.value);
                }}
              />
              <textarea name="nome" placeholder={nome}>
                Descricao sobre o professor
              </textarea>
            </div>
          </div>

          <button type="submit" className="update">
            Atualizar
          </button>
        </form>
      </div>
    </div>
  );
}
