import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-secondary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Instacrame</a>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item nav-link">
                        <Link to="/">Accueil</Link>
                    </li>
                    <li class="nav-item nav-link">
                        <Link to="/register">Inscription</Link>
                    </li>
                    <li class="nav-item nav-link">
                        <Link to="/feed">Fil public</Link>
                    </li>
                    <li class="nav-item nav-link">
                        <Link to="/like">Like</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar