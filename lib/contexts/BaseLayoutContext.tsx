import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { UserAllResponse } from "../models/api/users/all.model";

type ContextType = [
  { userAllData: UserAllResponse | undefined },
  Dispatch<SetStateAction<{ userAllData: any }>>,
];

const BaseLayoutContext = createContext<ContextType>({} as ContextType);

const BaseLayoutProvider = ({ children }: { children: ReactNode }) => {
  const [baseLayoutData, setBaseLayoutData] = useState({
    userAllData: undefined,
  });

  return (
    <BaseLayoutContext.Provider value={[baseLayoutData, setBaseLayoutData]}>
      {children}
    </BaseLayoutContext.Provider>
  );
};

export { BaseLayoutContext, BaseLayoutProvider };
