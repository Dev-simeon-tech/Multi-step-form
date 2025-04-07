import thankYouIcon from "../assets/images/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center lg:h-full py-12 lg:p-0'>
      <img src={thankYouIcon} alt='thank you icon' />
      <h2 className='text-3xl text-Marine-blue font-Ubuntu-bold pt-6 pb-2'>
        Thank you!
      </h2>
      <p className='text-xl text-Cool-gray'>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThankYou;
