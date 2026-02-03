import CopyRight from "../components/copyRight"
import Footer from "../components/footer"
import BadgeCart from "../components/projectComponent/badgeCart";
import BtnDemo from "../components/projectComponent/btnDemo";
import HeaderProject from "../components/projectComponent/headerProject"
import KeyCard from "../components/projectComponent/keyCard";
import ProjectOverview from "../components/projectComponent/projectOverview";


import { projectData } from "../data/project";
const ZadCars = ()=>{
     const data_key = projectData[0].details[0].key_features;
     const Data_Badge = projectData[0].details[0].highlights;
     const badgeElements = projectData[0].tags;
     const url = projectData[0].link;
     const title = projectData[0].title;
     const header_text = projectData[0].header_desc;
     const project_Overview = projectData[0].project_overview;
    return <>
            <HeaderProject title={title}
                        text={header_text} 
                        badge={badgeElements}
            />
        <main className="container mb-5">
            <div className="row g-5">
                <div className="col-lg-8">
                    <ProjectOverview text={project_Overview}
                    />
                    <h3 className="section-title">Key Features</h3>
                    <div className="row g-4">
                        {data_key.map((elem)=>{
                                return <KeyCard key={elem.id} title_card={elem.title} text_card={elem.text} icon={elem.icon} />
                            })}; 
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="sidebar-card shadow mt-5">
                        <h4 className="mb-4">Development Highlights</h4>
                        <ul className="list-unstyled">
                            {Data_Badge.map((elem)=>{return  <BadgeCart key={elem.id} title={elem.title} text={elem.text} />})}
                        </ul>
                    </div>
                </div>
                
            </div>
            <BtnDemo link={url}/>
        </main>

         <Footer/>
        <CopyRight/>
    
    </>
}

export default ZadCars