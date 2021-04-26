import React, {useEffect} from 'react'
import Typewriter from 'typewriter-effect';
import About from '../About/About';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../Navbar/Navbar';

const Main = () => {

    useEffect (()=>{
        Aos.init({duration:2000})
    }, []);

    return (
        <div>

        <Navbar/>
        <div id="header">    
                <div id="home" className="text-center" data-aos="fade-down" data-aos-delay="50">
                    <div>
                        <video autoPlay muted playsInline loop>
                            <source src="videos/video.mp4" type="video/mp4"/>
                        </video>

                        <div id="rotate3D" className="my-2 pt-5">
                        <img id="logo" className="logo" src="images/logoSDS.png" alt="" />
                        </div>
                           <h1 className="mt-1">
                            <Typewriter
                                options={{
                                    strings: ['Cora Wan'],
                                    autoStart: true,
                                    pauseFor: 5000,
                                    loop: true,
                                }}
                                /></h1>
                                <h4><div>A full-stack developer,</div> 
                                <div>problem solver and storyteller.</div>
                            </h4> <br/>

                    </div>
                </div>
        </div>
        <Work />
        <About />
        <Contact />     
            
        </div>
    )
}

export default Main
