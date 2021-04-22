import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Contact from '../Contact/Contact'
import {PlayCircleFill, X} from 'react-bootstrap-icons';
import Typewriter from 'typewriter-effect';
import Aos from 'aos';
import 'aos/dist/aos.css'; 

const ZOFFICE = () => {
    
    const [showVideo, setShowVideo] = useState(false);
    const [showCover, setShowCover] = useState(true);


    useEffect (()=>{
        Aos.init({duration:2000})
    }, []);

    return (
        <div>
        {showCover? <Navbar />:null}
        <main>
                <section class="projects" id="portfolio" data-aos="fade-down" data-aos-delay="50">
                
                    {showCover? 
                    <div className="container mx-5 px-5">
                    <div className="row">
                        <div className="col-md container">
                        <h7>AUGMENTED REALITY </h7>

                        <h1>ZOFFICE</h1>
                        <i><PlayCircleFill onClick={()=>{
                                        setShowVideo(true)
                                        setShowCover(false)
                                        }}/></i> 
                        
                        <div className="mt-4 mb-5"> 
                            
                            <div>Build with love & warmth of human touch,</div>
                            <div>An office social network to empower remote working.</div>
                            <div>Powered by MERN, face recognition & Socket.IO</div>
                        </div>
                        
                        </div>

                        <div className="col-md"></div>
                        {/* <div className="col-md"></div> */}
                        </div>

                        <div className="my-3">
                        <small><Typewriter
                                options={{
                                    strings: ['SCROLL FOR MORE'],
                                    autoStart: true,
                                    loop: true,
                                }}
                        /></small>
                        </div>
                    </div>
                    
                    :null}

                {showVideo?
                <div>
                <i className="x--position text-primary"><X  onClick={()=>{
                                        setShowVideo(false)
                                        setShowCover(true)
                                        }}/></i> 
                <video controls autoPlay>
                        <source src="videos/ZOFFICE.mp4" type="video/mp4"/>
                </video>
                
                </div>
                :null}

                
                </section>
                    
             {/* ***********************  Overview  ***********************  */}

             <section class="projects--details" data-aos="fade-down" data-aos-delay="50">
                    <div className="container  mx-5 px-4">
                    <div className="row">
                        <div className="col-md">
                            <h7>OVERVIEW</h7>
                            <h2 className="mt-2">Remote working will <span className="text-dark">end</span></h2>
                            <h2>after Covid-19</h2>
                        </div>
                        <div className="projects--details--col col-md container">
                            <div>“The pandemic has pushed employees and customers online at an unprecedented pace, creating an urgent imperative for rapid digital transformation” --- Boston Consulting Group, 2020</div><br/>
                            <div>“While a lot of in the work force want to have the flexibility work from home, reports show that only highly educated, well-paid minority will be allowed for hybrid models of remote work.” --- McKinsey, 2020</div><br/>
                            <div>The pandemic has revealed <span className="text-dark">a glaring gap between physical office's interface and virtual office's</span>. The ZOFFICE team sees unprecedented market opportunity to solve this global workforce problem with augmented reality. We aimed to build an improved user experience through bringing human warmth to the virtual office's interface, where you can feel the real-time presence of your team just as in the past.</div><br/>
                            <div><b>ZOFFICE Team</b></div>
                            <div>Cora Wan, Team Lead | Disha Shah, Chief Art Director</div>
                            <div>Fiona Ho, Chief Tech Officer | Victoria You, Chief UX Officer</div>                           
                            <div className="my-5 text-right">
                            <small><Typewriter
                                    options={{
                                        strings: ['SCROLL FOR MORE'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                            /></small>
                            </div>
                            </div>  
                        </div>
                        </div>
                </section>                          

                
             {/* ***********************  Low fidelity wireframe  ***********************  */}

            <section id="zOWF" className="projects" data-aos="fade-down" data-aos-delay="50">
            </section>


             {/* ***********************  Challenges  ***********************  */}
            
             <section class="projects--details" data-aos="fade-down" data-aos-delay="50">
             <div className="container  mx-5 px-4">
                    <div className="row">
                        <div className="col-md">
                                <h7>CHALLENGES</h7>
                                <h2 className="mt-2"><span className="text-dark">Balance</span> privacy and shared presence in the <span className="text-dark">augmented reality</span></h2>
                        </div>
                        <div className="projects--details--col col-md container">
                            <div>It is human nature that we resist change. The most common officer communication interface, such as email and instant messaging systems, has been around for decades. In order to engage the modern workforce in the new normal, ZOFFICE’s interface must take a new look that not only match with users’ existing habits and expectations, but also having extra charms to appeal to them.</div><br/>
                            <div>While ZOFFICE is aimed to actualise a physical office’s user interface and user experience, we are consciously aware that a shared sense of presence enabled by technologies inevitably involves capturing one’s digital footprint and imagery. Therefore, the design of ZOFFICE must strike a balance between one’s private and shared presence in the augmented reality, safeguarding an employee’s reasonable sense of privacy.</div><br/>
                        <div className="my-5 text-right">
                                <small><Typewriter
                                        options={{
                                            strings: ['SCROLL FOR MORE'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                /></small>
                                                </div>
                    </div>
                    </div>
                    </div>
                </section>  
                                                    
             {/* ***********************  Low fidelity wireframe  ***********************  */}

            <section id="zOFP" className="projects" data-aos="fade-down" data-aos-delay="50">
            </section>

            {/* ***********************  Strategy  ***********************  */}  
            <section class="projects--details" data-aos="fade-down" data-aos-delay="50">
            <div className="container  mx-5 px-4">
                    <div className="row">
                        <div className="col-md">
                                <h7>STRATEGY</h7>
                                <h2 className="mt-2"><span className="text-dark">Gamified</span> office floor playing to <span className="text-dark">evolutionary psychology</span></h2>
                        </div>
                        <div className="projects--details--col col-md container mt-3">
                        <div>We have disrupted traditional virtual office interface and created a gamified office floor that exceeds users’ imagination and appeal to a wide cross-section of the workforce, especially the younger generation. We retain many functionalities of an office communication app, such as group chat and direct messaging, preserving users' existing comfort zone.</div><br/>
                        <div>To demonstrate the real time presence of team members, we will capture a user’s face with the WebRTC technology and run the image through LUXAND face recognition API to verify user’s online status, every 15 minutes.</div><br/>
                        <div>Taking a workplace with office hours from 9am to 6pm as an example, an employee’s presence will be verified four times an hour for eight hours. If a user missed the window to be verified, they will notice their absence in the virtual office floor right away, thus they can log in again to stay online and visible to other members.</div><br/>
                        <div className="my-5 text-right">
                                <small><Typewriter
                                        options={{
                                            strings: ['SCROLL FOR MORE'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                /></small>
                    </div>
                    </div>
                    </div>
                </div>
                </section>  
            {/* *********************** Results visual  ***********************  */}
            <section class="projects" data-aos="fade-down" data-aos-delay="50">
                
                <video autoPlay loop>   
                        <source src="videos/ZOFFICE1.mp4" type="video/mp4"/>
                </video>
            </section>
            {/* *********************** Results ***********************  */}
            <section class="projects--details" data-aos="fade-down" data-aos-delay="50">
            <div className="container  mx-5 px-4">
                    <div className="row">
                        <div className="col-md">
                                <h7>RESULTS</h7>
                                <h2 className="mt-2">Virtual office with <span className="text-dark">warmth</span></h2>
                        </div>
                        <div className="projects--details--col col-md container mt-3">
                            <div>ZOFFICE represents an upgraded office interface that extends remote working to the modern workforce even after the global pandemic is over. Central to the design of ZOFFICE is extending human touch and warmth offered by physical office to virtual office. Staff will be able to see their colleagues’ avatars being seated next to them, sharing a sense of mutual presence even in the virtual office.</div><br/>
                            <div>Through dynamically switching WebRTC on every 15 minutes, we are able to capture the imagery and verify the presence of a staff through artificial intelligence empowered by a face recognition API. This enable the system to provide the transparency of staff’s presence to everyone, during the office hours, even when some of the staffs are working remotely. ZOFFICE seeks to protect the privacy of staff, with the camera being turned off most of the time.</div><br/>
                            <div>While retaining an office communication application’s functionalities, including personal profile, audio & video streaming, group chat and direct messaging services, ZOFFICE adds value by rendering the presence of your team through the augmented reality.</div><br/>
                            <div className="my-5 text-right">
                                <small><Typewriter
                                        options={{
                                            strings: ['SCROLL FOR MORE'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                /></small>
                            
                    </div>
                    </div>
                    </div>
                </div>
            </section>  

            {/* *********************** Results visual  ***********************  */}
            <section id="zORS" className="projects" data-aos="fade-down" data-aos-delay="50">
            </section>
              
        </main>
        <Contact />
        </div>
    )
}

export default ZOFFICE
