import { useEffect , useState } from "react";
import CartProject from '../ui/cartProject'
import { projectData } from '../data/project'


const Projects = ()=>{

    const [data , setData] = useState([]);
    
    useEffect(()=>{
          setData(projectData);
    },[data])

    return <>
       <div id="projects" className="container">
            <h1 className="section-title">Some Things I've Built</h1>
            <div className="row g-4 pb-5">
                {data.map((elem)=>
                           <CartProject
                           key={elem.id}
                           data={elem}
                           />
            )}
             </div>
        </div>













    </>
}

export default Projects