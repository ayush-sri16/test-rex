import React, { useEffect, useState } from 'react'
import logo from '../assets/settings-icon-14970.png';
import { Link } from 'react-router-dom'




const Navbar = () => {

        const [show, setShow] = useState(false)
        const controlNavbar = () => {
            if (window.scrollY > 600 ) {
                setShow(true)
            }else{
              setShow(false)
            }
        }
      
        useEffect(() => {
            window.addEventListener('scroll', controlNavbar)
            return () => {
                window.removeEventListener('scroll', controlNavbar)
            }
        }, [])
        

    return (
        <nav   className={`nav active ${show && 'hidden'}`}>
            <div>
                <div>
                    <img className='top-logo' src={logo} alt="logo" />
                    <h1 className='logo-content'>test<span>rex</span></h1>
                </div>
                <div className="nav-links" id='mn_menu'>
                    <Link to={'/'}>Solutions</Link>
                    <Link to={'/'}>Integration</Link>
                    <Link to={'/'}>Pricing</Link>
                    <Link to={'/'}>Resources</Link>
                </div>
            </div>
            <div>
            <div className="login">
                <button><Link to={'/Form'}>LOGIN</Link></button>
            </div>
            <div className="signup" id='signUp'>
            <button><Link to={'/Form'}>SignUp</Link></button>
            </div>
            </div>
        </nav>

    )
}

export default Navbar
