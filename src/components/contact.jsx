import { useRef } from "react"
import { useState } from "react";

import sendEmail from "../helper/sendEmail";

import Input from "../ui/input";
import TextArea from "../ui/textarea";
import Captcha from "../ui/captcha";


const Contact = ()=>{

    const [alert , setAlert] = useState(false);
    const formRef = useRef();

    const captchaRef = useRef();
    const [captchaValid, setCaptchaValid] = useState(false);

    const [errors , setErrors] = useState({});
    
        
    const changeInput = (e)=>{

        e.preventDefault();
        let isValid = false;

        var patternReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const form = e.target;
        let name = form.name?.value?.trim();
        let subject = form.subject?.value?.trim();
        let email = form.email?.value?.trim();
        let body = form.body?.value?.trim();

        let newErrors = {};

            if (!captchaValid) {
            newErrors.captcha ="Please verify that you are not a robot";
                 isValid=false;
            }

        if(!name || name.length < 2){
                 newErrors.name ="Name must be at least 3 characters!";
                 isValid=false;
          }

          if(!subject || subject.length < 5){
              newErrors.subject ="Subject must be at least 5 characters!";
              isValid= false;
          }

          if(!email || !patternReg.test(email)){
              newErrors.email = "Please enter a valid email address!";
             isValid=false;
          }

          if(!body || body.length < 10){
            newErrors.body = "Message must be at least 10 characters!";
             isValid=false;
          }else{
            isValid = true;
          }

          setErrors(newErrors);

           if (Object.keys(newErrors).length == 0 || isValid === true){
              sendEmail(formRef);
              setAlert(true);
              formRef.current.reset();
              captchaRef.current.reset();
           }
          

    }
    const onCaptchaChange = (value) => {
    setCaptchaValid(!!value);
  };
    return <>
             
        <section className="contact py-5" id="contact">
                <div className="container">
                    <h3 className="section-titles-first text-center section-title">CONTACT ME</h3>
                    {alert ?
                        <div className="alert alert-primary envoi-message alert-dismissible fade show my-4" role="alert" id="messsagesend">
                            <i className="fas fa-check-square"></i> Thank you for contacting us. We will get back to you soon.
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                     : ""}
                    <div className="row g-2 justify-content-center align-items-center item-contact-us">
                        <div className="col-12 col-md-5 align-self-center">
                            <i className="fas fa-envelope d-none d-md-block item-contact-us-image"></i>
                        </div>
                        <div className="col-12 col-md-5 item-contact-us-form">
                            <form ref={formRef} onSubmit={changeInput}>
                                <div>
                                    <Input 
                                        type="text" 
                                        name="subject" 
                                        error={errors.subject} 
                                        placeholder={"Subjet ..."} 
                                        icon="fa-bookmark"
                                    />
                                </div>
                                <div>
                                    <Input 
                                        type="text" 
                                        name="name" 
                                        error={errors.name} 
                                        placeholder={"Your name ..."} 
                                        icon="fa-user-alt"
                                    />
                                </div>
                                <div>
                                    <Input 
                                           type="email" 
                                           name="email" 
                                           error={errors.email} 
                                           placeholder={"Email@example.com"} 
                                           icon="fa-at" 
                                    />
                                </div>
                                
                                <div>
                                    <TextArea
                                           name="body" 
                                           error={errors.body} 
                                           placeholder={"Write your message here…"} 
                                           icon="fa-envelope" 
                                    />
                                </div>
                                <div>
                                    <Captcha
                                        OnChange={onCaptchaChange}
                                        ref={captchaRef}
                                        error={errors.captcha}
                                    />
                                </div>
                                <div>
                                    <i className="fas fa-paper-plane icon-send-message"></i>
                                    <button className="btn btn-primary" id="sendmessage">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </section>  
      
       </>
}

export default Contact