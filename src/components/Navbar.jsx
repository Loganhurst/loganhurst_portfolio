import React from 'react'
import { navLinks } from '../constants/index.js'

const Navbar = () => {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(true);
        }
        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <header className={`navbar ${scrolled ? ' scrolled' : 'not-scrolled'}`}>
        <div className="inner">
            <a classname = "logo" href="#hero">
                Logan Hurst | Software Engineer
            </a>
             <nav className="desktop">
                <ul>
                    {navLinks.map(({link, name}) => (
                        <li key={name} className="group">
                            <a href={link}>
                                <span>{name}</span>
                                <span className="underline"></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <a ClassName="contact-btn group" href="#contact">
                <div className="inner">
                    <span>Contact Me</span>
                </div>
            </a>
        </div>
      
    </header>
  )
}

export default Navbar
