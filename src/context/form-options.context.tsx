import { createContext, ReactNode, useState } from "react";

export type FormPlanType = {
  title: string;
  price: {
    monthly: number;
    yearly: number;
  };
};

export type FormAddOnsType = FormPlanType & {
  description: string;
};

export type FormOptionsContextType = {
  formPlan: FormPlanType;
  setFormPlan: React.Dispatch<React.SetStateAction<FormPlanType>>;
  addOns: FormAddOnsType[];
  pickAddOnsHandler: (addOnItem: FormAddOnsType) => void;
  totalPriceMonthly: number;
  totalPriceYearly: number;
};
export const FormOptionsContext = createContext<FormOptionsContextType>(
  {} as FormOptionsContextType
);

export const FormOptionsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [formPlan, setFormPlan] = useState({
    title: "Arcade",
    price: {
      monthly: 9,
      yearly: 90,
    },
  });

  const [addOns, setAddOns] = useState<FormAddOnsType[]>([]);

  const pickAddOnsHandler = (addOnItem: FormAddOnsType) => {
    const existingAddOn = addOns.find(
      (addOn) => addOn.title === addOnItem.title
    );

    if (existingAddOn) {
      const filteredAddOns = addOns.filter(
        (addOn) => addOn.title !== addOnItem.title
      );
      setAddOns(filteredAddOns);
    } else {
      setAddOns((prevAddon) => [...prevAddon, addOnItem]);
    }
  };

  const totalPriceMonthly: number = [
    formPlan.price.monthly,
    ...addOns.map((addOn) => addOn.price.monthly),
  ].reduce((acc, currentPrice) => acc + currentPrice, 0);

  const totalPriceYearly: number = [
    formPlan.price.yearly,
    ...addOns.map((addOn) => addOn.price.yearly),
  ].reduce((acc, currentPrice) => acc + currentPrice, 0);

  const value = {
    formPlan,
    setFormPlan,
    addOns,
    pickAddOnsHandler,
    totalPriceMonthly,
    totalPriceYearly,
  };
  return (
    <FormOptionsContext.Provider value={value}>
      {children}
    </FormOptionsContext.Provider>
  );
};
