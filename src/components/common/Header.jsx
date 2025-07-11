import "./header.css"
import pages from "../../json/Header.json"
import { Link, NavLink } from "react-router-dom"
import { useState } from "react"
import CustomButton from "../ui/CustomButton"
  const Header = () => {
  const [Click, setClick] = useState(false)
  const [dashbord, setdashbord] = useState(false)
  const [logout, setlogout] = useState(false)
console.log(dashbord)
const handleDashboardClick = () => {
  setdashbord(true);
  setClick(false);
  setlogout(false)
};

const handleClick = () => {
  setClick(true);
  setdashbord(false);
  setlogout(false)
};

const handleLogout = () => {
  setlogout(true);
  setdashbord(false);
  setClick(false)
};
    return (
    <> 
      <header>
        <section className=" relative">
          <div onClick={()=> setClick(false) || setdashbord(false) || setlogout(false)} className={`w-[100%] absolute  h-screen bg-[#00000048] z-10 ${Click || dashbord || logout ? "block " : "hidden"}`}></div>

          <div className='container '>
            <div className="flex justify-between items-center w-full sm:py-[35px] pt-[40px]">

              {/* head icon */}
              <Link to={"/"} className="flex justify-between items-center sm:max-w-[173px] max-w-[140px] w-full">

                <img className="sm:w-[34px] sm:h-[30px] w-[27px] h-[24px]" src={"/images/headlogo.png"} alt="headicon" />
                <h1 className="font-inter font-semibold sm:text-xl text-base ">Cowork Mate</h1>
              </Link>
              {/* head pages */}
              <div className="lg:flex justify-between hidden items-center max-w-[442px] w-full font-inter text-lg font-normal ">
                {
                  pages.pages.map((item, index) => (
                    <NavLink to={item.path} >
                      {item.title}
                    </NavLink>
                  ))
                }
              </div>
              {/* profile bar */}
              <div className="flex justify-between items-center sm:max-w-[151px] sm:w-full z-50">
                {
                  pages.images.map((item, index) => (
                    <div className="sm:block hidden" key={index}>
                      {
                      index === 1 ?  <img onClick={()=>setdashbord(!dashbord)} className={`cursor-pointer z-50`} src={item.pathimg} alt="images" /> : <img className="cursor-pointer" src={item.pathimg} alt="images" />

                        
                      }
                    </div>
                  ))
                }
                {/* button menu bar */}
                <button className="grid sm:hidden  z-50 lg:hidden w-[18px] justify-end  h-[15px] items-center   relative cursor-pointer" onClick={() => handleClick() || setClick(!Click) }>
                  <p className={`${Click || dashbord ? "-rotate-45 absolute  z-50 bg-white" : "-rotate-0 z-0 bg-black"} transition-all    w-[18px] h-[2px] duration-500`} ></p>
                  <span className={`${Click || dashbord ? "bg-transparent" : " bg-black"} w-[18px]  h-[2px] bg-black  transition-all duration-75 `} ></span>
                  <p className={`${Click || dashbord ? "rotate-45 absolute  z-50 bg-white" : "rotate-0 absolute  z-0 bg-black"}  transition-all   w-[18px]  h-[2px]  duration-500`}></p>
                </button>
                {/* popup bar */}
                <div className={`absolute ${Click ? "w-[270px] opacity-100 text-xl pl-[20px] z-50" : "w-0 p-0 text-[0px] -z-50 opacity-0"} font-inter  flex flex-col gap-[14px]  transition-all duration-200 sm:hidden  top-16 pt-[20px] pb-[32px]   bg-white rounded-md right-5`}>
                  {
                    pages.pagespoup.map((item, index) => (
                      <NavLink onClick={() => setClick(false)} to={item.path} >
                        {
                          index === 5 ? (<>
                            <h1 onClick={()=>handleDashboardClick()} className={"flex flex-col  "}>{item.title}</h1> </>)
                          :
                            (<>
                              <h1 className={"flex flex-col pb-5 border-b border-[#38356133] "}>{item.title}</h1>
                            </>)

                        }


                      </NavLink>
                    ))
                  }
                </div>
              </div>
                  {/* Dashbord bar */}
                    <div className={`${dashbord  ? "w-[270px] opacity-100 text-xl pl-[20px] z-50" : "w-0 p-0 text-[0px] -z-50 opacity-0"} font-inter  flex flex-col gap-[12px] cursor-pointer  transition-all  duration-200 absolute top-16 pt-[20px] pb-[32px]   bg-white rounded-md right-5 sm:right-60 sm:top-16`}>
                      {
                        pages.accountdails.map((item,index)=>(
                          <Link onClick={()=>setdashbord(false)} className={`${dashbord ? "text-xl" : "text-[0px]"} flex gap-[20px] font-inter  leading-[140%] pb-[21px] border-b border-[#38356133]`} to={item.path} key={index}>
                            <div className="bg-lightGray rounded-full w-[30px] h-[30px] flex justify-center items-center">
                            {
                              index === 0 || index ===2 ?  <img className="w-[16px] h-[16px]   " src={item.pathimg} alt="images" />:<img className="w-[30px] h-[30px]" src={item.pathimg} alt="images" />
                            }</div>
                           {
                            index === 5 ? <h4 onClick={()=>handleLogout()}>{item.title}</h4> : <h4>{item.title}</h4>
                           }
                           
                          </Link>
                        ))
                      }
                    </div>
                    <div className={`${logout ? "w-[320px] pl-[20px] pr-[32px] z-50 opacity-100" : "w-0 p-0 -z-50 opacity-0"} transition-all duration-200 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-56   flex flex-col w-[320px] font-inter  gap-[30px] py-[24px] rounded-[12px]`}>
                      <div className="flex flex-col gap-[14px]">
                      <h1 className="font-semibold text-xl leading-[120%]">Log Out</h1>
                      <p className=" text-base leading-[130%] text-darkGray">Are you sure you want to log out from your account?</p>
                      </div>
                      <div className="flex gap-[10px]">
                        <CustomButton onClick={()=>setlogout(false)} children={"Cancle"} />
                        <CustomButton children={"Log Out"} type="gradient"/>
                      </div>
                    </div>
            </div>
          </div>
        </section>
      </header>
    </>
  )
}

export default Header