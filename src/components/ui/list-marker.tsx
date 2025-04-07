const ListMarker = ({ stepNumber }: { stepNumber: number }) => {
  return (
    <div className='marker w-[3rem] h-[3rem] lg:w-[2.5rem] lg:h-[2.5rem] aspect-square font-Ubuntu-bold rounded-full border-2 border-White flex items-center justify-center'>
      {stepNumber}
    </div>
  );
};

export default ListMarker;
