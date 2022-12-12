import React from 'react'

export const FormContact = () => {

    const enviarail = () => {
        console.log('enviando mail');


    }

  return (
   <>
   <br />
    <br />
    <br />
    <br />
    <br />
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="contact-form">
                    <form id="contact" action="enviarail()" method="post">
                        <div className="row">
                            <div className="col-md-12">
                                <fieldset>
                                    <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required="" />
                                </fieldset>
                            </div>
                            <div className="col-md-12">
                                <fieldset>
                                    <input name="email" type="text" className="form-control" id="email" placeholder="E-Mail Address" required="" />
                                </fieldset>
                            </div>
                            <div className="col-md-12">
                                <fieldset>
                                    <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject" required="" />
                                </fieldset>
                            </div>
                            <div className="col-lg-12">
                                <fieldset>
                                    <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your Message" required=""></textarea>
                                </fieldset>
                            </div>
                            <div className="col-lg-12">
                                <fieldset>
                                    <button type="submit" id="form-submit" className="filled-button">Send Message</button>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
       
        </div>
    </div>

   
   </>
  )
}
