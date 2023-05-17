import React from "react";
import { Link } from "react-router-dom";

class About extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div id="page-wrapper">
                <section id="main" className="container">
                    <header>
                        <h2>About Us</h2>
                        <p>Learn about Singh Notaries</p>
                    </header>
                    <div className="box">
                        <span className="image featured"><img src="images/SinghNotariesLogo1.png" alt="" /></span>
                        <p>Welcome to our Notary Business! We here at Singh Notaries, are dedicated to providing professional and reliable notary services to individuals and businesses alike. With years of experience in the industry, we understand the importance of accuracy, confidentiality, and efficiency in notarial transactions.</p>
                        <div className="row">
                            <div className="row-6 row-12-mobilep">
                                <p>Our team of highly skilled and certified notaries is committed to meeting your specific needs, whether it's for real estate documents, legal contracts, or personal affidavits. We pride ourselves on delivering exceptional customer service, ensuring that every client receives personalized attention and their documents are handled with the utmost care.</p>
                            </div>
                            <div className="row-6 row-12-mobilep">
                                <p>At our Notary Business, we strive to make the notarization process seamless and convenient. We offer flexible payment options, including mobile notary services, to accommodate your busy lifestyle. Our goal is to provide you with a hassle-free experience, saving you time and effort while ensuring the validity and integrity of your important documents.</p>                            </div>
                            <div className="row-6 row-12-mobilep">
                                <p>Choose our Notary Business for all your notarial needs and experience the professionalism and reliability that sets us apart. We look forward to serving you and becoming your trusted partner in all your notary requirements.</p>
                            </div>
                        </div>
                        <div className="row-6 row-12-mobilep" style={{ textAlign: "center" }}>
                            <h3>We can be reached at:</h3>
                            <h4>Address: 123 MainXYZ street Brooklyn, NY 11418</h4>
                            <h4>Phone Number: +1(123)-456-7890</h4>
                            <h4>Email: singhnotaries@gmail.com</h4>
                        </div>
                    </div>
                    <footer id="footer">
                        <Link to="/home">Home </Link>  &nbsp; &nbsp;
                        <Link to="/FAQ">FAQ</Link> &nbsp; &nbsp;
                        <Link to="/about">About</Link> &nbsp; &nbsp;
                        <Link to="/contact">Contact</Link> &nbsp; &nbsp;
                        <Link to="/login">Log In</Link>
                        <ul className="copyright">
                            <li>&copy; Singh Notaries. All rights reserved.</li>
                        </ul>
                    </footer>
                </section>
            </div>
        )
    }
}

export default About;