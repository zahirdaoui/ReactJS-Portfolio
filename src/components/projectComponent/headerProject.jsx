import Badge from "./badge";
const HeaderProject =({title , text , badge=[]})=>{
    return <>
            <header className="hero-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1 className="display-3 fw-bold mb-3">{title}</h1>
                            <p className="fs-5 opacity-75 mb-4">{text}</p>
                            <div className="d-flex flex-wrap">
                                {
                                    badge.map((elem)=>{return <Badge key={elem} badge={elem} />; })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    </>
}

export default HeaderProject;