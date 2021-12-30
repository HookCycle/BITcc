import { useState } from "react";
import { createContext } from "react";

interface FormContextData {
  page: number;
  nextPage(): void;
  backPage(): void;
}

export const FormContext = createContext<FormContextData>(
  {} as FormContextData
);

export const FormProvider: React.FC = ({ children }) => {
  const [page, setPage] = useState(1);

  function nextPage() {
    setPage((page) => page + 1);
  }

  function backPage() {
    setPage((page) => page - 1);
  }

  return (
    <FormContext.Provider
      value={{
        page,
        nextPage,
        backPage,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
