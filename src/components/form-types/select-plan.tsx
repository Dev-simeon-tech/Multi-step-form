import { useContext } from "react";

import PlanCard from "../ui/plan-card";
import TogglePriceButton from "../ui/toggle-price-btton";

import { FormPlanType } from "../../context/form-options.context";
import { PriceContext } from "../../context/toggle-price.context";
import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advanceIcon from "../../assets/images/icon-advanced.svg";
import proIcon from "../../assets/images/icon-pro.svg";

type PlansType = FormPlanType[];

const imagesSrc = [arcadeIcon, advanceIcon, proIcon];

const plans: PlansType = [
  {
    title: "Arcade",
    price: {
      monthly: 9,
      yearly: 90,
    },
  },
  {
    title: "Advanced",
    price: {
      monthly: 12,
      yearly: 120,
    },
  },
  {
    title: "Pro",
    price: {
      monthly: 15,
      yearly: 150,
    },
  },
];

const SelectPlan = () => {
  const { priceType } = useContext(PriceContext);
  return (
    <div>
      <article>
        <h2 className='form-title'>Select your plan</h2>
        <p className='form-p'>
          You have the option of monthly or yearly billing.
        </p>
      </article>

      <div className='flex flex-col gap-4 lg:flex-row lg:flex-wrap'>
        {plans.map((plan, index) => (
          <PlanCard key={index} imageSrc={imagesSrc[index]} plan={plan} />
        ))}
      </div>

      <div className='flex gap-4 mt-10 justify-center bg-Magnolia p-4'>
        <span
          className={`${
            priceType === "monthly" ? "text-Marine-blue" : "text-Cool-gray"
          } font-Ubuntu-medium`}
        >
          Monthly
        </span>
        <TogglePriceButton />
        <span
          className={`${
            priceType === "yearly" ? "text-Marine-blue" : "text-Cool-gray"
          } font-Ubuntu-medium`}
        >
          Yearly
        </span>
      </div>
    </div>
  );
};

export default SelectPlan;
