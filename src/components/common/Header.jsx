import "./header.css";
import pages from "../../json/Header.json";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import CustomButton from "../ui/CustomButton";
const Header = () => {
  const [Click, setClick] = useState(false);
  const [dashbord, setdashbord] = useState(false);
  const [logout, setlogout] = useState(false);
  const [notification, setnotification] = useState(false);
  console.log(dashbord);
  const handleDashboardClick = () => {
    setdashbord(true);
    setClick(false);
    setlogout(false);
    setnotification(false)
  };

  const handleClick = () => {
    setClick(true);
    setdashbord(false);
    setlogout(false);
    setnotification(false)

  };

  const handleLogout = () => {
    setlogout(true);
    setdashbord(false);
    setClick(false);
    setnotification(false)
  };
    const handlenotify = () => {
      setnotification(true)
    setlogout(false);
    setdashbord(false);
    setClick(false);
  };
  return (
    <>
      <header>
        <section className=" ">
          <div
            onClick={() =>
              setClick(false) || setdashbord(false) || setlogout(false) || setnotification(false)
            }
            className={`w-[100%] absolute  h-screen bg-[#00000048]  ${
              Click || dashbord || logout || notification ? "block z-50 " : "hidden -z-50"
            }`}
          ></div>

          <div className="container ">
            <div className="flex justify-between items-center w-full sm:py-[35px] pb-[18px] pt-[40px]">
              {/* head icon */}
              <Link
                to={"/"}
                className="flex justify-between items-center sm:max-w-[173px] max-w-[140px] w-full"
              >
                <img
                  className="sm:w-[34px] sm:h-[30px] w-[27px] h-[24px]"
                  src={"/images/headlogo.png"}
                  alt="headicon"
                />
                <h1 className="font-inter font-semibold sm:text-xl text-base ">
                  Cowork Mate
                </h1>
              </Link>
              {/* head pages */}
              <div className="lg:flex justify-between hidden items-center max-w-[442px] w-full font-inter text-lg font-normal ">
                {pages.pages.map((item, index) => (
                  <NavLink key={item+index} to={item.path}>{item.title}</NavLink>
                ))}
              </div>
              {/* profile bar */}
              <div className="flex relative justify-between items-center sm:max-w-[151px] sm:w-full z-50">
                {pages.images.map((item, index) => (
                  <div className="sm:block hidden z-50" key={index}>
                    {index === 1 ? (
                      <img
                        onClick={() => setdashbord(!dashbord) || setnotification(false)}
                        className={`cursor-pointer `}
                        src={item.pathimg}
                        alt="images"
                      />
                    ) : index === 0 ?  <img onClick={()=>setnotification(!notification) || setdashbord(false)}
                        className="cursor-pointer "
                        src={item.pathimg}
                        alt="images"
                      /> : (
                      <img
                        className="cursor-pointer"
                        src={item.pathimg}
                        alt="images"
                      />
                    )}
                  </div>
                ))}
                {/* button menu bar */}
                <button
                  className="grid sm:hidden  z-50 lg:hidden w-[18px] justify-end  h-[15px] items-center   relative cursor-pointer"
                  onClick={() => handleClick() || setClick(!Click)}
                >
                  <p
                    className={`${
                      Click || dashbord
                        ? "-rotate-45 absolute  z-50 bg-white"
                        : "-rotate-0 z-0 bg-black"
                    } transition-all    w-[18px] h-[2px] duration-500`}
                  ></p>
                  <span
                    className={`${
                      Click || dashbord ? "bg-transparent" : " bg-black"
                    } w-[18px]  h-[2px] bg-black  transition-all duration-75 `}
                  ></span>
                  <p
                    className={`${
                      Click || dashbord
                        ? "rotate-45 absolute  z-50 bg-white"
                        : "rotate-0 absolute  z-0 bg-black"
                    }  transition-all   w-[18px]  h-[2px]  duration-500`}
                  ></p>
                </button>
                {/* popup bar */}
                <div
                  className={`absolute ${
                    Click
                      ? "w-[270px] opacity-100 text-xl pl-[20px] z-50"
                      : "w-0 p-0 text-[0px] -z-50 opacity-0"
                  } font-inter  flex flex-col gap-[14px]  transition-all duration-200 sm:hidden  top-8 pt-[20px] pb-[32px]   bg-white rounded-md right-1`}
                >
                  {Click &&   pages.pagespoup.map((item, index) => (
                    
                    <NavLink key={index+item} onClick={() => setClick(false)} to={item.path}>
                      {index === 5 ? (
                        <>
                          <h1
                            onClick={() => handleDashboardClick()}
                            className={"flex flex-col  "}
                          >
                            {item.title}
                          </h1>{" "}
                        </>
                      ) : (
                        <>
                          <h1
                            className={
                              "flex flex-col pb-5 border-b border-[#38356133] "
                            }
                          >
                            {item.title}
                          </h1>
                        </>
                      )}
                    </NavLink>
                  ))}
                </div>
                {/* Dashbord bar */}
                <div
                  className={`${
                    dashbord
                      ? " opacity-100 text-xl  z-50"
                      : " p-0 text-[0px] -z-50 opacity-0"
                  } font-inter  flex flex-col pl-[20px] w-[270px] gap-[12px] cursor-pointer  transition-all  duration-200 absolute top-8 pt-[20px] pb-[32px]   bg-white rounded-md right-2 `}
                >
                  {dashbord && pages.accountdails.map((item, index) => (
                    <Link
                      onClick={() => setdashbord(false)}
                      className={`${
                        dashbord ? "text-xl" : "text-[0px]"
                      } border-b border-[#38356133]`}
                      to={item.path}
                      key={index}
                    >
                      {
                        index === 5 ?
                         <div onClick={()=>handleLogout()} className=" flex gap-[20px] font-inter  leading-[140%] pb-[21px]     items-center">
                          <img
                            className="w-[30px] rounded-full  bg-lightGray h-[30px] "
                            src={item.pathimg}
                            alt="images"
                          />
                       <h4>{item.title}</h4> 
                      </div> : index === 2 ? 
                       <div onClick={()=> handlenotify()} className=" flex gap-[20px] font-inter  leading-[140%] pb-[21px]     items-center">
                          <img
                            className="w-[30px] rounded-full bg-lightGray h-[30px] "
                            src={item.pathimg}
                            alt="images"
                          />
                       <h4>{item.title}</h4> 
                      </div> :
                       <div className=" flex gap-[20px] font-inter  leading-[140%] pb-[21px]  rounded-full    items-center">
                          <img
                            className="w-[30px] bg-lightGray h-[30px] "
                            src={item.pathimg}
                            alt="images"
                          />
                       <h4>{item.title}</h4> 
                      </div>
                      }
                      
                    </Link>
                  ))}
                </div>
                {/* logout popup */}
                <div
                  className={`${
                    logout
                      ? " pl-[20px] pr-[32px] z-50 opacity-100"
                      : " p-0 -z-50 opacity-0"
                  } w-[320px] transition-all duration-200 bg-white absolute top-8 right-2   flex flex-col  font-inter  gap-[30px] py-[24px] rounded-[12px]`}
                >
                  { logout&& 
                    <>
                    <div className="flex flex-col gap-[14px] ">
                    <h1 className="font-semibold text-xl leading-[120%]">
                      Log Out
                    </h1>
                    <p className=" text-base leading-[130%] text-darkGray">
                      Are you sure you want to log out from your account?
                    </p>
                  </div>
                  <div className="flex gap-[10px] justify-center">
                    <CustomButton
                      onClick={() => setlogout(false)}
                      children={"Cancle"}
                      className="py-[14px] px-[32px] font-medium text-sm leading-[100%]" 
                    />
                    <CustomButton className="py-[14px] px-[32px] font-medium text-sm leading-[100%]" children={"Log Out"} type="gradient" />
                  </div>
                    </>

                  }
                  
                </div>
                  {/* notification popup */}
                   <div className={`${notification ? " z-50 opacity-100" :" -z-50 opacity-0 "  } transition-all duration-200 w-[319px] absolute right-3 top-8  pt-[23px] pb-[88px]  rounded-md bg-white `}>
                    {

                     <div className=" flex pr-[20px]  pl-[20px] pb-[22px] border-b border-[#38356133] justify-between items-center ">
                          <h4 className={`${notification ? "text-[18px]" : "text-[0px]"} font-inter font-medium  leading-[130%] `}>Notifications</h4>
                          <button className={`${notification ? "text-[16px]" : "text-[0px]"} font-inter font-medium  leading-[130%] text-golden`}>Clear All</button>
                     </div>
                    }
                     <div className={` ${notification ? " z-50 opacity-100" :" -z-50 opacity-0" } relative pr-[15px] flex  pt-[20px] flex-col pl-[15px] font-inter`}>
                      {notification &&
                        pages.notify.map((item,index)=>(
                          <div key={index + item}>
                          {
                            index ===2 ? <div className="flex gap-[22px] items-start font-inter ">
                           <img src={item.img} alt="" />
                         <div className="flex flex-col gap-[8px] ">
                            <h4 className="text-[14px] font-inter  leading-[140%]">{item.titile}</h4>
                            <h4 className="text-[12px] text-darkGray font-medium  leading-[140%">{item.time}</h4>
                         </div></div> : 
                         <div className="flex gap-[22px] items-start font-inter pb-[16px] border-b border-[#38356133] mb-[24px]">
                           <img src={item.img} alt="" />
                         <div className="flex flex-col gap-[8px] ">
                            <h4 className="text-[14px] font-inter  leading-[140%]">{item.titile}</h4>
                            <h4 className="text-[12px] text-darkGray font-medium  leading-[140%">{item.time}</h4>
                         </div></div>
                          }
                          
                          </div>
                        ))
                      }
                        
                     </div>
                   </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
