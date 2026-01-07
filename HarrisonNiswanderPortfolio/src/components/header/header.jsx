import { Link } from 'react-router-dom';
import './header_style/header.css';
import HN_Signature from '../../images/signatures/HN_Signature.png';

export default function header() {
    return (
        <>
            {/*Navigation Menu*/}
            <header>
                
            </header>
            
            {/*Navigation Menu*/}
            <nav className="header_nav">
                <ul>
                    {/*Image*/}
                    <Link to="/">
                        <img src={HN_Signature} alt="Harrison Niswander Signature"/>
                    </Link>

                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/contact">Contact</Link>

                </ul>

            </nav>

        </>

    )
}