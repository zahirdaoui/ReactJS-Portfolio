
import logo from '../assets/logo.png';


const NavBar = ()=>{

    return <>
        <nav className="navbar main-nav-bar navbar-nav-color navbar-expand-lg fixed-top">
                    <div className="container">
                    <a className="navbar-brand logo-navbar-zahir" href="#Home"><img src={logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars nav-bar-togle-icon"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                        <a className="nav-link navbar-nav-color" href="#home">Home</a>
                        <a className="nav-link navbar-nav-color" href="#about">About</a>
                       
                        <a className="nav-link navbar-nav-color" href="#projects">Projects</a>
                        
                        <a className="nav-link" href="#contact">Contact</a>
                        </div>
                    </div>
                </div>
        </nav>
    </>
}

export default NavBar;