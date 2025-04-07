import { useContext } from "react";

import { FormOptionsContext } from "../../context/form-options.context";
import { PriceContext } from "../../context/toggle-price.context";
import { FormIndexContext } from "../../context/form-index.context";
import { FormIndexContextType } from "../../context/form-index.context";

const FormSummary = () => {
  const { formPlan, addOns, totalPriceMonthly, totalPriceYearly } =
    useContext(FormOptionsContext);
  const { priceType } = useContext(PriceContext);
  const { setFormIndex } = useContext(FormIndexContext) as FormIndexContextType;

  const {
    title,
    price: { monthly, yearly },
  } = formPlan;

  const onClickHandler = () => {
    setFormIndex(1);
  };

  return (
    <div>
      <article>
        <h2 className='form-title'>Finishing up</h2>
        <p className='form-p'>
          Double-check everything looks OK before confirming.
        </p>
      </article>

      <div className='px-4 lg:px-8 py-8 mt-6 bg-Alabaster rounded-2xl text-lg'>
        <div className='flex justify-between pb-4 border-b-2 border-Light-gray'>
          <div>
            <p className='font-Ubuntu-medium text-Marine-blue'>{`${title} ${
              priceType === "monthly" ? "(Monthly)" : "(Yearly)"
            }`}</p>
            <button
              onClick={onClickHandler}
              className='underline text-Cool-gray hover:text-Purplish-blue'
            >
              Change
            </button>
          </div>
          <p className='font-Ubuntu-bold text-Marine-blue'>
            ${`${priceType === "monthly" ? monthly + "/mo" : yearly + "/yr"}`}
          </p>
        </div>

        <div className='mt-4 flex flex-col gap-2 lg:gap-5'>
          {addOns.map((addOn, index) => (
            <div key={index} className='flex justify-between'>
              <p className='text-Cool-gray'>{addOn.title}</p>
              <p className='text-Marine-blue'>
                +
                {`${
                  priceType === "monthly"
                    ? addOn.price.monthly + "/mo"
                    : addOn.price.yearly + "/yr"
                }`}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between mt-6 px-4 lg:px-8'>
        <p className='text-Cool-gray text-lg'>
          Total (per {priceType === "monthly" ? "month" : "year"})
        </p>
        <p className='text-xl font-Ubuntu-bold text-Purplish-blue'>
          +$
          {priceType === "monthly"
            ? totalPriceMonthly + "/mo"
            : totalPriceYearly + "/yr"}
        </p>
      </div>
    </div>
  );
};

export default FormSummary;
