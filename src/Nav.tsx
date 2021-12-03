import { Link } from 'react-router-dom'

function Nav() {
    return (
    <nav className="navContainer">
        <Link to="/login">
            <img src=""></img>
            <p>Log In</p>
        </Link>
        <Link to="/">
            <img src=""></img>
            <p>Home</p>
        </Link>
    </nav>
    )
}

export default Nav;