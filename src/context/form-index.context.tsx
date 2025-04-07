import { ReactNode } from "react";
import { createContext, useState } from "react";

export type FormIndexContextType = {
  formIndex: number;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
  updateFormIndex: () => void;
  reduceFormIndex: () => void;
};
export const FormIndexContext = createContext<FormIndexContextType | null>(
  null
);

export const FormIndexProvider = ({ children }: { children: ReactNode }) => {
  const [formIndex, setFormIndex] = useState(0);

  const updateFormIndex = () => {
    setFormIndex((value) => value + 1);
  };

  const reduceFormIndex = () => {
    setFormIndex((value) => value - 1);
  };

  const value = {
    formIndex,
    setFormIndex,
    updateFormIndex,
    reduceFormIndex,
  };
  return (
    <FormIndexContext.Provider value={value}>
      {children}
    </FormIndexContext.Provider>
  );
};
