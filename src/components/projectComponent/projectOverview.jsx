const ProjectOverview =({text})=>{
    return <>
            <div>
                <h3 className="section-title">Project Overview</h3>
                <p className="lead text-muted-custom mb-5">
                   {text}
                </p>
            </div>
    </>
}

export default ProjectOverview;