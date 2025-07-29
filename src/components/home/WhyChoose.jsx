import Heading from "../common/cards/Heading"
import Whychoosecard from "../common/cards/workcard"
import { Swiper, SwiperSlide } from 'swiper/react';
import Homejson from "../../json/Home.json";
const WhyChoose = () => {
  return (
    <>
    <section>
        <div className="container">
            <div className="flex flex-col gap-[30px] md:gap-[60px] py-[30px] md:py-[60px]">
               <Heading title={"Why Choose CoWorkMate?"} cMain={"max-w-[919px] w-full mx-auto"}  pagragraph={"Simplifying workspace booking for individuals, teams, and businesses."} cParagraph={" md:w-[487px] w-[253px]"}/>
<div className="hidden xl:flex flex-wrap justify-center gap-8">
                    {Homejson.WhyChoose.map((item, index) => (
                        <div key={index+item+Date.now()}>
                            <Whychoosecard
                                logo={item.logo}
                                title={item.title}
                                text={item.text}
                            />
                        </div>
                    ))}
                </div>

                <div className="block xl:hidden">
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
                        {Homejson.WhyChoose.map((item, index) => (
                            <SwiperSlide key={index+item+Date.now()}>
                                <Whychoosecard
                                    logo={item.logo}
                                    title={item.title}
                                    text={item.text}
                                />
                            </SwiperSlide>
                        ))}
                </Swiper>
                    </div>

            </div>
        </div>
    </section>
    
    </>
  )
}

export default WhyChoose