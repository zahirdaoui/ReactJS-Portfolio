import CopyRight from "../components/copyRight"
import BadgeCart from "../components/projectComponent/badgeCart";
import BtnDemo from "../components/projectComponent/btnDemo";
import HeaderProject from "../components/projectComponent/headerProject"
import KeyCard from "../components/projectComponent/keyCard";
import ProjectOverview from "../components/projectComponent/projectOverview";
import Video from "../ui/video";
import { useParams } from "react-router-dom";
import { projectData } from "../data/project";
import { useEffect } from "react";

const Project = ()=>{
    const {id} = useParams();
     const data_key = projectData[id].details[0].key_features;
     const Data_Badge = projectData[id].details[0].highlights;
     const badgeElements = projectData[id].tags;
     const url = projectData[id].link;
     const title = projectData[id].title;
     const header_text = projectData[id].header_desc;
     const project_Overview = projectData[id].project_overview;
     const video = projectData[id].video;
     useEffect(() => {
        window.scrollTo(0, 0);
        }, []);
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
                    {video && <Video title="Video" url={video} />}
                </div>
            </div>
            <BtnDemo link={url}/>
        </main>
        
        <CopyRight/>
    
    </>
}

export default Project