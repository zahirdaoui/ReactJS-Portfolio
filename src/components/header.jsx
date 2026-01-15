import React from "react";
import NavBar from "./navBar";
import headerbg from '../assets/header.png'
import Button from './button';

const Header = ()=>{
    return <>
        <div> 
            
        <header id="Home">
            <div><NavBar/></div>
        <div className="container header-content d-flex text-center py-5">
              <div className="header-content-text text-start w-100">
                  <h2>Hi, my name is</h2>
                  <h1>EZZAHIR DAOUI</h1>
                  <h3 className="header-content-jobs">Full-Stack Web Developer</h3>
                  <p>I’m a junior web developer passionate about creating modern and efficient web applications. I specialize in backend development using Java Spring and Laravel, and frontend development with React.js and modern CSS frameworks. With experience in relational databases like MySQL, PostgreSQL, and SQL Server, I enjoy building complete full-stack solutions and improving my skills by working on real-world projects and exploring new technologies.</p>
                   <Button/>
              </div>
              <div className="header-content-img d-none d-lg-block ms-auto">
                  <img src={headerbg} className="img-fluid align-self-end w-100 ms-auto" />
              </div>
        </div>
         </header> 
        </div>
    </>
}

export default Header;