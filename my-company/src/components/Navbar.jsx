import { Outlet, Link } from "react-router-dom";

function Navbar() {
    return (
        <>
             <nav>
            <ul style={{
                backgroundColor: "Gold",
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                listStyleType: 'none',
                paddingLeft: '20px',
                margin: '10px 0',
            }}>
                <li style={{fontSize: '16px' }}>
                    <Link to="/" style={{color: 'white'}}>Home</Link>
                </li>

                 <li>
                    <Link to="/about" style={{color: 'white'}} >About Us</Link>
                </li>

                 <li>
                    <Link to="/services" style={{color: 'white'}} >Services</Link>
                </li>

                 <li>
                    <Link to="/contact" style={{color: 'white'}} >Contact Us</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
        </>
    )
}

export default Navbar;