
const Heading = ({title,pagragraph,cMain,cParagraph,cTitle,cTitleMain}) => {
  return (
    <>
      <div className={`${ cMain} flex flex-col gap-3 md:gap-6 justify-center items-center max-w-[647px] w-full`}>
        <div className={` ${cTitleMain} flex w-full justify-center md:justify-between items-center`}>
          <img
            className="md:block hidden"
            src="/svg/leftlinebar.svg"
            alt="leftlinebar"
          />
          <h4 className={`${cTitle} md:font-semibold font-medium text-[22px] md:text-4xl leading-[130%]`}>
            {title}
          </h4>
          <img
            className="md:block hidden"
            src="/svg/rightlinebar.svg"
            alt="rightlinebar"
          />
        </div>
        <p className={`${cParagraph} sm:w-full w-[232px] text-center text-[14px] md:text-xl leading-[130%] text-darkGray`}>
          {pagragraph}
        </p>
      </div>
    </>
  );
};

export default Heading;
