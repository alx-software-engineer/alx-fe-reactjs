import { Outlet, Link } from "react-router-dom";

function Navbar() {
    return (
        <>
             <nav>
            <ul>
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