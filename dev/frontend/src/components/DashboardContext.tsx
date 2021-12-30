import { useState } from "react";
import { createContext } from "react";
import { User } from "../@types/User";
import api from "../services";

interface DashboardContextData {
  user: User;
  getUser(id: string): void;
  usersCount: number;
  specialties: Array<Array<any>>;
  setCount(n: number): void;
  setSpecialtiesCount(specialties: Specialties): void;
}

interface Specialties {
  specCount: Array<Array<any>>;
}

export const DashboardContext = createContext<DashboardContextData>(
  {} as DashboardContextData
);

export const DashboardProvider: React.FC = ({ children }) => {
  const [usersCount, setUsetsCount] = useState(0);
  const [specialties, setSpecialties] = useState<Array<Array<any>>>([[]]);
  const [user, setUser] = useState<User>({} as User);

  function setCount(n: number) {
    setUsetsCount(n);
  }

  function setSpecialtiesCount(specialties: Specialties) {
    const arr = [["Profissionais", "Quantidade"]];
    specialties.specCount.map((item) => {
      arr.push(item);
      return item;
    });
    setSpecialties(arr);
  }

  async function getUser(id: string) {
    try {
      const response = await api.get(`user/${id}`);

      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DashboardContext.Provider
      value={{
        user,
        getUser,
        usersCount,
        specialties,
        setCount,
        setSpecialtiesCount,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
