import homejson from "../../json/Home.json"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
const HowItWorks = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="flex gap-[60px] flex-col justify-center items-center my-[60px] font-inter">
                        <div className="flex flex-col gap-6 justify-center items-center max-w-[647px] w-full">
                            <div className="flex w-full justify-between items-center">
                                <img src="/svg/leftlinebar.svg" alt="leftlinebar" />
                                <h4 className=" font-semibold text-4xl leading-[130%]">How It Works</h4>
                                <img src="/svg/rightlinebar.svg" alt="rightlinebar" />
                            </div>
                            <p className="w-full text-center text-xl leading-[130%] text-darkGray">Booking a coworking space has never been easier.</p>
                        </div>
                        <div className="flex justify-between  w-full ">
                            <Swiper
                            spaceBetween={32}
                                breakpoints={{
                                    375: {
                                        slidesPerView: 1.5,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                    },
                                    800: {
                                        slidesPerView: 2.5,

                                    },
                                    1156: {
                                        slidesPerView: 2.7,
                                    },
                                    1450: {
                                        slidesPerView: 3,
                                    }
                                }}
                                className="mySwiper">

                                {
                                    homejson.HowItWorks.map((item, index) => (
                                        <SwiperSlide >
                                            <div key={index + item} className="flex cursor-pointer flex-col gap-[30px] max-w-[419px] w-full p-[30px] rounded-3xl border border-[#d8d8d8] bg-lightGray ">
                                                <img className="w-10 h-10" src={item.img} alt="mdi_location" />
                                                <div className="flex flex-col gap-4">
                                                    <h4 className="font-medium text-2xl leading-[130%]">{item.title}</h4>
                                                    <p className="text-darkGray text-lg leading-[130%]">{item.paragraph}</p>
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