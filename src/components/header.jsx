
import NavBar from "./navBar";
import headerbg from '../assets/header.png'
import Button from './button';

const Header = ()=>{
    return <>
            
        <header id="home">
            <div className="container header-content">
                <div>
                   <NavBar/>
                </div>
                <div className="row g-2 justify-content-center align-content-center my-5">
                        <div className="header-content-text col-12 col-md-6 align-self-center my-5">
                            <h2>Hi, my name is</h2>
                            <h1>DAOUI Ezzahir</h1>
                            <h3 className="header-content-jobs">Full-Stack Web Developer</h3>
                            <p>I’m a junior web developer passionate about creating modern and efficient web applications. I specialize in backend development using Java Spring and Laravel, and frontend development with React.js and modern CSS frameworks. With experience in relational databases like MySQL, PostgreSQL, and SQL Server, I enjoy building complete full-stack solutions and improving my skills by working on real-world projects and exploring new technologies.</p>
                            <Button/>
                        </div>
                        <div className="col-12 col-md-4">
                            <img src={headerbg} className="img-fluid"  />
                        </div>
                        
                </div>
            </div>
            
         </header> 
    </>
}

export default Header;