import { useState } from "react";
import CustomButton from "../ui/CustomButton";
import { Link } from "react-router-dom";

const Changepassword = () => {
    const [see, setsee] = useState(false);

    return (
        <section>
            <div className="Login_signup">
                <div className="flex md:gap-8 gap-[20px] lg:flex-row flex-col-reverse  items-center lg:items-start font-inter pt-[30px] md:pt-[54px]">
                    <div className="flex flex-col  max-w-[644px] w-full ">
                        <div className="flex flex-col gap-[22px] md:pb-[40px] pb-[30px]">
                            <Link to={"/forgetpassword"} className="cursor-pointer lg:block hidden">
                                <img src="/svg/arrow-left.svg" className="w-6 h-6" alt="arrow-left" />
                            </Link>
                            <h1 className="md:text-[40px] text-[20px] leading-[130%] font-semibold">Change password?</h1>
                        </div>

                        {/* FORM START */}
                        <form  className="flex flex-col">

                            {/* Email */}
                            <div className="flex flex-col md:gap-[14px] gap-[10px] md:pb-[30px] pb-[14px]">
                                <label className="md:text-[20px] text-xs  leading-[130%] font-medium" htmlFor="input1">Change password</label>
                                <input
                                    type="password"
                                    id="input1"
                                    className="outline-none text-black bg-lightGray  md:p-[22px_0_22px_12px] p-[13px_0_15px_12px] rounded-[10px] md:text-[14px] text-[10px] leading-[130%]"
                                    placeholder="4784568527"
                                    required
                                />
                            </div>

                            {/* Password */}
                            <div className="flex flex-col text-black md:gap-[14px] gap-[10px] md:pb-[22px] pb-[14px]">
                                <label htmlFor="input2" className="md:text-[20px] text-xs  leading-[130%] font-medium">Re-enter password</label>
                                <div className="flex text-black bg-lightGray justify-between md:p-[22px_40px_22px_12px] p-[13px_12px_12px_12px] rounded-[10px] ">
                                    <input
                                        type={see ? "text" : "password"}
                                        id="input2"
                                        className="outline-none w-full md:text-[14px] text-[10px] bg-transparent leading-[130%]"
                                        placeholder="4784568527"
                                        required
                                    />
                                    <div onClick={() => setsee(!see)} className="w-6 h-6 cursor-pointer">
                                        {see ? (
                                            <img src="/svg/seepass.svg" alt="show password" />
                                        ) : (
                                            <img src="/svg/unseenpass.svg" alt="hide password" />
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Login Button */}
                            <Link to={"/"} className="flex flex-col justify-center items-center md:gap-5 gap-[20px] pb-[30px] ">
                                <CustomButton
                                    className="md:text-[20px] text-xs md:py-[20px] py-[12px] leading-[130%] w-full"
                                    type="gradient"
                                >
                                    Log in
                                </CustomButton>
                                <h4 className="md:text-[16px] text-[14px]">Don't have an Account? <span className="text-violet">Create account</span></h4>
                            </Link>
                        </form>
                        {/* FORM END */}

                        {/* OR with Social */}
                        <div className="flex flex-col justify-center items-center md:gap-[40px] gap-[30px]">
                            <div className="flex justify-between md:justify-center items-center max-w-[336px] w-full">
                            <div className="w-[90px] md:hidden block bg-[#55555533] h-[1px]"></div>
                            <h4 className="md:text-[16px] text-[14px]">Or Continue with</h4>
                            <div className="w-[90px] md:hidden block bg-[#55555533] h-[1px]"></div>
                            </div>
                            <div className="flex justify-between max-w-[427px] w-full pb-[20px]">
                                <img className="cursor-pointer" src="/svg/google.svg" alt="google" />
                                <img className="cursor-pointer" src="/svg/white_facebook.svg" alt="facebook" />
                                <img className="cursor-pointer" src="/svg/apple.svg" alt="apple" />
                                <img className="cursor-pointer" src="/svg/white_twitter.svg" alt="twitter" />
                            </div>
                            
                        </div>
                    </div>

                    {/* Right Side Image */}
                    <div className="relative ">

                     <Link to={"/"} className="cursor-pointer lg:hidden block absolute top-14 left-2">
                                <img src="/svg/arrow-left.svg" className="w-6 h-6" alt="arrow-left" />
                            </Link>
                    <img
                        src={"http://localhost:3000/upload/ashish1753160504473.png"}
                        className="xl:max-w-[704px] lg:max-w-[604px] md:max-w-[504px] max-w-[375px] w-full xl:max-h-[1024px] max-h-[484px] md:max-h-[824px] lg:max-h-[924px] h-full"
                        alt="login screen"
                        />
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Changepassword;
