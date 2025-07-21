import { Outlet, Link } from "react-router-dom";

function Navbar() {
    return (
        <>
             <nav>
            <ul style={{
                listStyleType: 'disc',
                paddingLeft: '20px',
                margin: '10px 0',
            }}>
                <li>
                    <Link to="/">Home</Link>
                </li>

                 <li>
                    <Link to="/about">About Us</Link>
                </li>

                 <li>
                    <Link to="/services">Services</Link>
                </li>

                 <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
        </>
    )
}

export default Navbar;