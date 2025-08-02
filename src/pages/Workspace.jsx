import { useEffect, useState } from "react"
import CustomButton from "../components/ui/CustomButton"
import axios from "axios"
import Delhi from "../components/workspace/Delhi"
import Chandigarh from "../components/workspace/Chandigarh"
import Noyda from "../components/workspace/Noyda"
import Jaipur from "../components/workspace/Jaipur"
import Kangra from "../components/workspace/Kangra"
import Dheradun from "../components/workspace/Dheradun"

const Workspace = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/getallproduct");
        console.log("Fetched products:", res.data.data);
        setData(res.data.data);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchProducts(); 
  }, []);
    const delhi = data.filter((item)=>item.catogry === "Delhi")
    const chandigarh = data.filter((item)=>item.catogry === "Chandigarh")
    const noyda = data.filter((item)=>item.catogry === "Noyda")
    const jaipur = data.filter((item)=>item.catogry === "Jaipur")
    const kangra = data.filter((item)=>item.catogry === "Kangra")
    const dheradun = data.filter((item)=>item.catogry === "Dheradun")
    return (
        <>
            <section>
                <div className="container">
                    <div className="flex flex-col md:pt-[60px] pt-[22px] md:pb-[50px] pb-[20px] font-inter">
                        <div className="flex flex-col justify-center items-center md:gap-[50px] gap-[36px] md:pb-[100px] pb-[50px]">
                            <div className="flex flex-col gap-8 justify-center items-center">
                                <h1 className="font-semibold md:text-[64px] text-[26px] leading-[100%]">Browse Workspaces</h1>
                                <p className="text-[22px] leading-[100%] text-darkGray md:block hidden">Find the perfect coworking space for you</p>
                            </div>
                            <div className="flex overflow-hidden bg-lightGray rounded-xl justify-between items-center max-w-[800px]  w-full md:text-lg text-[10px] leading-[100%]">
                                <div className="md:py-[30px] py-[19px] cursor-pointer border-r border-[#55555533] flex md:max-w-[274px] w-[118px] md:w-full justify-between items-center md:pl-5 md:pr-3 pl-[10px] pr-[10px]">
                                    <h4>Enter city or location</h4>
                                    <img className="hidden md:block"  src="/svg/arrow-down2.svg" alt="arrow-down2" />
                                </div>
                                <div className="md:py-[30px] py-[19px]  border-r cursor-pointer border-[#55555533] flex md:max-w-[220px] md:w-full w-[74px] justify-between items-center md:pl-[45px] md:pr-3  pl-[10px] pr-[10px]">
                                    <h4 className="">Price range</h4>
                                    <img className="hidden md:block" src="/svg/arrow-down2.svg" alt="arrow-down2" />
                                </div>
                                <div className="  flex max-w-[307px] w-full sm:justify-between gap-[10px] items-center md:pl-[20px] pl-[10px]">
                                    <h4>Amenities</h4>
                                    <CustomButton type="gradient" children={"Search"} className="md:py-[31px] py-[20px] md:text-xl text-[10px] rounded-none leading-[100%] md:px-10 px-[22px]"/>
                                </div>
                            </div>
                        </div>
                        <Delhi delhi={delhi}/>
                        <Chandigarh chandigarh={chandigarh}/>
                        <Noyda noyda={noyda}/>
                        <Jaipur jaipur={jaipur}/>
                        <Kangra kangra={kangra}/>
                        <Dheradun dheradun={dheradun}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Workspace