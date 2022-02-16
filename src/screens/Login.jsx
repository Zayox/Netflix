import React, {useState} from 'react';
import '../App.css';
import Logo from '../img/netflixLogo.png';
import {Link} from "react-router-dom";
import SignIn from "../components/SignIn";

const Login = () => {

    const [login, isLogin] = useState(false);


    return (
        <div className="h-[100vh] bg-[#000000] overflow-x-hidden">

            {login ? <SignIn/> :

                <div className="-mt-36 w-[100vw]" style={{
                    height: "80vh",
                    backgroundSize: "cover",
                    backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/6dea7743-5586-45d1-89a2-9569b1bb0340/6f5bd0c3-b1c4-4881-bfcc-6ef2e0b24296/US-en-20220207-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
                    backgroundPosition: "center center",
                }}>

                    <div className="w-[100%] h-[100vh] absolute ml-0" style={{
                        background: "rgba(0,0,0,0.4)",
                        backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8) 0, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 100%)"
                    }}/>


                    <div className="flex justify-between mt-36">
                        <Link to="/" className="z-10"><img src={Logo} alt="Netflix-logo"
                                                           className="lg:h-[120px] md:h-[90px] h-[80px]"/></Link>

                        <button onClick={() => isLogin(true)} className="z-10 h-9 pl-5 pr-5 lg:mt-10 md:mt-8 mt-6 mr-10 bg-red-700 rounded-sm text-white">Sign In</button>
                    </div>

                    <div className="flex flex-col items-center text-white -mt-36">
                        <h1 className="z-10 lg:text-7xl md:text-7xl sm:text-5xl font-bold lg:mt-72 mt-64 text-3xl">Unlimited
                            movies, TV<br/><span className="ml-12">shows, and more.</span></h1>
                        <h3 className="z-10 lg:text-3xl md:text-3xl sm:text-2xl text-xl mt-5">Watch anywhere. Cancel
                            anytime.</h3>
                        <p className="z-10 mt-6 lg:text-xl md:text-xl sm:text-[18px] text-sm ml-8">Ready to watch? Enter
                            your email to create or restart your membership.</p>
                        <div className="flex lg:w-[800px]  mt-6">
                            <input type="text" placeholder="Email address"
                                   className="z-10 font-normal text-black outline-none pl-6 h-16 lg:w-[550px] md:w-[400px] sm:w-[400px] w-[240px] rounded-sm"/>
                            <button
                                className="z-10 bg-red-700 lg:pl-12 lg:pr-12 md:pl-12 md:pr-12 pl-2 pr-2 ml-[2px] lg:text-3xl md:text-xl text-md rounded-sm lg:w-72 md:w-56">Get
                                Started >
                            </button>
                        </div>

                    </div>

                </div>
            }
        </div>
    );
};

export default Login;