import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import whiteLambdaLogo from '../assets/Lambda_Logo_white.png'

export default function Footer() {
	return (
		<>
			<footer>
				<nav>
					<a href="https://lambdaschool.com/courses/cs/web/" target="_blank">COURSES</a>
					<a href="https://lambdaschool.com/about/" target="_blank">ABOUT</a>
					<a href="https://lambdaschool.com/blog/" target="_blank">BLOG</a>
					<a href="https://lambdaschool.com/apply/" target="_blank">APPLY</a>
					<a href="https://lambdaschool.com/careers/" target="_blank">CAREERS</a>
					<Link to="/privacy">PRIVACY</Link>
					<Link to="/terms">TERMS</Link>
					<a href="https://lambdaschool.com/contact/" target="_blank">CONTACT</a>
					<a href="https://lambdaschool.com/courses/cs/web/bootcamp/" target="_blank">
						FREE CODE BOOTCAMP
					</a>
					<a href="https://lambdaschool.com/referral/" target="_blank">REFERRAL</a>
					<div className="sm-links-mobile">
						<a href="https://twitter.com/lambdaschool" target="_blank">
							<i className="fab fa-twitter" />
						</a>
						<a href="https://www.facebook.com/LambdaSchoolOnline/" target="_blank">
							<i className="fab fa-facebook" />
						</a>
						<a href="https://github.com/LambdaSchool" target="_blank">
							<i className="fab fa-github" />
						</a>
					</div>
				</nav>
				<NavLink exact to="/">
					<img
						className="Footer-lambda-logo"
						 src={whiteLambdaLogo}
						alt="white lambda logo"
					/>
				</NavLink>
			</footer>
		</>
	);
}
