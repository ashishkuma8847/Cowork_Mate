import homejson from "../../json/Home.json"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Heading from "../common/cards/Heading";
const HowItWorks = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="flex gap-[30px] md:gap-[60px] flex-col justify-center items-center my-[30px] md:my-[60px] font-inter">
                        <Heading   title={"How It Works"} cMain={" max-w-[647px] w-full"} cParagraph={"w-[232px]  sm:w-full"}  pagragraph={"Booking a coworking space has never been easier."}/>
                        <div className="flex justify-between  w-full ">
                            <Swiper
                            spaceBetween={32}
                                breakpoints={{
                                     320: {
                                        slidesPerView: 1,
                                        spaceBetween:20
                                    },
                                     375: {
                                        slidesPerView: 1.2,
                                        spaceBetween:20
                                    },
                                    467: {
                                        slidesPerView: 1.5,
                                    },
                                    583: {
                                        slidesPerView: 1.8,
                                    },
                                    687: {
                                        slidesPerView: 2,
                                    },
                                    1100: {
                                        slidesPerView: 2.5,

                                    },
                                    1156: {
                                        slidesPerView: 3,
                                    },
                                    1450: {
                                        slidesPerView: 3,
                                    }
                                }}
                                className="mySwiper">

                                {
                                    homejson.HowItWorks.map((item, index) => (
                                        <SwiperSlide >
                                            <div key={index + item} className="flex cursor-pointer flex-col gap-[26px] md:gap-[30px] max-w-[299px] md:max-w-[419px] w-full p-[20px] md:p-[30px] rounded-3xl border border-[#d8d8d8] bg-lightGray ">
                                                <img className="md:w-10 md:h-10 w-[30px] h-[30px]" src={item.img} alt="mdi_location" />
                                                <div className="flex flex-col gap-[19px] md:gap-4">
                                                    <h4 className="font-medium text-base  md:text-2xl leading-[130%]">{item.title}</h4>
                                                    <p className="text-darkGray font-medium text-sm md:text-lg leading-[130%]">{item.paragraph}</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowItWorks
// #d8d8d8