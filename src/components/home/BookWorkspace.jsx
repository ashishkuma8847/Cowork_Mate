import Heading from "../common/cards/Heading";
import CustomButton from "../ui/CustomButton";

const BookWorkspace = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="flex flex-col gap-[30px] py-[30px] md:py-[60px] justify-center items-center">
            <Heading
              title={"Ready to Book Your Perfect Workspace?"}
              cMain={"max-w-[933px] w-full mx-auto md:gap-[22px]"}
              pagragraph={"Join thousands of professionals using CoWorkMate to work better, smarter, and anywhere."}
              cParagraph={" md:w-[669px] w-[253px]"}
            
            />
            <div className="flex flex-col gap-5 md:gap-[28px] max-w-[328px] w-full justify-center items-center">
                <CustomButton children={"Find a Workspace"} className="md:px-[60px] px-[24px] md:py-[18px] py-[12px] md:text-[24px] leading-[130%] text-[14px]" type="gradient" />
                <p className="font-inter text-darkGray font-medium text-sm md:text-[20px] leading-[130%]">or <span className="text-violet">Learn How It Works</span> </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookWorkspace;
