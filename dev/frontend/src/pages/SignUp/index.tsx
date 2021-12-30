import ProgressBar from "../../components/ProgressBar";
import Logo from "../../assets/logo.svg";
import "./style.css";
import { useContext } from "react";
import FormPersonalInfo from "../../components/FormPersonalInfo";
import FormAddress from "../../components/FormAddress";
import FormProfessionalInfo from "../../components/FormProfessionalInfo";
import FormUserInfo from "../../components/UserInfo";
import { FormContext } from "../../components/FormContext";
import ConfirmInfo from "../../components/ConfirmInfo";

export default function SignUp() {
  const { page } = useContext(FormContext);
  return (
    <div className="signup-conteiner">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="signup-content">
        <h2>Cadastro</h2>
        <ProgressBar page={page} />
        <div className="form">
          {page === 1 && <FormPersonalInfo />}
          {page === 2 && <FormAddress />}
          {page === 3 && <FormProfessionalInfo />}
          {page === 4 && <FormUserInfo />}
          {page === 5 && <ConfirmInfo />}
        </div>
      </div>
    </div>
  );
}
