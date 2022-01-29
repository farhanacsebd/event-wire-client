import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div class="cusFooter">
            <section class="contact-area" id="contact">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 offset-lg-3">
                            <div class="contact-content text-center">

                                <h4>We determined to offer the very best and one stop event solution and a beautiful event to remember.</h4>
                                {/* <div class="hr"></div>
                                <h6>Bangladesh</h6> */}
                                <h4>+088 45345435435  ||  +088 4534543534</h4>
                                <div class="contact-social">
                                    <ul>
                                        <li><a class="hover-target" href="https://www.facebook.com/farhana.web.bd/"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a class="hover-target" href="https://www.linkedin.com/in/farhanacsebd/"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li><a class="hover-target" href="https://github.com/farhanacsebd"><i class="fab fa-github"></i></a></li>

                                    </ul>
                                    <h4>Copyright © 2022. All Rights Reserved by Farhana Binte Hasan.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Footer;