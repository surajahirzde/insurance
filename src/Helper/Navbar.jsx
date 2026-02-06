import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { 
  MenuOutlined, 
  CloseOutlined,
  UserOutlined 
} from "@ant-design/icons"
import "./style/Navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    const isActiveLink = (path) => {
        return location.pathname === path
    }

    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Logo */}
                <div className="nav-logo">
                    <Link to="/" onClick={closeMenu}>
                        <span> <img src="/chagans.jpeg" alt="" /> </span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className={`nav-menu ${isOpen ? 'nav-menu-active' : ''}`}>
                    <li className="nav-item">
                        <Link 
                            to="/" 
                            className={`nav-link ${isActiveLink('/') ? 'nav-link-active' : ''}`}
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to="/about" 
                            className={`nav-link ${isActiveLink('/about') ? 'nav-link-active' : ''}`}
                            onClick={closeMenu}
                        >
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to="/services" 
                            className={`nav-link ${isActiveLink('/services') ? 'nav-link-active' : ''}`}
                            onClick={closeMenu}
                        >
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to="/contact" 
                            className={`nav-link ${isActiveLink('/contact') ? 'nav-link-active' : ''}`}
                            onClick={closeMenu}
                        >
                            Contact Us
                        </Link>
                    </li>
                    <li className="nav-item nav-login">
                        <Link 
                            to="/login" 
                            className="nav-login-btn"
                            onClick={closeMenu}
                        >
                            <UserOutlined className="login-icon" />
                            Login
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="nav-toggle" onClick={toggleMenu}>
                    {isOpen ? (
                        <CloseOutlined className="menu-icon" />
                    ) : (
                        <MenuOutlined className="menu-icon" />
                    )}
                </div>

                {/* Mobile Menu Overlay */}
                {isOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
            </div>
        </nav>
    )
}

export default Navbar