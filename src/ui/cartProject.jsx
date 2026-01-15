import headerbg from '../assets/header.png'
const CartProject = ()=>{
    return <>
        <div className="col-lg-4 col-md-6">
            <div className="project-card h-100">
                <div className="project-preview">
                    <img src={headerbg} alt="Personal Blog" />
                    <div className="tech-badges">
                            <span className="badge-tech">React</span>
                            <span className="badge-tech">Node.js</span>
                            <span className="badge-tech">PHP</span>
                            <span className="badge-tech">MySQL</span>
                    </div>
                </div>
                <div className="project-body d-flex flex-column">
                        <h3 className="project-title">Personal Blog Platform</h3>
                        <p className="project-subtitle">
                            A comprehensive business and industrial consulting platform built with Wagtail Django.
                            Provides tailored solutions for project planning, strategic partnerships, 
                            and operational optimization with features for trade facilitation and legal support.
                        </p>
                        <div className="mt-auto">
                            <a href="https://your-blog-platform-url.com" target="_blank" className="btn btn-view-project">
                                <i className="fas fa-arrow-up-right-from-square me-2"></i> View Project
                            </a>
                        </div>
                </div>
            </div>
        </div>
    </>
}

export default CartProject