const Video = ({title , url})=>{
    return <div className="sidebar-card-vedeo shadow mt-5">
                <h4 className="mb-4">{title}</h4>
                    <video className="w-100" controls >
                    <source src={url} type="video/mp4"/>
                </video>
            </div>
}
export default Video;