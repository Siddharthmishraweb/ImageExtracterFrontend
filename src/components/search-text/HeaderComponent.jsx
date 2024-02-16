import { Link } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

export default function HeaderComponent() {
    const authContext = useAuth();
    const { isAuthenticated, setIsAuthenticated, logout } = authContext;
    console.log(authContext);
    return (
        <header className="border-bottom border-light border-5" style={{backgroundColor:'#2a2b38'}}>
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand ms-2 fs-2 fw-bold text-white" href="#">{`Image Extract`}</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            {
                                isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" style={{color: 'antiquewhite'}} to="/welcome/in28minutes">Home</Link></li>
                            }
                            {
                                isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/upload" style={{color: 'antiquewhite'}}>ImageUpload</Link></li>
                            }
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        {
                            !isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" style={{color: 'white'}} to="/login">Login</Link></li>
                        }
                        <li className="nav-item fs-5"><Link className="nav-link" to="/logout" onClick={logout} style={{color: 'white'}}>Logout</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    );
}