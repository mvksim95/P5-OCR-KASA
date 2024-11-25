import '../styles/Layout.sass';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logoheader from '../assets/images/logoheader.png'
import logoFooter from '../assets/images/LogoFooter.png'

const Layout = () => {
  return (
    <div>
      <header>
        <section className='Header'>
            <img src={logoheader} alt="Logo du site" />
                <nav className='nav'>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
                        Accueil
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
                        A Propos
                    </NavLink>
                </nav>    
        </section>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <section className='Footer'>
            <img src={logoFooter} alt="Logo du site" />
            <p className='copyright'>
                © 2020 Kasa. All rights reserved
            </p>
        </section>
      </footer>
    </div>
  );
};

export default Layout;