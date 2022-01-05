import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DashboardProvider } from "./components/DashboardContext";
import { FormProvider } from "./components/FormContext";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ForgetPassword from "./pages/Password";
import SignUp from "./pages/SignUp";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route
          path="/signup"
          render={() => (
            <FormProvider>
              <SignUp />
            </FormProvider>
          )}
        />
        <Route
          path="/forgetPassword"
          render={() => (
            <FormProvider>
              <ForgetPassword />
            </FormProvider>
          )}
        />
        <DashboardProvider>
          <Route path="/dashboard" component={Dashboard} />
        </DashboardProvider>
      </Switch>
    </BrowserRouter>
  );
}
