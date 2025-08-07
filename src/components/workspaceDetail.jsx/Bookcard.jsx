import { useState } from "react";
import CustomButton from "../ui/CustomButton";

const Bookcard = () => {
     const [isPerson, setisPerson] = useState();
  const [personCount, setPersonCount] = useState(1);
  const togglePersonDropdown = () => {
    setisPerson(!isPerson);
  };
  return (
    <>
    <div className="max-w-[419px] rounded-2xl p-[30px]  w-full my-box">
                    <div className="flex flex-col ">
                      <h1 className="font-inter font-medium text-[22px] leading-[150%] pb-[38px]">
                        Add dates for price
                      </h1>
                      <div className="flex flex-col max-w-[349px] w-full border border-[#55555533] rounded-2xl ">
                        <div className="flex items-center w-[349px]">
                          <div className="flex flex-col  gap-[3px] pr-[97px] pl-4">
                            <h4 className="font-inter font-medium text-[10px] leading-[150%]">
                              CHECK-IN
                            </h4>
                            <h4 className="font-inter font-medium text-sm leading-[150%] text-darkGray">
                              Add date
                            </h4>
                          </div>
                          <span className="block h-[75px] w-[1px]  bg-[#55555533]"></span>
                          <div className="flex flex-col pl-4 pr-[98px]   gap-[3px]">
                            <h4 className="font-inter font-medium text-[10px] leading-[150%]">
                              CHECKOUT
                            </h4>
                            <h4 className="font-inter font-medium text-sm text-darkGray leading-[150%]">
                              Add date
                            </h4>
                          </div>
                        </div>
                        <span className=" w-full h-[0.9px] block bg-[#55555533]"></span>
                        <div className="pt-[18px] gap-[3px] w-full pl-4 pr-[14px] pb-[18px] relative">
                          <h4 className="font-inter font-medium text-[10px] leading-[150%]">
                            PERSON
                          </h4>
                          <div
                            className="flex w-full justify-between font-inter font-medium text-sm text-darkGray leading-[150%] cursor-pointer"
                            onClick={togglePersonDropdown}
                          >
                            <h4>
                              {personCount} person{personCount > 1 ? "s" : ""}
                            </h4>
                            <img
                              src="/svg/arrowdown.svg"
                              alt="arrowdown"
                              className={`transition-transform duration-300 ${
                                isPerson ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                          {isPerson && (
                            <div className="absolute top-full left-0 my-box bg-white shadow-md rounded-md z-10 mt-2 w-[100px]">
                              {[1, 2, 3, 4, 5].map((num) => (
                                <div
                                  key={num}
                                  onClick={() => {
                                    setPersonCount(num);
                                    setisPerson(false);
                                  }}
                                  className="px-4 py-2 hover:bg-gray-100 font-inter cursor-pointer text-sm"
                                >
                                  {num} person{num > 1 ? "s" : ""}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      <CustomButton
                        type="gradient"
                        children={"Book Now"}
                        className="mt-[30px]"
                      />
                    </div>
                  </div>
    </>
  )
}

export default Bookcard