import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Placeofferr from "../json/placeoffer.json";
import Calendar from "../components/common/cards/calender";
import detailjson from "../json/WorkspaceDetail.json";
import Bookcard from "../components/workspaceDetail.jsx/Bookcard";

const Workspacedetails = () => {
  const baseurl = "http://localhost:3000/upload";
   const [data, setdata] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = new URLSearchParams(useLocation().search);
  const id = query.get("pages"); // ?pages=productId

  useEffect(() => {
    const fetchProductAndReviews = async () => {
      try {
        // Get product
        const productRes = await axios.get(`http://localhost:3000/api/getoneproduct/${id}`);
        const productData = productRes.data.data;
        setdata([productData]);

        // Get reviews
        const reviewRes = await axios.get(`http://localhost:3000/api/product/${id}`);
        setReviews(reviewRes.data.reviews);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching product or reviews:", error);
        setLoading(false);
      }
    };

    if (id) fetchProductAndReviews();
  }, [id]);

console.log(data,"______________________",reviews)
  if (loading) return <p>Loading...</p>;
  return (
    <>
      <div className="container">
        <div className="">
          {data.map((item, index) => (
            <div key={index}>
              <h1 className="font-inter font-bold text-[26px] md:block hidden py-[50px]">
                {item.name}
              </h1>
              <div className="flex gap-8">
                <img
                  className=" max-w-[758px] w-full rounded-none xl:rounded-l-2xl"
                  src={`${baseurl}/${item.mainImgPath}`}
                  alt=""
                />
                <div className="hidden xl:grid grid-cols-2 gap-8  ">
                  {item.detailImgPath.map((item, index) => (
                    <div key={index}>
                      <img src={`${baseurl}/${item.img}.png`} alt="" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-8">
                <div className="max-w-[758px] w-full  flex flex-col  ">
                  <div className="md:pt-10 pt-5 flex flex-col md:gap-2 gap-3">
                    <h1 className="font-inter font-medium md:text-[22px] text-xl ">
                      {" "}
                      {item.catogry} Filed Office,India
                    </h1>
                    <h1 className="font-inter font-normal md:text-xl text-sm text-darkGray">
                      Lorem Ipsum is simply dummy text of the printing.
                    </h1>
                  </div>
                  <div className="flex max-w-[757px] w-full items-center  md:flex-row   justify-between border-transparent  md:border md:border-black rounded-2xl  md:py-10 md:px-10  md:mt-[60px] mt-[30px] mb-[30px] md:mb-10">
                    <h4 className="  font-inter  font-medium text-sm md:text-lg hidden md:block leading-[120%] text-center">
                      <div className="">Guest</div>
                      <div className="">Favourite</div>{" "}
                    </h4>
                    <h4 className="max-w-[359px] w-full lg:block hidden font-inter font-medium text-base leading-[120%] ml-[51px] mr-5">
                      One of the most loved homes on Cowork Mate, according to
                      guests
                    </h4>
                    <div className="flex flex-col border-r border-lightGray md:border-none sm:pr-[42px] pr-[32px] mr-[32px] sm:mr-[42px] md:p-0 md:m-0  text-center gap-2 md:gap-3">
                      <h4 className="w-full font-inter font-medium text-lg lg:text-base leading-[120%]">
                        {item.raiting}
                      </h4>
                      <img src={`${baseurl}/ratingfivestar.svg`} alt="Rating" />
                    </div>
                    <h4 className="  font-inter border-r h-full flex flex-col justify-center items-center  border-lightGray md:border-none sm:pr-[42px] pr-[32px] mr-[32px] sm:mr-[42px] md:p-0 md:m-0    font-medium text-sm md:text-lg md:hidden  leading-[120%] text-center">
                      <div className="">Guest</div>
                      <div className="">Favourite</div>{" "}
                    </h4>
                    <div className="w-[1px] h-10  bg-lightGray mx-[30px] lg:block hidden"></div>
                    <div className="flex flex-col    text-center gap-2">
                      <h4 className="w-full  font-inter  font-medium text-lg lg:text-base leading-[120%]">
                        5.0
                      </h4>
                      <h4 className="w-full font-inter font-medium text-xs text-darkGray leading-[120%]">
                        Reviews
                      </h4>
                    </div>
                  </div>
                  <div className="flex gap-[18px] items-center border-t  pt-[18px] md:pt-0 pb-[18px] border-b md:border-t-transparent md:border-darkGray border-lightGray md:pb-5 ">
                    <img
                      className="h-[42px] w-[42px]"
                      src={`${baseurl}/${item.hostImgPath}`}
                      alt="Host"
                    />
                    <div className="flex flex-col gap-2">
                      <h4 className="font-inter font-medium text-sm md:text-base">
                        Stay with {item.hostName}
                      </h4>
                      <h4 className="font-inter font-normal text-xs md:text-sm text-darkGray leading-[150%]">
                        Superhost {item.hostingTime} hosting
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-col pl-5 md:pl-0 pt-6 pb-[43px] md:pt-10 gap-[20px] md:gap-10 border-b border-lightGray md:border-darkGray md:pb-5 ">
                    {detailjson.data.map((item, index) => (
                      <div key={index + item}>
                        <div className="flex gap-5 md:gap-7">
                          <img src={item.img} alt="key.svg" />
                          <div className="flex flex-col gap-2">
                            <h4 className="font-inter font-medium text-xs md:text-sm">
                              {item.title}
                            </h4>
                            <h4 className="font-inter font-normal text-[10px] md:text-sm text-darkGray">
                              {item.paragraph}
                            </h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col pl-[10px] md:pl-0 py-5 md:py-10 border-b border-darkGray ">
                    <h1 className="font-inter font-medium text-base md:text-[22px] leading-[150%] pb-3 md:pb-2">
                      About this project
                    </h1>
                    <p className="font-inter font-normal text-[10px] md:text-sm leading-[150%] text-darkGray max-w-[590px] w-full pb-5 md:pb-[30px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500sLorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s.
                    </p>
                    <button className="flex justify-center max-w-[116px] w-full bg-lightGray py-3 rounded-2xl font-inter font-medium text-sm md:text-base">
                      Book Now
                    </button>
                  </div>
                  <div className="flex flex-col pt-10">
                    <h1 className="font-inter font-medium text-[22px] leading-[150%]">
                      Where you’ll Work
                    </h1>
                    <div className="flex gap-8 pt-[30px] pb-10">
                      {item.office.map((item, index) => (
                        <div className="flex flex-col gap-[18px]" key={index}>
                          <img
                            src={`${baseurl}/${item.officeImgPath}`}
                            alt=""
                          />
                          <div className="flex flex-col gap-1">
                            <h4 className="font-inter font-medium text-base">
                              {item.officeTitle}
                            </h4>
                            <h4 className="font-inter font-normal text-sm text-darkGray">
                              {item.officeInfo}
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-[30px] border-b border-darkGray pb-10">
                      <h1 className="font-inter font-medium text-[22px] leading-[150%]">
                        What this place offer
                      </h1>
                      <div className="grid grid-cols-2 gap-5 max-w-[655px] w-full">
                        {Placeofferr.map((item, index) => (
                          <div key={index + Date.now()}>
                            <div className="flex gap-5 w-[261px]">
                              <img src={`/svg/${item.img}`} alt="svg" />
                              {item.title ? (
                                <h4 className="font-medium text-base leading-[150%] text-darkGray">
                                  {item.title}
                                </h4>
                              ) : (
                                <h4 className="font-medium line-through text-base leading-[150%] text-darkGray">
                                  {item.cross}
                                </h4>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col pt-10 pb-10">
                      <div className="flex flex-col gap-2 pb-11">
                        <h4 className="font-inter font-medium text-[22px] leading-[150%]">
                          Select check-in date
                        </h4>
                        <h4 className="font-inter font-normal text-xl leading-[150%]">
                          Add your travel dates for exact pricing
                        </h4>
                      </div>
                      <Calendar />
                    </div>
                  </div>
                </div>
                <div className="mt-20 font-inter xl:block hidden">
                  <Bookcard />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Workspacedetails;
