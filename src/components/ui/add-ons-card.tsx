import { useContext, useState, useEffect } from "react";

import { FormAddOnsType } from "../../context/form-options.context";
import { PriceContext } from "../../context/toggle-price.context";
import { FormOptionsContext } from "../../context/form-options.context";

type AddOnsCardType = {
  addOn: FormAddOnsType;
};

const AddOnsCard = ({ addOn }: AddOnsCardType) => {
  const [isSelected, setIsSelected] = useState(false);
  const { priceType } = useContext(PriceContext);
  const { addOns, pickAddOnsHandler } = useContext(FormOptionsContext);

  useEffect(() => {
    const existingAddOn = addOns.find(
      (addOnItem) => addOn.title === addOnItem.title
    );
    if (existingAddOn) {
      setIsSelected(true);
    }
  }, []);

  const {
    title,
    price: { monthly, yearly },
    description,
  } = addOn;

  const onPickHandler = () => {
    pickAddOnsHandler(addOn);
    setIsSelected(!isSelected);
  };
  return (
    <button
      onClick={onPickHandler}
      className={`flex items-center justify-between gap-2 border-2 p-4 rounded-lg hover:border-Marine-blue ${
        isSelected ? "border-Marine-blue" : "border-Light-gray"
      }`}
    >
      <div className='flex items-center gap-4 lg:gap-6'>
        <div
          className={`w-5 h-5 check-box border-1 border-Cool-gray rounded-sm ${
            isSelected ? "checked" : ""
          }`}
        ></div>

        <article className='text-left'>
          <h3>{title}</h3>
          <p className='text-Cool-gray text-md'>{description}</p>
        </article>
      </div>

      <p className='text-Cool-gray'>
        ${`${priceType === "monthly" ? monthly + "/mo" : yearly + "/yr"}`}
      </p>
    </button>
  );
};

export default AddOnsCard;
