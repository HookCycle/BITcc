import { FormEvent } from "react";
import "./style.css";
import Logo from "../../assets/logo.svg";
import AsideImage from "../../assets/doctors.svg";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
interface Errors {
  username: string;
  password: string;
}

export default function Login() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({} as Errors);

  async function validate(event: FormEvent) {
    event.preventDefault();
    if (username === "") {
      setErrors((error) => ({
        ...error,
        username: "Preencha o nome de usuário!",
      }));
    } else if (password === "") {
      setErrors((error) => ({
        ...error,
        password: "Preencha o campo de senha!",
      }));
    } else {
      history.push("/dashboard");
    }
  }

  return (
    <div id="page-home">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="login-content">
        <div className="aside">
          <h2>Sua rede para acompanhamento do seu TCC.</h2>
          <p>
            Faça o acompanhamento do seu TCC de forma totalmente digital e
            dinâmica. Melhorando a experiência dos alunos de Ecomp da poli,
            trazendo satisfação, praticidade e transparência.
          </p>
          <p>
            Através do BITCC podemos ajudar os estudantes da poli a realizarem e
            acompanharem o andamento do seu TCC de forma rápida e segura como
            também auxiliar os educadores em todo o processo.
          </p>
          <img className="aside-img" src={AsideImage} alt="Doctors" />
        </div>
        <div className="middle"></div>
        <div className="login-form-container">
          <h2>Login</h2>
          <form className="login-form" onSubmit={validate}>
            <input
              type="text"
              name="ussename"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nome de usuário"
            />
            {errors.username && (
              <span className="errors">{errors.username}</span>
            )}
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
            />
            {errors.password && (
              <span className="errors">{errors.password}</span>
            )}
            <div className="signup">
              <p>Não possui cadastro?</p>
              <Link to="/signup">Cadastre-se</Link>
            </div>
            <div className="forgetPassword">
              <p>Esqueceu a senha?</p>
              <Link to="/forgetPassword">Recuperar</Link>
            </div>
            <button type="submit">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
