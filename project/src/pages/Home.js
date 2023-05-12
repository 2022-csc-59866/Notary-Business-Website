import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();
  
	return <button onClick={() => loginWithRedirect()}>Log In</button>;
  };

class Home extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div className="App">
				<body class="landing is-preload">
					<div id="page-wrapper">
						<header id="header" className="alt">
							<nav id="nav">
								<ul>
									<li><Link to="/home">Home</Link></li>
									<li><Link to="/FAQ">FAQ</Link></li>
									<li><Link to="/about">About</Link></li>
									<li><Link to="/contact">Contact</Link></li>
									<li><Link to="/signup" className="button">Sign up</Link></li>
									<li><Link to="/login" className="button">Log In</Link></li>
								</ul>
							</nav>
						</header>
						<section id="banner">
							<h2>Singh Notaries</h2>
							<p>NNA CERTIFIED MOBILE NOTARIES AND SIGNING AGENTS</p>
							<ul className="actions special">
								<li><Link to="/booknow" className="button primary">BOOK NOW</Link></li>
								<li><Link to="/contact" className="button">CONTACT US</Link></li>
							</ul>
						</section>
						<section id="main" className="container">
							<section className="box special">
								<header className="major">
									<h2>MOBILE PUBLIC NOTARY</h2>
									<br />
									<p>Don't travel to find a notary, let us travel to you! You never need a notary until you need a notary, so when you do, think of Singh Notaries! Singh Notaries is a recognized name in the mobile notary and services domain as a New York Notary Public. Singh Notaries provides mobile notary services to businesses, residences, transportation industry, hospitals, convalescent homes, jails, detention centers, hotels and more. Our services are guaranteed professional, punctual, and precise! Singh Notaries are available to notarize trust, legal agreements, adoption paperwork, parental permission to travel, health care directives, powers of attorney, motor vehicle transfer documents and more…! Your notary is only one call away from you! <br /></p>
								</header>
							</section>
							<section className="box special features">
								<div className="features-row">
									<section>
										<span className="icon solid major fa-bolt accent2"></span>
										<h3>Signing Agents</h3>
										<p>Providing dependable, reliable and professional services with integrity</p>
									</section>
									<section>
										<span className="icon solid major far fa-check-square accent3"></span>
										<h3>Quality and Certification</h3>
										<p>Highly trained and certified signing agents at your ease to take on your next assignment. Highly accreditted and NNA certified signing agents with errors and omissions insurance covered</p>
									</section>
								</div>
								<div className="features-row">
									<section>
										<span className="icon solid major fas fa-map"></span>
										<h3>Coverage</h3>
										<p>We are currently providing services in all NYC counties also including Nassau and Suffolk county.</p>
									</section>
									<section>
										<span className="icon solid major fa-lock accent5"></span>
										<h3>Area of Assignments</h3>
										<p>Real Estate Transactions, Wills and Power of Attorney, Title Transfers, Oaths and Jurats, E-Notary (Coming January 2023!) and much more...</p>
									</section>
								</div>
								<div className="features-row">
									<section>
										<span className="icon solid major fa-lock accent5"></span>
										<h3>Will be putting iframe here for the map location</h3>
										<p>Real Estate Transactions, Wills and Power of Attorney, Title Transfers, Oaths and Jurats, E-Notary (Coming January 2023!) and much more...</p>
									</section>
								</div>
							</section>

						</section>
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
					</div>
				</body>
			</div >
		)
	}
}
export default Home;