import { useEffect, useState } from "react";
import { FollowMe } from "../data/medain"
import FollowUi from "../ui/follow-ui"

const FloatingNavbar =()=>{
     const [data , setData] = useState([]);
    useEffect(()=>{
        setData(FollowMe);
    },[data]);
    return <>
        <section className="d-none d-sm-block sociale-medai-flotiing">
            <div className="container">
                <ul className="position-fixed">
                     {Object.values(data).map(elem =>{
                            return <FollowUi key={elem.id} linkUrl={elem.link} iconMed={elem.icon}/>
                         }
                    )} 
</ul>
            </div>
        </section>
    </>

}

export default FloatingNavbar