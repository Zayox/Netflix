import React from 'react';
import netflixLogo from '../img/netflixLogo.png';
import netflixAvatar from '../img/netflixAvatar.png';
import {useEffect, useState} from 'react';
import {Link} from "react-router-dom";


const Navbar = () => {

    const [show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });

        return () => {
            window.removeEventListener("scroll", this);
        };
    },[]);


    return (
      <div className="fixed h-16 flex justify-between w-[100vw] duration-300 z-[1]" style={{
          backgroundColor: `${show ? "black" : "transparent"}`
      }}>
          <Link to="/"><img src={netflixLogo} alt="netflix-logo" className="h-16 pl-4"/></Link>
          <Link to="/login"><img src={netflixAvatar} alt="netflix-avatar" className="h-12 pr-8 pt-[14px] cursor-pointer"/></Link>
      </div>
    );
}

export default Navbar;