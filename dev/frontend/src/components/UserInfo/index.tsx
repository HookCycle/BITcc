import { FormEvent, useState } from "react";
import { useContext } from "react";
import { FormContext } from "../FormContext";
import "./style.css";

interface Errors {
  email: string;
  username: string;
  password: string;
  confPassword: string;
  notMach: string;
}

export default function FormUserInfo() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPasssword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [errors, setErrors] = useState({} as Errors);
  const { backPage, nextPage } = useContext(FormContext);

  function validate(event: FormEvent) {
    event.preventDefault();
    if (email === "") {
      setErrors((error) => ({
        ...error,
        email: "Preencha seu Email!",
      }));
    } else if (username === "") {
      setErrors((error) => ({
        ...error,
        username: "Preencha seu nome de usuário!",
      }));
    } else if (password === "") {
      setErrors((error) => ({
        ...error,
        password: "Preencha a senha!",
      }));
    } else if (confPassword === "") {
      setErrors((error) => ({
        ...error,
        confPassword: "Confirme a senha!",
      }));
    } else if (password !== confPassword) {
      setErrors((error) => ({
        ...error,
        notMach: "As senhas não correspondem!",
      }));
    } else {
      onSubmit();
    }
  }

  async function onSubmit() {
    nextPage();
  }

  return (
    <div className="user-content">
      <h3>Informações de usuário</h3>
      <form onSubmit={validate}>
        <div className="first-row">
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            name="username"
            type="text"
            placeholder="Nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="second-row">
          <input
            name="pass"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPasssword(e.target.value)}
          />
          <input
            name="confpass"
            type="password"
            placeholder="Confirmar senha"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
          />
        </div>
        {errors.email && <span>{errors.email}</span>}
        {errors.username && <span>{errors.username}</span>}
        {errors.password && <span>{errors.password}</span>}
        {errors.confPassword && <span>{errors.confPassword}</span>}
        {errors.notMach && <span>{errors.notMach}</span>}
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
