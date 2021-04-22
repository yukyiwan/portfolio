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
                <section class="projects" id="portfolio" data-aos="fade-up" data-aos-delay="50">
                    <div className="container  mx-5 px-4">
                    <div className="row">
                        <div className="col-md container">
                        <h4>Selected project</h4>

                        <h1>ZOFFICE</h1>
                        <a href="/ZOFFICE"><button type="button" class="btn btn-secondary btn-lg mt-3 mb-4">See project brief</button></a>
                        <div> 
                            <div>An app to empower remote working,</div>
                            <div>build with love & warmth of human touch,</div>
                            <div>powered by MERN, face recognition & Socket.IO</div>
                        </div>
                        </div>
                        <div className="col-md"></div>
                        <div className="col-md"></div>
                    </div>
                    </div>
                </section>
                    

                
             {/* ***********************  Project 2  ***********************  */}

             <section id="UX" className="projects text-white" data-aos="fade-up" data-aos-delay="50">
                    <div className="container mx-5 px-5">
                    <div className="row">
                        <div className="col-md container">
                        <h4>Selected project</h4>
                        <h1>UX face-off </h1>
                        <a href="/UX"><button type="button" class="btn btn-success btn-lg mt-3 mb-4">See case study</button></a>
                        <div> 
                            <div>When customers visit H&M or Zara's e-shop, can they</div>
                            <div>be directed to the latest collection to make a purchase?</div>
                            <div>Check out the results of our user test & UX comparison!</div>
                        </div>
                        </div>
                        <div className="col-md"></div>
                    </div>
                    </div>
                </section>


             {/* ***********************  Project 3  ***********************  */}

             <section id="rideBuddy" className="projects" data-aos="fade-up" data-aos-delay="50">
                    <div className="container mx-5 px-5">
                    <div className="row">
                        <div className="col-md">
                        <h4>Selected project</h4>
                        <h1>Ride Buddy</h1>
                        <a href="/RideBuddy"><button type="button" class="btn btn-secondary btn-lg mt-3 mb-4">See project brief</button></a>
                        <div> 
                            <div>An app that redefines daily commute,</div>
                            <div>presenting clear incentive for users to connect,</div>
                            <div>powered by HTML, PHP, MySQL and Javascript.</div>
                        </div>
                        </div>
                        <div className="col-md"></div>
                    </div>
                    </div>
                </section>                
              
        </main>

        </div>
    )
}

export default About

