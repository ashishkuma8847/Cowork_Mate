import Heading from "../common/cards/Heading"
import { SwiperSlide,Swiper } from "swiper/react";
import homejson from "../../json/Home.json"
const UserSaying = () => {
  return (
    <>
    <section>
        <div className="container">
            <div className="flex flex-col gap-[30px] md:py-[60px] py-[30px]  md:gap-[60px] ">
                    <Heading title={"What Our Users Are Saying"} cMain={"max-w-[919px] w-full mx-auto"} cParagraph={"md:w-[457px] w-[253px]"} pagragraph={"Trusted by remote professionals, startups, and global teams."}/>
                    <div className="">
                    <Swiper 
                    spaceBetween={32}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        375: {
                            slidesPerView: 1,
                        },
                        500: {
                            slidesPerView: 1.2,

                        },
                        640: {
                            slidesPerView: 1.5,
                        },
                        750: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2.5,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                {
                    homejson.UserSay.map((item, index) => (
                        <SwiperSlide className="p-[30px] bg-lightGray max-w-[419px] w-full max-h-[248px] rounded-2xl" key={index}>
                            <div className="flex gap-3">
                                <img src={`${item.logo}`} alt="svg" />
                                <div className="flex flex-col gap-0.5">
                                    <h1 className="font-inter font-medium text-base leading-[130%]">{item.name}</h1>
                                    <h1 className="font-inter font-normal text-xs leading-[130%] text-darkGray">{item.work}</h1>
                                </div>
                            </div>
                            <h1 className=" py-5 sm:py-6 font-inter font-normal text-sm sm:text-lg leading-[130%] text-darkGray  line-clamp-3">{item.info}</h1>
                            <div className="flex justify-between items-center ">
                                <div className="flex gap-3">
                                    <img src={`${item.ratinglogo}`} alt="rating" />
                                    <h1 className="font-inter font-medium text-base text-darkGray leading-[130%]">{item.ratting}</h1>
                                </div>
                                <h1 className="font-inter font-normal text-base text-darkGray leading-[130%]">{item.date}</h1>
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

export default UserSaying