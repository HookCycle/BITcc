import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import swal from "sweetalert";

interface Errors {
  email: string;
}

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({} as Errors);
  const history = useHistory();

  function validate(event: FormEvent) {
    event.preventDefault();
    if (email === "") {
      setErrors((error) => ({
        ...error,
        email: "Preencha o campo com um Email valido!",
      }));
    }
  }
  function forgetPassword() {
    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      buttons: {
        confirm: { visible: true, text: "Ok" },
      },
    });
    setTimeout(function () {
      history.push("/");
    }, 1500);
  }

  return (
    <div className="forgert-password">
      <div className="recovery-content">
        <h3>Recuperação de senha</h3>
        <form onSubmit={validate}>
          <div>
            <input
              name="email"
              type="text"
              placeholder="test@ecomp.poli.br"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {errors.email && <span>{errors.email}</span>}
        </form>
        <div className="button">
          <button onClick={() => history.push("/")} className="back">
            Landing Page
          </button>
          <button className="send" onClick={forgetPassword}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
