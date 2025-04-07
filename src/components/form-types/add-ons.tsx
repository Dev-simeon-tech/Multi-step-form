import AddOnsCard from "../ui/add-ons-card";

import { FormAddOnsType } from "../../context/form-options.context";

const addOns: FormAddOnsType[] = [
  {
    title: "Online service",
    price: {
      monthly: 1,
      yearly: 10,
    },
    description: "Access to multiplayer games",
  },
  {
    title: "Larger storage",
    price: {
      monthly: 2,
      yearly: 20,
    },
    description: "Extra 1TB of cloud save",
  },
  {
    title: "Customizable Profile",
    price: {
      monthly: 2,
      yearly: 20,
    },
    description: "Custom theme on your profile",
  },
];

const AddOns = () => {
  return (
    <div>
      <article>
        <h2 className='form-title'>Pick add-ons</h2>
        <p className='form-p'>Add-ons help enhance your gaming experience.</p>
      </article>
      <div className='flex flex-col gap-6'>
        {addOns.map((addOn, index) => (
          <AddOnsCard key={index} addOn={addOn} />
        ))}
      </div>
    </div>
  );
};

export default AddOns;
