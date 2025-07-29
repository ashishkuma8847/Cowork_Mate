import { useState } from "react";
import axios from "axios";
import CustomButton from "../ui/CustomButton";
import { Link } from "react-router-dom";

const Signup = () => {
    const [see, setsee] = useState(false);
    const [click, setclick] = useState(false);

    // ✅ Single state for all form inputs
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    });

    // ✅ Universal change handler
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          if(click) {
            const response = await axios.post("http://localhost:3000/api/signup", formData);
            alert(response.data.message);
          }else{
            alert("agree with terms and privacy Policy ?")
          }
            
        } catch (error) {
            console.error("Signup failed:", error.response?.data || error.message);
            alert(error.response?.data?.message || "Signup failed");
        }
    };

    return (
        <section>
            <div className="Login_signup">
                <div className="flex md:gap-8 gap-[20px] lg:flex-row flex-col-reverse items-center lg:items-start font-inter pt-[30px] md:pt-[54px]">
                    <div className="flex flex-col max-w-[644px] w-full">
                        <div className="flex flex-col gap-[22px] md:pb-[40px] pb-[30px]">
                            <Link to={"/login"} className="cursor-pointer lg:block hidden">
                                <img src="/svg/arrow-left.svg" className="w-6 h-6" alt="arrow-left" />
                            </Link>
                            <h1 className="md:text-[40px] text-[20px] leading-[130%] font-semibold">Create Account</h1>
                        </div>

                        {/* FORM START */}
                        <form onSubmit={handleSubmit} className="flex flex-col">
                            <div className="flex justify-between md:pb-[30px] pb-[14px]">
                                <div className="flex flex-col md:max-w-[306px] max-w-[160px] w-full md:gap-[14px] gap-[10px]">
                                    <label className="md:text-[20px] text-xs leading-[130%] font-medium" htmlFor="firstname">First Name</label>
                                    <input
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        className="outline-none text-black bg-lightGray md:p-[22px_0_22px_12px] p-[14px_0_14px_12px] rounded-[10px] md:text-[14px] text-[10px] leading-[130%]"
                                        placeholder="Enter your First Name"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="flex flex-col md:max-w-[306px] max-w-[160px] w-full md:gap-[14px] gap-[10px]">
                                    <label className="md:text-[20px] text-xs leading-[130%] font-medium" htmlFor="lastname">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        className="outline-none text-black bg-lightGray md:p-[22px_0_22px_12px] p-[14px_0_14px_12px] rounded-[10px] md:text-[14px] text-[10px] leading-[130%]"
                                        placeholder="Enter your Last Name"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex flex-col md:gap-[14px] gap-[10px] md:pb-[30px] pb-[14px]">
                                <label className="md:text-[20px] text-xs leading-[130%] font-medium" htmlFor="email">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="outline-none text-black bg-lightGray md:p-[22px_0_22px_12px] p-[13px_0_15px_12px] rounded-[10px] md:text-[14px] text-[10px] leading-[130%]"
                                    placeholder="Enter your E-mail"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Password */}
                            <div className="flex flex-col text-black md:gap-[14px] gap-[10px] md:pb-[22px] pb-[14px]">
                                <label htmlFor="password" className="md:text-[20px] text-xs leading-[130%] font-medium">Password</label>
                                <div className="flex text-black bg-lightGray justify-between md:p-[22px_40px_22px_12px] p-[13px_12px_12px_12px] rounded-[10px]">
                                    <input
                                        type={see ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        className="outline-none w-full md:text-[14px] text-[10px] bg-transparent leading-[130%]"
                                        placeholder="Create Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div onClick={() => setsee(!see)} className="w-6 h-6 cursor-pointer">
                                        <img src={see ? "/svg/seepass.svg" : "/svg/unseenpass.svg"} alt="toggle password" />
                                    </div>
                                </div>
                            </div>

                            {/* Remember Me */}
                            <div className="flex justify-between items-center md:pb-[31px] pb-[30px]">
                                <div onClick={() => setclick(!click)} className="flex cursor-pointer md:gap-3 gap-2 items-center">
                                    <div className={`${!click ? "border-[#383561] bg-transparent" : "border-transparent bg-violet"} md:w-5 w-[14px] h-[14px] md:h-5 transition-all duration-200 cursor-pointer border md:rounded-md rounded`}>
                                        <img src="/svg/charm_tick.svg" alt="tick" />
                                    </div>
                                    <h4 className="md:text-[16px] text-[10px]">
                                        I agree with <span className="text-violet">terms</span> and <span className="text-violet">privacy Policy</span>
                                    </h4>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="flex flex-col justify-center items-center  md:pb-[20px] pb-[14px]">
                                <CustomButton
                                    className="md:text-[20px] text-xs md:py-[20px] py-[12px] leading-[130%] w-full"
                                    type="gradient"
                                >
                                    Create Account
                                </CustomButton>
                            </div>
                        </form>

                        {/* Social Signup */}
                        <div className="flex flex-col justify-center items-center md:gap-[20px] gap-[14px]">
                            <div className="flex justify-between md:justify-center items-center max-w-[300px] w-full">
                                <div className="w-[90px] md:hidden block bg-[#55555533] h-[1px]"></div>
                                <h4 className="md:text-[16px] text-[14px]">Or</h4>
                                <div className="w-[90px] md:hidden block bg-[#55555533] h-[1px]"></div>
                            </div>
                            <div className="flex rounded-xl justify-center items-center bg-lightGray w-full md:py-[20px] py-3 gap-5">
                                <img className="cursor-pointer md:w-[30px] md:h-[30px] w-[20px] h-[20px]" src="/svg/google.svg" alt="google" />
                                <h4 className="font-medium md:text-xl text-xs leading-[130%]">Sign up With Google</h4>
                            </div>
                        </div>

                        <h4 className="md:text-base text-sm leading-[100%]  text-center py-5">All ready have an Account? <Link to={"/login"} className="text-violet cursor-pointer ">Log in</Link></h4>
                    </div>

                    {/* Right Side Image */}
                    <div className="relative">
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

export default Signup;
