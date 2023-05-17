import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../components/center.css"

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [message, setMessage] = useState("");
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        axios.post("contact", formData)
            .then(response => {
                console.log("Message sent successfully");
                form.reset();
                setMessage("The message sent successfully");
            })
            .catch(error => {
                console.error("Error sending message:", error);
            });
    };
    return (
        <section id="main" className="container medium">
            <header>
                <h2>Contact Us</h2>
                <p>Tell us what you think about our little operation.</p>
            </header>
            <div className="box">
            <div className="centered-message">
                <h4>{message && <p>{message}</p>}</h4>
            </div>
                <form onSubmit={handleSubmit}>
                    <div className="row gtr-50 gtr-uniform">
                        <div className="col-6 col-12-mobilep">
                            <input type="text" name="full_name" id="name" placeholder="Name" />
                        </div>
                        <div className="col-6 col-12-mobilep">
                            <input type="email" name="email" id="email" placeholder="Email" />
                        </div>
                        <div className="col-12">
                            <input type="text" name="subject" id="subject" placeholder="Subject" />
                        </div>
                        <div className="col-12">
                            <textarea name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
                        </div>
                        <div className="col-12">
                            <ul className="actions special">
                                <li><input type="submit" value="Send Message" /></li>
                            </ul>
                        </div>
                    </div>
                </form>
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
    );
};

export default Contact;
