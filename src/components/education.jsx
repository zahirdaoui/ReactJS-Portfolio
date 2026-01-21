import CartEducat from "../ui/cartEducat";
import { education } from "../data/education";
import { useEffect , useState } from "react";

const Education = ()=>{

   const [data , setData] = useState([]);

   useEffect(()=>{
      setData(education);
   },[data])

    return <>
    
    <div className="container education-grid pb-5">
         <h1 className="section-title">EDUCATION</h1>
         <div className="row g-4">
            {data.map((elem)=>
                           <CartEducat 
                              key={elem.id} 
                              title_dp={elem.title}
                              place={elem.place}
                              start_y={elem.year_start}
                              end_y={elem.year_end}
                           />
            )}
         </div>
    </div>
   
   
   </>
}

export default Education;