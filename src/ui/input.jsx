const Input = ({type,name,placeholder , error , icon})=>{
    return <>

        <i className={`fas ${icon}`}></i>
        <input name={name} type={type} placeholder={placeholder} className={error && `input-error`}/>

            {error && 
                <>
                   <i className="fas fa-exclamation-circle erore-icon"></i>
                   <p className="text-danger erore-form">{error}</p>
                </>
            }
    </>
}


export default Input