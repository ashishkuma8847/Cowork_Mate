import Heading from "../common/cards/Heading";
import questionsjson from "../../json/Home.json";
import { useState } from "react";
const AskedQuestions = () => {
  const [isOpen, SetIsopen] = useState(0);
  return (
    <>
      <section>
        <div className="container">
          <div className="flex flex-col md:gap-[80px] gap-[30px] font-inter py-[30px] md:py-[60px]  ">
            <Heading
              title={"Frequently Asked Questions"}
              cMain={"max-w-[938px] w-full mx-auto"}
              pagragraph={"Got a question? We’re here to help."}
              cParagraph={" md:w-[335px] w-[253px]"}
            />
            <div className="w-full  flex flex-col items-end">
              <div className="max-w-[1009px] w-full flex flex-col gap-[20px] md:gap-[30px]">
                {questionsjson.questions.map((item, index) => {
                  return (
                    <div
                      onClick={() => SetIsopen(index)}
                      key={index + item}
                      className="flex justify-between cursor-pointer w-full"
                    >
                      <div className={` flex flex-col items-start ${isOpen === index ? "gap-[12px] md:gap-[14px]" : "gap-0"} `}>
                        {
                          index === 4 ?  <h4
                          className={`font-inter max-w-[562px] w-full font-medium md:text-xl text-xs  leading-[130%] `}
                        >
                          {item.question}
                        </h4> : <h4
                          className={`font-inter max-w-[562px] w-full font-medium md:text-xl text-xs border-b leading-[130%] ${
                            isOpen !== index
                              ? " border-dark-gray pb-[12px] md:pb-[20px] "
                              : "border-transparent pb-[0px] "
                          } `}
                        >
                          {item.question}
                        </h4>
                        }
                       
                        <p
                          className={`font-inter font-normal text-[10px] md:text-base leading-[130%] text-darkGray max-w-[661px] w-full overflow-hidden transition-all duration-500 ease-in-out ${
                            isOpen === index
                              ? "max-h-[50px] opacity-100"
                              : "max-h-0 opacity-0"
                          } `}
                        >
                          {item.answer}
                        </p>
                      </div>
                      <img
                        className={`${
                          isOpen === index
                            ? "rotate-180  transition-all duration-500"
                            : "rotate-0"
                        }  w-[24px] h-[24px]  md:block hidden `}
                        src={"/svg/arrowdown.svg"}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AskedQuestions;
