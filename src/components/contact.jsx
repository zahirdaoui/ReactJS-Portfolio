const Contact = ()=>{
    return <>
             
        <section className="contuct-us py-5" id="ContactUs">
                <div className="container">
                    <h3 className="section-titles-first text-center section-title">CONTACT ME</h3>
                    <div className="alert alert-primary d-none envoi-message alert-dismissible fade show" role="alert" id="messsagesend">
                        <i className="fas fa-check-square"></i> Message sent successfully
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <div className="d-flex justify-content-center item-contact-us text-center">
                        <i className="fas fa-envelope d-none d-md-block"></i>
                        <div className="item-contact-us-form w-50">
                            <form action="">
                                <div>
                                    <i className="fas fa-bookmark"></i>
                                    <input type="text" id="subject" placeholder="the subject" />
                                    <i className="fas fa-exclamation-circle erore-icon invisible"></i>
                                    <p className="text-danger erore-form">Please make sure the information is correct!</p>
                                </div>
                                <div>
                                    <i className="fas fa-user-alt"></i>
                                    <input type="text" id="name" placeholder="Name /Company" />
                                    <i className="fas fa-exclamation-circle erore-icon invisible"></i>
                                    <p className="text-danger erore-form">Please make sure the information is correct!</p>
                                </div>
                                <div>
                                    <i className="fas fa-at"></i>
                                    <input type="email" id="email" placeholder="ex:email@example.com"/>
                                    <i className="fas fa-exclamation-circle erore-icon invisible"></i>
                                    <p className="text-danger erore-form">Please make sure the information is correct!</p>
                                </div>
                                <div>
                                    <i className="fas fa-envelope"></i>
                                    <textarea name="message" id="message" placeholder="Message ........."></textarea>
                                    <i className="fas fa-exclamation-circle erore-icon invisible"></i>
                                    <p className="text-danger erore-form">Please make sure the information is correct!</p>
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