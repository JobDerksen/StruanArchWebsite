import {Link, useMatch, useResolvedPath} from "react-router-dom"

function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="display-linebreak">
                <div className="site-title">
                    <span>Struan</span>{'\n'}<span>Morrison</span>
                </div>
            </Link>
            <ul>
                <CustomLink to="/portfolio" > portfolio </CustomLink>
                <CustomLink to="/freelance" > freelance </CustomLink>
                <CustomLink to="/about" > about </CustomLink>
                <CustomLink to="/contact" > contact </CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink ({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props} >
                {children}
            </Link>
        </li>
    );
}

export default Navbar;
