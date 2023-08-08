import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Oscar E. Mendoza</h2>
        <p><a href="mailto:oscarjavier04@gmail.com">oscarjavier04@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Oscar.
        I am a PhD student, and
        researcher at <a href="https://en.unimib.it">UNIMIB</a>. Before, I was a data scientist
        at the Statistics Department of <a href="https://www.icfes.gov.co">ICFES</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Oscar E. Mendoza <Link to="/">oscaremendoza.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
