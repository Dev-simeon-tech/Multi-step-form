import { createContext, ReactNode, useState, ChangeEvent } from "react";
import z from "zod";
import { formFieldsShema } from "../schema/form-fields.schema";

export type FormFieldsType = z.infer<typeof formFieldsShema>;

export interface FormDetailsContextType {
  formFields: FormFieldsType;
  updateFormData: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const FormDetailsContext = createContext<FormDetailsContextType | null>(
  null
);

export const FormDetailsProvider = ({ children }: { children: ReactNode }) => {
  const [formFields, setFormFields] = useState<FormFieldsType>({
    name: "",
    email: "",
    phoneNumber: undefined,
  });

  const updateFormData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const value = {
    formFields,
    updateFormData,
  };

  return (
    <FormDetailsContext.Provider value={value}>
      {children}
    </FormDetailsContext.Provider>
  );
};
