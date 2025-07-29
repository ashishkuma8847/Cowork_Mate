
const Heading = ({title,pagragraph,cMain,cParagraph,cTitle,cTitleMain}) => {
  return (
    <>
      <div className={` ${cMain} flex flex-col gap-3 md:gap-6 font-inter justify-center items-center`}>
        <div className={` ${cTitleMain} flex w-full justify-center lg:justify-between items-start`}>
          <img
            className="lg:block hidden py-[22px] w-[164px]"
            src="/svg/leftlinebar.svg"
            alt="leftlinebar"
          />
          <h4 className={` ${cTitle} md:font-semibold text-center font-medium font-inter text-[22px] md:text-[43px] leading-[130%]`}>
            {title}
          </h4>
          <img
            className="lg:block py-[22px] hidden w-[164px]"
            src="/svg/rightlinebar.svg"
            alt="rightlinebar"
          />
        </div>
        <p className={` ${cParagraph}  text-center text-[14px] font-inter md:text-xl leading-[130%] text-darkGray`}>
          {pagragraph}
        </p>
      </div>
    </>
  );
};

export default Heading;
