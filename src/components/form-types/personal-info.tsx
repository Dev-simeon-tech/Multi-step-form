import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { formFieldsShema } from "../../schema/form-fields.schema";
import { FormDetailsContextType } from "../../context/form-details.context";
import { FormFieldsType } from "../../context/form-details.context";
import { FormDetailsContext } from "../../context/form-details.context";
import { FormIndexContext } from "../../context/form-index.context";
import { FormIndexContextType } from "../../context/form-index.context";

const PersonalInfo = () => {
  const {
    formFields: { name, email, phoneNumber },
    updateFormData,
  } = useContext(FormDetailsContext) as FormDetailsContextType;
  const { setFormIndex } = useContext(FormIndexContext) as FormIndexContextType;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFieldsType>({
    resolver: zodResolver(formFieldsShema),
  });

  const onSubmit: SubmitHandler<FormFieldsType> = () => setFormIndex(1);

  return (
    <div>
      <article>
        <h2 className='form-title'>Personal info</h2>
        <p className='form-p'>
          Please provide your name, email address, and phone number.
        </p>
      </article>

      <form
        id='personal-info'
        className='personal-info-form space-y-3 lg:space-y-6'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <div className='flex justify-between'>
            <label htmlFor='name'>Name</label>
            {errors.name && (
              <p className='text-Strawberry-red'>{`${errors.name.message}`}</p>
            )}
          </div>
          <input
            className={`${
              errors.name
                ? "border-Strawberry-red focus:outline-0"
                : "border-Light-gray focus:outline-Marine-blue"
            }`}
            {...register("name")}
            name='name'
            id='name'
            placeholder='e.g. Stephen King'
            type='text'
            value={name}
            onChange={updateFormData}
          />
        </div>

        <div>
          <div className='flex justify-between'>
            <label htmlFor='email'>Email Address</label>
            {errors.email && (
              <p className='text-Strawberry-red'>{`${errors.email.message}`}</p>
            )}
          </div>
          <input
            className={`${
              errors.email
                ? "border-Strawberry-red focus:outline-0"
                : "border-Light-gray focus:outline-Marine-blue"
            }`}
            {...register("email")}
            name='email'
            id='email'
            placeholder='e.g. stephenking@lorem.com'
            type='email'
            value={email}
            onChange={updateFormData}
          />
        </div>

        <div>
          <div className='flex justify-between'>
            <label htmlFor='phoneNumber'>Phone Number</label>
            {errors.phoneNumber && (
              <p className='text-Strawberry-red'>{`${errors.phoneNumber.message}`}</p>
            )}
          </div>
          <input
            className={`${
              errors.phoneNumber
                ? "border-Strawberry-red focus:outline-0"
                : "border-Light-gray focus:outline-Marine-blue"
            }`}
            {...register("phoneNumber", {
              valueAsNumber: true,
            })}
            name='phoneNumber'
            id='phoneNumber'
            placeholder='e.g. +1 234 567 890'
            type='number'
            inputMode='numeric'
            value={phoneNumber}
            onChange={updateFormData}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
