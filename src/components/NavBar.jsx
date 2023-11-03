import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-secondary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Instacrame</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item nav-link">
                        <Link to="/">Accueil</Link>
                    </li>
                    <li className="nav-item nav-link">
                        <Link to="/register">Inscription</Link>
                    </li>
                    <li className="nav-item nav-link">
                        <Link to="/feed">Fil public</Link>
                    </li>
                    <li className="nav-item nav-link">
                        <Link to="/like">Like</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar