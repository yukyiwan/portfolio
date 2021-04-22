import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'; 

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    useEffect (()=>{
        Aos.init({duration:2000})
    }, []);

    return (
        <div>

            <h5><nav className="navbar fixed-top navbar-light navbar--bg-gradient px-5" data-aos="fade-down"  data-aos-delay="1000">
                <a className="navbar-brand" href="/"><img className="logo" src="images/logoSDS.png" width="50px"/></a>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/#portfolio">Work</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="/#about">About</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/#footer">Contact</a>
                    </li>
                    
                    {user && user?.result.userType=="admin" ? 
                    <li className="nav-item">
                        <a className="nav-link" href="/CMS">CMS</a>
                    </li>
                    :null}
                
                </ul>
            </nav></h5>
        </div>
    )
}

export default Navbar
