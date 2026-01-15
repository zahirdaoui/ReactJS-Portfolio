import skillsImg from "../assets/skillsimg.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhp , faJava , faLaravel , 
    faReact,faHtml5,faCss ,
     faJs , faBootstrap,faGit,
     faDocker
    } from '@fortawesome/free-brands-svg-icons';

import { siMysql,siPostgresql ,siPostman } from 'simple-icons/icons'
const Skills = ()=>{
    return <>
   <section id="AboutUs" className="section-aboutus-skills container">
        <div className="container row py-5 text-center">
            <div className="img d-none d-md-block col-10 col-lg-4">
                <img src={skillsImg} className="w-100" />
            </div>
            <div className="skills text-center text-md-start col-10 col-lg-6">
                <div className="text">
                     <h3 className="section-titles-first">about Me</h3>
                     <p>The speed of responding to messages as well as respecting the project delivery date. Respecting the code of the SEO rules with the use of the latest programming languages</p>
                </div>



                




                <div className="skills-lng-content row mt-4">


                    <div className="col-12 mt-4">
                        <div className="skill-card">
                            <div className="card-header">FRONT-END</div>
                            <div className="row g-3 justify-content-center">
                                <div className="col-2">
                                    <div className="skill-icon"><FontAwesomeIcon icon={faHtml5} /></div>
                                    <div className="tech-name">Html5</div>
                                </div>
                                <div className="col-2">
                                    <div className="skill-icon"><FontAwesomeIcon icon={faCss} /></div>
                                    <div className="tech-name">Css</div>
                                </div>
                                <div className="col-2">
                                    <div className="skill-icon"><FontAwesomeIcon icon={faJs} /></div>
                                    <div className="tech-name">Javascript(ES6)</div>
                                </div>
                                <div className="col-2">
                                    <div className="skill-icon"><FontAwesomeIcon icon={faBootstrap} /></div>
                                    <div className="tech-name">Bootstrap</div>
                                </div>
                                <div className="col-2">
                                    <div className="skill-icon"><FontAwesomeIcon icon={faReact} /></div>
                                    <div className="tech-name">ReactJs</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 mt-4">
                        <div className="skill-card">
                            <div className="card-header">BACK-END</div>
                            <div className="row g-3 justify-content-center">
                                <div className="col-4">
                                    <div className="skill-icon"><i className="fa-brands fa-php"></i></div>
                                    <div className="tech-name">PHP</div>
                                </div>
                                <div className="col-4">
                                    <div className="skill-icon"><i class="fa-brands fa-java"></i></div>
                                    <div className="tech-name">Java</div>
                                </div>
                                <div className="col-4">
                                    <div className="skill-icon"><i class="fa-brands fa-laravel"></i></div>
                                    <div className="tech-name">Laravel</div>
                                </div>
                            </div>
                        </div>
                    </div>



                     
                                   {/*   DATABASE */}
                    <div className="col-6 mt-4">
                        <div className="skill-card">
                            <div className="card-header">DATABASE</div>
                            <div className="row g-3">
                                <div className="col-12 col-md-4">
                                    <div className="skill-icon">
                                        <svg
                                                viewBox="0 0 24 24"
                                                width="40"
                                                height="40"
                                                fill="currentColor"
                                                className="text-red-600"
                                                >
                                                <path d={siPostgresql.path} />
                                        </svg>
                                    </div>
                                    <div className="tech-name">Postgresql</div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="skill-icon">
                                        <svg
                                                viewBox="0 0 24 24"
                                                width="40"
                                                height="40"
                                                fill="currentColor"
                                                className="text-red-600"
                                                >
                                                <path d={siMysql.path} />
                                        </svg>
                                    </div>
                                    <div className="tech-name">MySql</div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="skill-icon">
                                        <i class="fa-solid fa-database"></i>
                                    </div>
                                    
                                    <div className="tech-name">SQL Server</div>
                                </div>
                            </div>
                        </div>
                    </div>


                    

                    <div className="col-12 mt-4">
                        <div className="skill-card">
                            <div className="card-header">TOOLS</div>
                            <div className="row g-3 justify-content-center">
                                <div className="col-2">
                                    <div className="skill-icon"><FontAwesomeIcon icon={faGit} /></div>
                                    <div className="tech-name">Git</div>
                                </div>
                                <div className="col-2">
                                    <div className="skill-icon"><FontAwesomeIcon icon={faDocker} /></div>
                                    <div className="tech-name">Docker</div>
                                </div>
                                <div className="col-2">
                                    <div className="skill-icon">
                                        <svg
                                                viewBox="0 0 24 24"
                                                width="40"
                                                height="40"
                                                fill="currentColor"
                                                className="text-red-600"
                                                >
                                                <path d={siPostman.path} />
                                        </svg>
                                    </div>
                                    <div className="tech-name">Laravel</div>
                                </div>
                                <div className="col-2 skill-body">
                                    <div className="skill-icon">
                                        <i class="fa-solid fa-network-wired"></i>
                                    </div>
                                    <div className="tech-name">REST API</div>
                                </div>
                               
                               
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    
    </section>
    </>
}


export default Skills