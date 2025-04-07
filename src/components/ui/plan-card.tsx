import { useContext } from "react";
import { FormPlanType } from "../../context/form-options.context";

import { PriceContext } from "../../context/toggle-price.context";
import { FormOptionsContext } from "../../context/form-options.context";

type PlanCardType = {
  plan: FormPlanType;
  imageSrc?: string;
};

const PlanCard = ({ plan, imageSrc }: PlanCardType) => {
  const { priceType } = useContext(PriceContext);
  const { formPlan, setFormPlan } = useContext(FormOptionsContext);

  const {
    title,
    price: { monthly, yearly },
  } = plan;

  const onSelectHandler = (selectedPlan: FormPlanType) => {
    setFormPlan(selectedPlan);
  };

  return (
    <button
      onClick={() => onSelectHandler(plan)}
      className={`flex p-6 rounded-xl border-1 gap-4 lg:flex-col lg:gap-8 lg:flex-1  hover:border-Purplish-blue ${
        formPlan.title === plan.title
          ? "border-Purplish-blue bg-Magnolia"
          : "border-Light-gray"
      } `}
    >
      <img className='lg:w-[3rem]' src={imageSrc} alt={title} />
      <article className='space-y-0.5 text-left'>
        <h3 className='text-Marine-blue text-lg'>{title}</h3>
        <p className='text-Cool-gray'>
          ${`${priceType === "monthly" ? monthly + "/mo" : yearly + "/yr"}`}
        </p>
        {priceType === "yearly" && (
          <p className='text-Marine-blue text-sm'>2 months free</p>
        )}
      </article>
    </button>
  );
};

export default PlanCard;
