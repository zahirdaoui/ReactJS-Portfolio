import ReCAPTCHA from "react-google-recaptcha"

const Captcha =({OnChange,ref, error})=>{
    return <>
          <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_PUBLIC_KEY}
                onChange={OnChange}
                ref={ref}
            />
            {error && 
                <>
                   <p className="text-danger erore-form">{error}</p>
                </>
            }
    </>
}


export default Captcha