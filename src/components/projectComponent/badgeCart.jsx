const BadgeCart =({title , text})=>{
    return <>
           <li className="mb-4 d-flex highlight-item">
                <i className="fas fa-check-circle me-3 fs-5"></i>
                <div>
                    <h6 className="mb-1">{title}</h6>
                    <p className="small text-white-50 mb-0">{text}</p>
                </div>
            </li>
    </>
}

export default BadgeCart;