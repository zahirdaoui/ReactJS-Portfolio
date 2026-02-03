import { NavLink } from "react-router";

const CartProject = ({data , index})=>{
    const {title , description , cover_alt , cover , tags , link ,id} = data;
    return <>
        <div className="col-lg-4 col-md-6">
            <div className="project-card h-100">
                <div className="project-preview">
                    <img src={`/projectimg/${cover}`} alt={cover_alt}/>
                    <div className="tech-badges">
                        {tags.map((elem , index)=>{ return <span key={index} className="badge-tech">{elem}</span>})}
                    </div>
                </div>
                <div className="project-body d-flex flex-column">
                        <h3 className="project-title">{title}</h3>
                        <p className="project-subtitle text-box">

                            {description.length > 200
                               ? description.substring(0, 200) + "..."
                                : description}
                            {}
                        </p>
                        <div className="row mt-auto align-content-end">
                            <div className="col-5">
                                <NavLink  to={`/project/${index}`} className="btn btn-view-project">
                                    <i className="fas fa-arrow-up-right-from-square me-2"></i> Details
                                </NavLink >
                            </div>
                            <div className="col-5">
                                <NavLink  to={link} target="_blank" className="btn btn-view-project">
                                    <i className="fas fa-arrow-up-right-from-square me-2"></i> DEMO
                                </NavLink>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </>
}

export default CartProject