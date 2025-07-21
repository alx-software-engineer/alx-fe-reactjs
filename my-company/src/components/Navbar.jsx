import { Outlet, Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <link to="/">Home</link>
                </li>

                 <li>
                    <link to="about">About Us</link>
                </li>

                 <li>
                    <link to="services">Services</link>
                </li>

                 <li>
                    <link to="contact">Contact Us</link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;