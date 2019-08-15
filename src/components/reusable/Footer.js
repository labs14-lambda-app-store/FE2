import React from "react"
import { Link, NavLink } from "react-router-dom"
import whiteLambdaLogo from "../../assets/Lambda_Logo_white.png"

export default function Footer() {
  return (
    <>
      <footer>
        <nav>
          <a href="https://lambdaschool.com/courses/cs/web/" target="#">
            COURSES
          </a>
          <a href="https://lambdaschool.com/about/" target="#">
            ABOUT
          </a>
          <a href="https://lambdaschool.com/blog/" target="#">
            BLOG
          </a>
          <a href="https://lambdaschool.com/apply/" target="#">
            APPLY
          </a>
          <a href="https://lambdaschool.com/careers/" target="#">
            CAREERS
          </a>
          <Link to="/privacy">PRIVACY</Link>
          <Link to="/terms">TERMS</Link>
          <a href="https://lambdaschool.com/contact/" target="#">
            CONTACT
          </a>
          <a
            href="https://lambdaschool.com/courses/cs/web/bootcamp/"
            target="#"
          >
            FREE CODE BOOTCAMP
          </a>
          <a href="https://lambdaschool.com/referral/" target="#">
            REFERRAL
          </a>
          <div className="sm-links-mobile">
            <a href="https://twitter.com/lambdaschool" target="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="https://www.facebook.com/LambdaSchoolOnline/" target="#">
              <i className="fab fa-facebook" />
            </a>
            <a href="https://github.com/LambdaSchool" target="#">
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
  )
}
