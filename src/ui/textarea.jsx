const TextArea = ({name,placeholder , error , icon})=>{
    return <>
         <i className={`fas ${icon}`}></i>
         <textarea className={error && `input-error`} name={name}  placeholder={placeholder}></textarea>
           {error && 
                <>
                   <i className="fas fa-exclamation-circle erore-icon"></i>
                   <p className="text-danger erore-form">{error}</p>
                </>
            }
    </>
}

export default TextArea