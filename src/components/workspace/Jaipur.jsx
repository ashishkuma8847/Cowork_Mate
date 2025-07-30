import { SwiperSlide, Swiper } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
const Jaipur = ({ jaipur }) => {
    return (
        <>
            <div className="flex items-center gap-[10px]">
                <h5 className="font-inter font-semibold text-[22px] leading-[100%]">
                    Available in Jaipur
                </h5>
                <img src="/svg/arrowright.svg" alt="" />
            </div>
            <div className="flex ">

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
                }}>
                {
                    jaipur.length === 0 ? (
                        <p>Loading...</p>
                    ) : (jaipur.map((item, index) => {
                        const formattedPrice = item.price.toLocaleString("en-IN");
                        
                        return(
                        <SwiperSlide 
                            key={index}
                            className=" mt-[32px] rounded-[12px] overflow-x-hidden mb-[30px] md:mb-[50px]  max-w-[419px] w-full"
                        >
                            <img className='cursor-pointer' src={`http://localhost:3000/upload/${item.mainImgPath}`} alt={item.text || "workspace image"} />
                            <div className="font-inter ">
                                <h2 className="pb-[6px] pt-3 md:pt-[14px]  font-medium text-lg sm:text-[22px] leading-[100%]">
                                    {item.name}
                                </h2>
                                <span className="flex items-center text-darkGray gap-1 pb-[22px] md:pb-[22px]">
                                    <p className=" font-normal text-base sm:text-lg leading-[100%]">
                                        {item.location}
                                    </p>
                                    <span className="flex items-center gap-[10px]">
                                        <p className=" font-normal text-base sm:text-lg leading-[100%]">
                                            ₹{formattedPrice}
                                        </p>
                                        <img src={`http://localhost:3000/upload/${item.raitingImgPath}`} alt="" />
                                        <p className=" font-normal text-base sm:text-lg leading-[100%]">
                                            {item.raiting}
                                        </p>
                                    </span>
                                </span>
                            </div>
                        </SwiperSlide>
                    )}))}
            </Swiper>
            </div>
        </>
    )
}

export default Jaipur