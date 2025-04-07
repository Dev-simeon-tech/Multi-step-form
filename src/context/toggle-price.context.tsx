import { createContext, ReactNode, useState } from "react";

export type PriceContextType = {
  priceType: string;
  setPriceType: React.Dispatch<React.SetStateAction<string>>;
};

type PriceContextProviderProps = {
  children: ReactNode;
};
export const PriceContext = createContext({} as PriceContextType);

export const PriceContextProvider = ({
  children,
}: PriceContextProviderProps) => {
  const [priceType, setPriceType] = useState("monthly");
  const value = {
    priceType,
    setPriceType,
  };

  return (
    <PriceContext.Provider value={value}>{children}</PriceContext.Provider>
  );
};
