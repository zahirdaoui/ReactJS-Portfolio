import { useRef } from "react"
import { useState } from "react";

import emailjs from "@emailjs/browser";



const Contact = ()=>{

   

    const [alert , setAlert] = useState(false);
    const refsubject = useRef(null);
    const refname = useRef(null);
    const refemail = useRef(null);
    const refmessage = useRef(null);

    const errorSubject = useRef(null);
    const [subjectHasError , setsubjectHasError ] = useState(true);
    const errorName = useRef(null);
    const [nameHasError , setNameHasError ] = useState(true);
    const errorEmail = useRef(null);
    const [emailHasError , setEmailHasError ] = useState(true);
    const errorMessage = useRef(null);
    const [MessageHasError , setMessageHasError ] = useState(true);

    const date = new Date();
    const timeSend = date.getMonth()+"/"+ date.getDay() +"/"+ date.getFullYear()
        + " at "+date.getHours() 
        + ':' + date.getMinutes();

    const emailSubmit = (e)=>{
        e.preventDefault();
        let isValid = false;
        var patternReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let name = refname.current.value.trim();
        let subject = refsubject.current.value.trim();
        let email = refemail.current.value.trim();
        let message = refmessage.current.value.trim();

          if(!name || name.length < 2){
                 errorName.current.innerText = "Name must be at least 3 characters!";
                 isValid=false;
                 setNameHasError(true);
          }else{
            errorName.current.innerText = "";
            setNameHasError(false);
            isValid=true;
          }
          if(!subject || subject.length < 5){
              errorSubject.current.innerText = "Subject must be at least 5 characters!";
              isValid= false;
              setsubjectHasError(true);
          }else{
             errorSubject.current.innerText = "";
             setsubjectHasError(false);
             isValid=true;
          }

          if(!email || !patternReg.test(email)){
             errorEmail.current.innerText = "Please enter a valid email address!";
             isValid=false;
             setEmailHasError(true);
          }else{
            errorEmail.current.innerText = "";
            setEmailHasError(false)
            isValid=true;
          }
          if(!message || message.length < 10){
            errorMessage.current.innerText = "Message must be at least 10 characters!";
             isValid=false;
             setMessageHasError(true);
          }else{
            errorMessage.current.innerText = "";
            setMessageHasError(false);
            isValid=true;
          }

          if(!subjectHasError && !emailHasError && !nameHasError && !MessageHasError){
              console.log(errorSubject.current.value);
                emailjs
                .send(
                    process.env.REACT_APP_EMAILJS_SERVICE_ID,
                    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                    {
                    "name": name,
                    "subject": subject,
                    "time":timeSend,
                    "email": email,
                    "message": message,
                    },
                    process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
                )
                .then(
                    (result) => {
                    setAlert(true);
                    },
                    (error) => {
                    console.log(error.text);
                    }
                );
          }
    }
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
                            <form onSubmit={emailSubmit}>
                                <div>
                                    <i className="fas fa-bookmark"></i>
                                    <input ref={refsubject} type="text" id="subject" placeholder="Subject" />
                                    {subjectHasError ? <i className="fas fa-exclamation-circle erore-icon"></i> : "" }
                                    <p ref={errorSubject} className="text-danger erore-form"></p>
                                </div>
                                <div>
                                    <i className="fas fa-user-alt"></i>
                                    <input ref={refname} type="text" id="name" placeholder="Name" />
                                    {nameHasError ? <i className="fas fa-exclamation-circle erore-icon"></i> : "" }
                                    <i className="fas fa-exclamation-circle erore-icon invisible"></i>
                                    <p ref={errorName} className="text-danger erore-form"></p>
                                </div>
                                <div>
                                    <i className="fas fa-at"></i>
                                    <input ref={refemail} type="email" id="email" placeholder="Email@example.com"/>
                                    
                                    {emailHasError ? <i className="fas fa-exclamation-circle erore-icon"></i> : "" }
                                    <p ref={errorEmail} className="text-danger erore-form"></p>
                                </div>
                                <div>
                                    <i className="fas fa-envelope"></i>
                                    <textarea ref={refmessage} name="message" id="message" placeholder="Message ........."></textarea>
                                     {MessageHasError ? <i className="fas fa-exclamation-circle erore-icon"></i> : "" }
                                    <p ref={errorMessage} className="text-danger erore-form"></p>
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