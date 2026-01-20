import { useEffect, useState } from "react";
import { LetsTalk } from "../data/contact";

const Footer = ()=>{

     const [data , setData] = useState([]);
        useEffect(()=>{
            setData(LetsTalk);
            console.log(data);
        },[data]);

    return  <section className="talk-to-me">
  
            <div className="container p-5">
                <div className="row g-1 justify-content-center align-content-center">
                    <div className="col-12 col-md-5">
                        <span className="title mb-5 d-block">Let's talk!</span>
                        <p className="text-justify">
                            {data.text}
                        </p>
                    </div>
                    <div className="col-12 col-md-6 pt-md-5">
                        <ul className="footer-links pt-md-2">
                           <li>Based in: {data.based_in}</li>
                           <li>Email: {data.email}</li>
                           <li>Phone: {data.phone}</li>
                        </ul>
                    </div>
                </div>
            </div>
    </section>
}


export default Footer