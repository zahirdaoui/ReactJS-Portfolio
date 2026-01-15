import headerbg from '../assets/header.png'
const CartProject = ()=>{
    return <>
        <div class="col-lg-4 col-md-6">
            <div class="project-card h-100">
                <div class="project-preview">
                    <img src={headerbg} alt="Personal Blog" />
                    <div class="tech-badges">
                            <span class="badge-tech">React</span>
                            <span class="badge-tech">Node.js</span>
                            <span class="badge-tech">PHP</span>
                            <span class="badge-tech">MySQL</span>
                    </div>
                </div>
                <div class="project-body d-flex flex-column">
                        <h3 class="project-title">Personal Blog Platform</h3>
                        <p class="project-subtitle">
                            A comprehensive business and industrial consulting platform built with Wagtail Django.
                            Provides tailored solutions for project planning, strategic partnerships, 
                            and operational optimization with features for trade facilitation and legal support.
                        </p>
                        <div class="mt-auto">
                            <a href="https://your-blog-platform-url.com" target="_blank" class="btn btn-view-project">
                                <i class="fas fa-arrow-up-right-from-square me-2"></i> View Project
                            </a>
                        </div>
                </div>
            </div>
        </div>
    </>
}

export default CartProject