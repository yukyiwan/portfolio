import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Contact from '../Contact/Contact'
import {AppIndicator} from 'react-bootstrap-icons';
import Typewriter from 'typewriter-effect';
import Aos from 'aos';
import 'aos/dist/aos.css'; 

const RideBuddy = () => {
    
    const [showVideo, setShowVideo] = useState(false);
    const [showCover, setShowCover] = useState(true);


    useEffect (()=>{
        Aos.init({duration:2000})
    }, []);

    return (
        <div>
            <Navbar/>
        <main>
            <section id="rideBuddy" className="projects" data-aos="fade-up" data-aos-delay="50">
                    <div className="container mx-5 px-5">
                    <div className="row">
                        <div className="col-md">
                        <h7>PHP | MySQL | JAVASCRIPT</h7>
                        <h1>Ride Buddy</h1>
                        <div className="mt-5"> 
                            <div>An app that redefines daily commute,</div>
                            <div>presenting clear incentive for users to connect,</div>
                            <div>powered by HTML, PHP, MySQL and Javascript.</div>
                            <i><a href="http://www.corawan.com/ridebuddy" target="_blank"
                            rel="noopener noreferrer"><AppIndicator /></a></i> 
                            <div className="my-5">
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
                        <div className="col-md"></div>
                    </div>
                    </div>
                </section> 
                    
             {/* ***********************  Overview  ***********************  */}

             <section class="projects--overview" data-aos="fade-up" data-aos-delay="50">
                    <div className="container  mx-5 px-4">
                    <div className="row">
                        <div className="col-md">
                            <h7>OVERVIEW</h7>
                            <h2 className="mt-2">Make daily transportation experience <span className="text-dark">social</span></h2>
                        </div>
                        <div className="projects--overview--col col-md container">
                            <div>The key purpose of Ride Buddy is to create interaction in stranger situations during our daily commute, especially ride sharing.</div><br/>
                            <div>The shared micro-mobility market, albeit quickly expanding, is far from saturated. In just the US, Europe and China, the market can grow from $300b to $500b by 2030.</div><br/>
                            <div>Also, recent reports stressed that mobility needs to get smarter to be sustainable. While we do think Ride Buddy can bring value to everyone(!), the below segments are particularly relevant: the middleclass, single professionals and young people in the big cities.</div><br/>
                            <div><b> Ride Buddy Team</b></div>
                            <div>Cora Wan, Team Lead</div>
                            <div>Disha Shah, Chief Art Director</div>
                            <div>Jessie Fraser, Chief Creative Officer</div>
                            <div>Pratik Mankame, Chief Innovation Officer</div>
                       
                            
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

            <section id="rBWF" className="projects" data-aos="fade-up" data-aos-delay="50">
            </section>


             {/* ***********************  Challenges  ***********************  */}
            
             <section class="projects--overview" data-aos="fade-up" data-aos-delay="50">
             <div className="container  mx-5 px-4">
                    <div className="row">
                        <div className="col-md">
                                <h7>CHALLENGES</h7>
                                <h2 className="mt-2">Get users<span className="text-dark"> on board</span></h2>
                        </div>
                        <div className="projects--overview--col col-md container">
                            <div>Ride Buddy is a late comer to the market, thus will have to overcome the user bias due to existing habit and familiarity with the mainstream providers, such as Uber and LYFT.</div><br/>
                            <div>On the flip side, Covid-19 hammered the rides business of Uber and LYFT (Barron 2020), which presents opportunities for new players like us, who are more competitive in engaging and caring for riders' changing needs.</div><br/>
                            <div>Our team believe that Ride Buddy is unique and has an edge to hack into the existing shared micro-mobility market with the first-of-its-kind social-driven UX!</div>
                        </div>
                    </div>
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
                </section>  
                                                    
             {/* ***********************  Low fidelity wireframe  ***********************  */}

            <section id="rBAP" className="projects" data-aos="fade-up" data-aos-delay="50">
            </section>

            {/* ***********************  Strategy  ***********************  */}  
            <section class="projects--overview" data-aos="fade-up" data-aos-delay="50">
            <div className="container  mx-5 px-4">
                    <div className="row">
                        <div className="col-md">
                                <h7>STRATEGY</h7>
                                <h2 className="mt-2"><span className="text-dark">Gamify</span> inherently imaginative <span className="text-dark">air-travel wonders</span></h2>
                        </div>
                        <div className="projects--overview--col col-md container mt-3">
                        <div>To hack into a crowded ride hailing space, we set our focus in the first stage on the relatively untouched air travel space. We believe this will get Ride Buddy an elegant entry and gain traction, user familiarity of our interface and brand speedily, especially for this air travel branch of the app targets the exact same group of key target audience as our eventual carpool game.</div><br/>
                        <div>We have created a gamified social network that presents clear incentive for users to connect for networking, socialising or romance (we will not define or limit their imagination!).</div><br/>
                        <div>With our app users will be able to find a Ridy Buddy before boarding or selecting their seats. Existing users can scan the QR code all over the airport to access our website, enter their flight details and then locate other users also looking for buddies for the same flight.</div><br/>
                        <div>For users already boarded and be seated, we provide function to connect or confirm a Ride Buddy only when mutual liking is confirmed. If users are less conservative, they may search for their target buddies (in the flight’s seating plan view) and if the buddies are open, they can start conversations immediately.</div>
                        </div>

                    </div>
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
                </section>  
            {/* *********************** Results visual  ***********************  */}
            <section class="projects" data-aos="fade-up" data-aos-delay="50">
                
                <video autoPlay loop>   
                        <source src="videos/Journey.mp4" type="video/mp4"/>
                </video>
            </section>
            {/* *********************** Results ***********************  */}
            <section class="projects--overview" data-aos="fade-up" data-aos-delay="50">
            <div className="container  mx-5 px-4">
                    <div className="row">
                        <div className="col-md">
                                <h7>RESULTS</h7>
                                <h2 className="mt-2"><span className="text-dark">Everybody</span> can be a <span className="text-dark">Ride Buddy</span></h2>
                        </div>
                        <div className="projects--overview--col col-md container mt-3">
                            <div>We managed to build Ride Buddy version 1.0 with PHP, MySQL and plain JavaScript, giving rise to a fully functioning in-flight social network that allows users to connect and chat with contacts who are boarding on to the same flight. The level of completion of this prototype allows us to present this sound UX idea persuasively to potential partners and investors.</div><br/>
                            <div>The prototype needs to actualise sophisticated functionalities, albeit being built with plain vanilla coding tools. In hindsight, our well-planned schema of the relational database was a key success factor.</div><br/>
                            <div>The team came up with coding solution for each landmark functionality one by one. The core function achieved is to let users registered to the same flight view, request, confirm and remove connections on the seating plan view. Moreover, we are particularly proud to have made live chat work by providing two ID (personID and profileID) to each user such that the dynamic combination of the two ID can create a unique link that are private to the two users in the chatroom.</div><br/>
                        
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
            <section id="rBRS" className="projects" data-aos="fade-up" data-aos-delay="50">
            </section>
              
        </main>
        <Contact />
        </div>
    )
}

export default RideBuddy
