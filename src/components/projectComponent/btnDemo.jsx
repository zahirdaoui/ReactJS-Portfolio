const BtnDemo = ({link})=>{
    return <>
        <div className="mb-5 text-center mt-5">
                <a href={link} target="_blank" className="btn btn-demo shadow-lg">
                    <i className="fas fa-external-link-alt me-2"></i> View Live Demo
                </a>
        </div>
    </>
}

export default BtnDemo;