import { useContext } from "react";

import { FormIndexContext } from "../../context/form-index.context";
import { FormIndexContextType } from "../../context/form-index.context";

const Button = ({ onClick }: { onClick: () => void }) => {
  const { formIndex } = useContext(FormIndexContext) as FormIndexContextType;
  let isComfirm = formIndex === 3;
  return (
    <button
      onClick={onClick}
      className={`rounded-sm lg:rounded-md bg-Marine-blue py-3 w-25 text-white lg:w-30 font-Ubuntu-medium hover:opacity-70 ${
        isComfirm ? "bg-Purplish-blue" : "bg-Marine-blue"
      }`}
    >
      {isComfirm ? "Confirm" : "Next Step"}
    </button>
  );
};

export default Button;
