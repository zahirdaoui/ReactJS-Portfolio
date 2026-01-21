import { useState , useEffect } from "react";
import skillsImg from "../assets/skillsimg.jpg";
import dataSkill from "../data/data.js";
import CartSkills from "../ui/cartSkills";



const Skills = ()=>{

    const [data , setData] = useState([]);

    useEffect(()=>{
        setData(dataSkill);
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
                            return <div key={elem.id } className={`col-md-${classElem} col-12 mt-4`} >
                                <CartSkills
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