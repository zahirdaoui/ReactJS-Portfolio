import skillsImg from "../assets/skillsimg.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dataSkill from "../data/data.js";
import { faPhp , faJava , faLaravel , 
    faReact,faHtml5,faCss ,
     faJs , faBootstrap,faGit,
     faDocker,
    } from '@fortawesome/free-brands-svg-icons';

import { siMysql,siPostgresql ,siPostman } from 'simple-icons/icons'

import CartSkills from "../ui/cartSkills";

import { useState , useEffect } from "react";
import Skill from "../ui/skill.jsx";

const Skills = ()=>{
    const [data , setData] = useState([]);
    useEffect(()=>{
        setData(dataSkill);
        /* console.log(data, typeof data);
        console.log(data); */
    },[data]);
    return <>
   <section id="about" className="section-aboutus-skills container">
        <div className="container row py-5">
            <div className="img d-none d-md-block col-10 col-lg-4">
                <img src={skillsImg} className="w-100" />
            </div>
            <div className="skills justify-content-center align-content-center text-md-start col-10 col-lg-6">
                <div className="text">
                     <h3 className="about-title">About Me</h3>
                     <p className="text-about">
                        Hi, I’m Ezzahir. I’m a full-stack developer dedicated to building modern web applications. 
                        Lately, I’ve been bridging the gap between traditional development and AI to create smarter, 
                        automated solutions.
                     </p>
                </div>
                <div className="skills-lng-content row mt-4">
                     {Object.values(data).map(elem =>{
                           var classElem = 6;
                           if(Object.keys(elem.skill).length >=4){
                              classElem = 12;
                           }
                            return <div className={`col-${classElem} mt-4`} >

                                <CartSkills
                                    key={elem.id }
                                    title={elem.title}
                                    skill={elem.skill}
                                />   
                            </div>
                      }
                        )} 
                       
                
                </div>
            </div>

        </div>
    
    </section>
    </>
}


export default Skills