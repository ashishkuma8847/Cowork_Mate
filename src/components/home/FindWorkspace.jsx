import CustomButton from "../ui/CustomButton"
import CustomInput from "../ui/CustomInput"
import "./Home.css"
const FindWorkspace = () => {
  return (
   <>
   <section>
    <div className="container">
        <div className="flex  pb-[68px]  w-full justify-between  font-inter items-center">
            <div className="flex flex-col gap-[30px] xl:gap-[40px] max-w-[659px]">
                <div className="flex flex-col gap-4"> 
                    <h4 className='font-medium xl:text-[64px] lg:text-[54px]  left-[120%]'>Find Your Perfect Workspace, Anytime.</h4>
              <p className='xl:text-[24px] lg:text-[20px] max-w-[520px] w-full text-darkGray left-[130%]'>Discover and book coworking spaces that match your style and needs.</p></div>
             
              <div className="pt-[30px] pr-[24px] flex flex-col gap-[27px] pb-[30px] pl-6 md:max-w-[263px] xl:max-w-[563px] w-full">
                 <div className="flex justify-between">
                    <CustomInput className="xl:max-w-[228px] max-w-[135px] w-full text-black" image={"/svg/location.svg"} placeholder="Enter city or area" type="text" />
                    <CustomInput  className="xl:max-w-[255px] max-w-[140px]  w-full text-black" image={"/svg/date.svg"} placeholder="Select date" type="number"/>
                 </div>
                 <div className="flex justify-between">
                    <CustomInput  className="xl:w-[343px] max-w-[155px] text-black" image={"/svg/user-round.svg"} placeholder="1 person" type="number"/>
                    <CustomButton className="px-[40px] py-[12px]" children={"Search"} type="gradient"/>
                 </div>
                 <div className="flex gap-[32px]">
                    <CustomButton className="px-[40px] py-[20px]" children={"Explore Workspaces"} type="gradient"/>
                    <CustomButton className="px-[40px] py-[20px]" children={"Log In"} type="gradient"/>
                 </div>
              </div>
            </div>
            <img className="z-40 lg:translate-x-16 xl:w-[666px] xl:h-[688px] lg:w-[566px] lg:h-[588px]"  src="/images/full-shot-students.png" alt="full-shot-students" />
        </div>
    </div>
   </section>
   </>
  )
}

export default FindWorkspace