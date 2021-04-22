import React, { useState, useEffect } from 'react';
import decode from 'jwt-decode';
import { useDispatch } from 'react-redux'; 
import { useHistory, useLocation} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'; 

const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    useEffect (()=>{
        Aos.init({duration:2000})
    }, []);

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/');
        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;
        if (token) {
        const decodedToken = decode(token);
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));

      }, [location]);

    return (
        <div>

            <h5><nav className="navbar fixed-top navbar-light navbar--bg-gradient px-5" data-aos="fade-down"  data-aos-delay="1000">
                <a className="navbar-brand" href="/"><img className="logo" src="images/logoSDS.png" width="50px"/><span> Message board</span></a>
                <div className="btn--logout">
                    <button className="btn btn-outline-secondary" type="button" onClick={logout}>Logout</button>
                </div>
                {/* <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#zO">Work</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#footer">Contact</a>
                    </li>
                </ul> */}
            </nav></h5>
        </div>
    )
}

export default Navbar
