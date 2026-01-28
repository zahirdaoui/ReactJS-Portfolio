import emailjs from "@emailjs/browser";

function sendEmail(RefForm){
    emailjs.sendForm(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    RefForm.current,
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                )
                .then(
                    (result) => {
                    console.log(result.text)
                    },
                    (error) => {
                    console.log(error);
                    }
                );

}

export default sendEmail