const CartEducat = ({title_dp , place, start_y , end_y })=>{
    return <>
            <div className="col-lg-4 col-md-6">
                <div className="edu-card h-100">
                    <div className="card-icon-wrapper">
                    <div className="card-icon"><i className="fa-solid fa-graduation-cap"></i></div>
                    </div>
                    <div className="card-body">
                    <div className="degree-title">{title_dp}</div>
                    <div className="school">{place}</div>
                    <div className="years">{start_y} — {end_y}</div>
                    </div>
                </div>
                </div>
         </>
                
}
export default CartEducat