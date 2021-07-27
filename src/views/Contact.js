import React from 'react'
import emailjs from 'emailjs-com'

export const Contact = () => {
    let emailjsId = process.env('REACT_APP_EMAILJS_USER_ID')

    function submitEmail(e) {
        e.preventDefault();

// Does emailjs user id need to be secret key?
        emailjs.sendForm('gmail', 'template_uamx1rl', e.target, emailjsId)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }

    return (
        <div>
            <h3>Contact</h3>
            <hr />

            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form onSubmit={ submitEmail } method="POST">
                        <div className="form-group">
                            <input type="name" className="form-control" name="name" placeholder="Name" />
                            <input type="email" className="form-control" name="email" placeholder="Email" />
                            <input type="subject" className="form-control" name="subject" placeholder="Subject" />
                            <div className="form-group">

                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="mesage" id="" cols="30" rows="10"></textarea>
                            </div>
                            <button className="btn btn-info btn-block">Send us a message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}