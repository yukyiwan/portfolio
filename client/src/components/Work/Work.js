import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'; 

const About = () => {
    useEffect (()=>{
        Aos.init({duration:2000})
    }, []);

    
    return (
        <div>
            <main>
                <section class="projects" id="portfolio" data-aos="fade-down" data-aos-delay="50">
                    <div className="container  mx-5 px-4">
                    <div className="row">
                        <div className="col-md container">
                        <h7>SELECTED PROJECT</h7>

                        <h1>ZOFFICE</h1>
                        <a href="/ZOFFICE"><button type="button" class="btn btn-secondary btn-lg mt-3 mb-4">See credentials</button></a>
                        <div> 
                            <div>Build with love & warmth of human touch, ZOFFICE empowers remote working.It's powered by MERN, face recognition & Socket.IO.</div>
                        </div>
                        </div>
                        <div className="col-md"></div>
                        <div className="col-md"></div>
                    </div>
                    </div>
                </section>
                    

                
             {/* ***********************  Project 2  ***********************  */}

             <section id="UX" className="projects text-white" data-aos="fade-down" data-aos-delay="50">
                    <div className="container mx-5 px-5">
                    <div className="row">
                        <div className="col-md container">
                        <h7>SELECTED PROJECT</h7>
                        <h1>UX face-off </h1>
                        <a href="/UX"><button type="button" class="btn btn-success btn-lg mt-3 mb-4">See case study</button></a>
                        <div> 
                        <div>When users visit H&M or Zara's apps, can they be directed to the latest collection? Check out our UX comparison results!</div>

                        </div>
                        </div>
                        <div className="col-md"></div>
                    </div>
                    </div>
                </section>


             {/* ***********************  Project 3  ***********************  */}

             <section id="rideBuddy" className="projects" data-aos="fade-down" data-aos-delay="50">
                    <div className="container mx-5 px-5">
                    <div className="row">
                        <div className="col-md">
                        <h7>SELECTED PROJECT</h7>
                        <h1>Ride Buddy</h1>
                        <a href="/RideBuddy"><button type="button" class="btn btn-secondary btn-lg mt-3 mb-4">See credentials</button></a>
                        <div> 
                        <div>Ride Buddy re-defines daily commute, making it fun and thought-provoking. It's powered by PHP, MySQL and Javascript.</div>

                        </div>
                        </div>
                        <div className="col-md"></div>
                        <div className="col-md"></div>
                    </div>
                    </div>
                </section>                
              
        </main>

        </div>
    )
}

export default About

