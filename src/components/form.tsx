import { useContext, JSX, useState } from "react";

import { FormIndexContextType } from "../context/form-index.context";
import { FormIndexContext } from "../context/form-index.context";

import PersonalInfo from "./form-types/personal-info";
import SelectPlan from "./form-types/select-plan";
import AddOns from "./form-types/add-ons";
import FormSummary from "./form-types/form-summary";
import ThankYou from "./thank-you";

import Button from "./ui/button";

let currentForm: JSX.Element;

const Form = () => {
  const [footerVisibility, setFooterVisibility] = useState(true);
  const { formIndex, updateFormIndex, reduceFormIndex } = useContext(
    FormIndexContext
  ) as FormIndexContextType;

  const onClickHandler = () => {
    if (formIndex === 0) {
      (
        document.getElementById("personal-info") as HTMLFormElement
      )?.requestSubmit();
    } else if (formIndex === 3) {
      setFooterVisibility(false);
      return (currentForm = <ThankYou />);
    } else {
      updateFormIndex();
    }
  };

  switch (formIndex) {
    case 0:
      currentForm = <PersonalInfo />;
      break;
    case 1:
      currentForm = <SelectPlan />;
      break;
    case 2:
      currentForm = <AddOns />;
      break;
    case 3:
      if (footerVisibility) currentForm = <FormSummary />;
      break;
  }
  return (
    <div className='relative h-full lg:flex lg:flex-col lg:justify-between'>
      <div className='w-[93%] mx-auto lg:h-full min-[82rem]:w-[80%] lg:mx-auto lg:rounded-none lg:shadow-none  bg-white p-6 rounded-xl shadow-lg shadow-Light-grey -translate-y-14 lg:translate-0'>
        {currentForm}
      </div>

      {footerVisibility && (
        <div
          className={`fixed lg:relative w-full min-[82rem]:w-[80%] lg:mx-auto lg:px-6 lg:p-0 p-4 bg-White bottom-0 flex justify-between items-center ${
            formIndex >= 1 ? "justify-between" : "justify-end"
          }`}
        >
          {formIndex >= 1 && (
            <button
              onClick={() => reduceFormIndex()}
              className='text-lg text-Cool-gray font-bold hover:text-Marine-blue'
            >
              Go Back
            </button>
          )}
          <Button onClick={onClickHandler} />
        </div>
      )}
    </div>
  );
};

export default Form;
