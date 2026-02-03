const KeyCard =({title_card , text_card , icon})=>{
    return <>
            <div className="col-md-6">
                    <div className="card p-4 h-100 shadow-sm">
                        <div className="icon-circle"><i className={`fas fa-${icon}`}></i></div>
                        <h5 className="fw-bold">{title_card}</h5>
                        <p className="text-muted-custom small">{text_card}</p>
                    </div>
            </div>
    </>
}

export default KeyCard;