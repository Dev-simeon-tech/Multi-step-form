import { useContext } from "react";

import { PriceContext } from "../../context/toggle-price.context";

const TogglePriceButton = () => {
  const { priceType, setPriceType } = useContext(PriceContext);

  const togglePriceHandler = () => {
    setPriceType(priceType === "yearly" ? "monthly" : "yearly");
  };
  return (
    <button
      className={` bg-Marine-blue w-13 h-7 rounded-3xl p-1.5 flex items-center`}
      onClick={togglePriceHandler}
    >
      <div
        className={`${
          priceType === "yearly" ? "translate-x-[150%]" : ""
        } w-4 bg-White h-full rounded-full  transition-transform ease-in-out duration-300`}
      ></div>
    </button>
  );
};

export default TogglePriceButton;
