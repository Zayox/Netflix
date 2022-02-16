import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Logo from "../img/netflixLogo.png";
import {useRef} from 'react';
import {auth} from "../firebase";
import Home from "../screens/Home";

const SignIn = () => {

    const emailRef = useRef(null);
    const passRef = useRef(null);
    const [logedIn, setLogedIn] = useState(false);


    const signUp = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(emailRef.current.value, passRef.current.value)
            .then((authUser) => console.log(authUser))
            .catch((err) => alert(err))
    }

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(emailRef.current.value, passRef.current.value)
            .then(() => setLogedIn(true))
            .catch((err) => alert(err))
    }



    return (

        logedIn ? <Home /> :
        <div className="w-[100vw] overflow-y-hidden" style={{
            height: "100vh",
            backgroundSize: "cover",
            backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/6dea7743-5586-45d1-89a2-9569b1bb0340/6f5bd0c3-b1c4-4881-bfcc-6ef2e0b24296/US-en-20220207-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
            backgroundPosition: "center center",
        }}>

            <div className="w-[100%] absolute ml-0 overflow-y-hidden" style={{
                height: "100vh",
                background: "rgba(0,0,0,0.4)",
                backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8) 0, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 100%)"
            }}/>

            <div className="flex justify-between">
                <Link to="/" className="z-10"><img src={Logo} alt="Netflix-logo" className="lg:h-[120px] md:h-[90px] h-[80px]"/></Link>
            </div>
            <div className="flex justify-center mt-36">
                <div className="h-[450px] w-[430px] bg-[rgba(0,0,0,0.8)] rounded-xl pl-14 z-10">
                    <h1 className="text-white font-semibold text-3xl absolute mt-14">Sign In</h1>
                    <input type="text" ref={emailRef} placeholder="Email address" className="mt-32 font-normal text-black outline-none pl-6 h-14 w-[300px] rounded-md"/>
                    <input type="password" ref={passRef} placeholder="Password" className="mt-4 font-normal text-black outline-none pl-6 h-14 w-[300px] rounded-md"/>
                    <button className="h-12 bg-red-600 mt-8 w-[300px] text-white font-semibold text-[17px] rounded-md" onClick={signIn}>Sign In</button>
                    <div className="flex mt-8">
                        <p className="font-bold text-zinc-500">New to Netflix?</p>
                        <p className="font-bold text-white ml-2 cursor-pointer hover:underline" onClick={signUp}>Sign Up now.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignIn;