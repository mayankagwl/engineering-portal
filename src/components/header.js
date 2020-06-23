import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

import logo from "../../static/engineering-blog.svg"
import Search from "./search"
import ReactGA from 'react-ga'

const logger = function(linkName, headerLink) {
  ReactGA.event({
    category: 'Header Menu Clicks',
    action: `User clicked on ${linkName}`,
    label: `${headerLink}`
  })
}


const Header = ({ menuLinks, searchIndex }) => {
  return (
    <div className={headerStyles.header}>
      <Link className={logo} to={"/blog"}>
        <img src={logo} alt={`logo`} />
      </Link>
      <div className={headerStyles.menuLinks}>
        <nav className={headerStyles.menuLinks}>
          <ul>
            {menuLinks.map((link, index) => (
              <li>
                <a
                  href={link.slug}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => logger(link.name, link.slug)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Search searchIndex={searchIndex} />
      </div>
    </div>
  )
}

export default Header
