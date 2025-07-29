import Heading from "../common/cards/Heading";
import CustomButton from "../ui/CustomButton";
import homejson from "../../json/Home.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const TopWorkspace = () => {
 const baseurl = "http://localhost:3000/upload";
  return (
    <>
      <section>
        <div className="container">
          <div className="flex flex-col md:gap-[60px] gap-[30px] font-inter py-[30px] md:py-[60px]  ">
            <Heading
              title={"Top Featured Workspaces"}
              cMain={"max-w-[895px] w-full mx-auto"}
              pagragraph={
                "Handpicked workspaces loved by remote professionals and teams."
              }
              cParagraph={" md:w-[507px] w-[232px]"}
            />
            <div className="flex w-full justify-between">
              <Swiper
                spaceBetween={32}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  456: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                  },
                  614: {
                    slidesPerView: 1.6,
                  },
                  770: {
                    slidesPerView: 1.6,
                  },
                  972: {
                    slidesPerView: 2.2,
                  },
                  1130: {
                    slidesPerView: 2.5,
                  },
                  1334: {
                    slidesPerView: 2.7,
                  },
                  1450: {
                    slidesPerView: 3,
                  },
                }}
                className="mySwiper"
              >
                {homejson.TopWorkspace.map((item, index) => (
                  <SwiperSlide>
                    <div
                      key={item + index}
                      className="flex flex-col md:max-w-[419px] max-w-[336px] w-full overflow-hidden bg-lightGray  rounded-3xl"
                    >
                      <img className="md:max-w-[419px] md:h-[240px] w-full max-w-[336px] h-[192px]" src={`${baseurl}/${item.headimg}`} alt="headimg" />
                      <div className="flex flex-col md:p-[24px_20px_40px_20px] p-[20px_19px_30px_20px]">
                        <h4 className="font-medium md:text-[22px] text-[20px] leading-[130%] md:pb-3 pb-[14px] ">
                          {item.title}
                        </h4>
                        <div className="flex gap-[10px] md:pb-5 pb-[18px]">
                          <img
                            className="md:w-[22px] w-[20px] md:h-[22px] h-[20px]"
                            src="/svg/mdi_location.svg"
                            alt="mdi_location"
                          />
                          <h4 className="md:text-[16px] text-[14px] leading-[130%] text-darkGray">
                            {item.location}
                          </h4>
                        </div>
                        <div className="flex w-full justify-between md:pb-[21px] pb-[24px]">
                          {item.benifits.map((item, index) => (
                            <h4 className="px-4 py-2 rounded-xl md:text-xs text-[10px] leading-[130%] bg-white">
                              {item.title}
                            </h4>
                          ))}
                        </div>
                        <div className="flex justify-between md:pb-5 pb-6">
                          <div className="flex gap-[10px] md:text-base text-[14px] leading-[130%] items-center  ">
                            <img
                              className="w-[20px] h-[20px]"
                              src="/svg/dark_star.svg"
                              alt=""
                            />
                            <h4 className=" text-darkGray">{item.raiting}</h4>
                          </div>
                          <h4 className="text-golden">{item.price}</h4>
                        </div>
                        <CustomButton
                          children={" View Details"}
                          type="gradient"
                          className="md:max-w-[355px] max-w-[296px] font-inter font-[400] leading-[130%] md:text-[22px] text-[14px ] w-full mx-auto"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopWorkspace;
