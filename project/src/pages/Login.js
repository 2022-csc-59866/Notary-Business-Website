import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Thirdpartylogin from "./Thirdpartylogin";


const Login = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("login", { email, password });
            const { email: loggedInEmail, otherData } = response.data;
            navigate("/home", { state: { loggedInEmail } });
        } catch (error) {
            setError("Incorrect email or password");
        }
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div id="page-wrapper">
            <section id="main" className="container medium">
                <header>
                    <h2>Log In</h2>
                    <p>Singh Notaries</p>
                </header>
                <div className="box">
                    <form onSubmit={handleSubmit}>
                        <div className="row gtr-50 gtr-uniform">
                            {error && <p className="error-message" style={{ textAlign: "center" }}>{error}</p>}
                            <div className="col-12">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    placeholder="Email"
                                    onChange={(event) => setEmail(event.target.value)} />
                            </div>
                            <div className="col-12">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={password}
                                    placeholder="Password"
                                    onChange={(event) => setPassword(event.target.value)} />
                            </div>
                            <div className="col-12">
                                <ul className="actions special">
                                    <li>
                                        <input type="submit" value="Login" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                    <div style={{ textAlign: "center" }}>
                        <Link to="/signup">Don't have an account?</Link>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <Thirdpartylogin />
                    </div>

                </div>
            </section>
            <footer id="footer">
                <Link to="/home">Home </Link> &nbsp; &nbsp;
                <Link to="/FAQ">FAQ</Link> &nbsp; &nbsp;
                <Link to="/about">About</Link> &nbsp; &nbsp;
                <Link to="/contact">Contact</Link> &nbsp; &nbsp;
                <Link to="/login">Log In</Link>
                <ul className="copyright">
                    <li>&copy; Singh Notaries. All rights reserved.</li>
                </ul>
            </footer>
        </div>
    );
};

export default Login;