import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('eventwire', 'template_fai9iqi', e.target, 'user_48v0v2ixexu0gGtiBREac')

            .then((result) => {
                alert("Your message has successfully submitted");

            }, (error) => {
                alert(error.message)

            });
        e.target.reset()


    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                    <div>
                        <div style={{ marginTop: '40px', marginLeft: '80px' }}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58563.28614995884!2d91.14829089617703!3d23.45305494247853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547f249815015d%3A0x549a77e542115f77!2sCumilla!5e0!3m2!1sen!2sbd!4v1641759651158!5m2!1sen!2sbd" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div id="container">
                        <form onSubmit={sendEmail} id="contact" >
                            <h3>Contact Form</h3>
                            <h4>Any query? Please tell us. We will inform you soon.</h4>
                            <fieldset>
                                <input placeholder="Your name" name="name" type="text" tabindex="1" required autofocus />
                            </fieldset>
                            <fieldset>
                                <input placeholder="Your Email Address" name="email" type="email" tabindex="2" required />
                            </fieldset>
                            <fieldset>
                                <input placeholder="Your Phone Number" name="mobile" type="tel" tabindex="3" required />
                            </fieldset>
                            <fieldset>
                                <input placeholder="Message Subject" type="text" name="subject" tabindex="4" required />
                            </fieldset>
                            <fieldset>
                                <textarea placeholder="Type your message here...." name="message" tabindex="5" required></textarea>
                            </fieldset>
                            <fieldset>
                                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                            </fieldset>

                        </form>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Contact;