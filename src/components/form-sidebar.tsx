import { useContext } from "react";
import { FormIndexContextType } from "../context/form-index.context";
import { FormIndexContext } from "../context/form-index.context";
import ListMarker from "./ui/list-marker";

const stepList = ["Your info", "Select plan", "Add-ons", "Summary"];

const FormSidebar = () => {
  const { formIndex } = useContext(FormIndexContext) as FormIndexContextType;

  return (
    <div className='bg-center bg-cover bg-no-repeat sidebar-bg h-[10rem] lg:min-w-[15rem] lg:h-full lg:rounded-xl text-White'>
      <ul className='flex gap-4 pt-8 justify-center lg:justify-items-start px-6 lg:flex-col'>
        {stepList.map((step, index) => (
          <li
            key={index}
            className={`form-nav lg:flex gap-4 items-center text-lg ${
              formIndex === index ? "active" : ""
            }`}
          >
            <ListMarker stepNumber={index + 1} />
            <div className='hidden lg:block'>
              <h3 className=' text-Light-blue'>STEP {index + 1}</h3>
              <p className='font-Ubuntu-bold tracking-widest'>
                {step.toUpperCase()}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormSidebar;
