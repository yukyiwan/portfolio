import React, {useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Contact from '../Contact/Contact'
// import {AppIndicator} from 'react-bootstrap-icons';
import Typewriter from 'typewriter-effect';
import Aos from 'aos';
import 'aos/dist/aos.css'; 

const RideBuddy = () => {

    useEffect (()=>{
        Aos.init({duration:2000})
    }, []);

    return (
        <div>
            <Navbar/>
        <main>
            <section id="rideBuddy" className="projects" data-aos="fade-down" data-aos-delay="50">
                    <div className="container mx-5 px-5">
                    <div className="row">
                        <div className="col-md">
                        <h7>PHP | MySQL | JAVASCRIPT</h7>
                        <h1>Ride Buddy</h1>
                        <div className="mt-5"> 
                            <div>Ride Buddy re-defines daily commute,</div>
                            <div>making it fun and thought-provoking.</div>
                            <div>Powered by PHP, MySQL and Javascript</div>
                            {/* <i><a href="http://www.corawan.com/ridebuddy" target="_blank"
                            rel="noopener noreferrer"><AppIndicator /></a></i>  */}
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

             <section class="projects--details" data-aos="fade-down" data-aos-delay="50">
                    <div className="container  mx-5 px-4">
                    <div className="row">
                        <div className="col-md">
                            <h7>OVERVIEW</h7>
                            <h2 className="mt-2">Make daily <span className="text-dark">transportation</span> experience <span className="text-dark">social</span></h2>
                        </div>
                        <div className="projects--details--col col-md container">
                
                            <div>The shared micro-mobility market, albeit quickly expanding, is far from saturated. In just the US, Europe and China, the market can grow from $300b to $500b by 2030.</div><br/>
                            <div>Also, recent reports stressed that mobility needs to get smarter to be sustainable. While we do think Ride Buddy can bring value to everyone(!), the below segments are particularly relevant: the middleclass, single professionals and young people in the big cities.</div><br/>
                            <div>The key purpose of Ride Buddy is to create interaction in stranger situations during your daily commute, especially ride sharing, making a difference to your transportation experience.</div><br/>
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

            <section id="rBWF" className="projects" data-aos="fade-down" data-aos-delay="50">
            </section>


             {/* ***********************  Challenges  ***********************  */}
            
             <section class="projects--details" data-aos="fade-down" data-aos-delay="50">
             <section className="container  mx-5 px-4">
                    <div className="row">
                        <div className="col-md">
                                <h7>CHALLENGES</h7>
                                <h2 className="mt-2">Getting users<span className="text-dark"> on board</span></h2>
                        </div>
                        <div className="projects--details--col col-md container">
                            <div>Ride Buddy is a late comer to the market, thus will have to overcome potential user bias due to pre-existing habit and familiarity with the mainstream providers, such as Uber and LYFT.</div><br/>
                            <div>On the flip side, Covid-19 hammered the rides business of major players, which presents opportunities for new players like us, who are more competitive in engaging and caring for riders' changing needs.</div><br/>
                            <div>Our team believe that Ride Buddy is unique and has an edge to hack into the existing shared micro-mobility market with our first-of-its-kind social-driven UX!</div>
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
                    </section>
                </section>  
                                                    
             {/* ***********************  Low fidelity wireframe  ***********************  */}

            <section id="rBAP" className="projects" data-aos="fade-down" data-aos-delay="50">
            </section>

            {/* ***********************  Strategy  ***********************  */}  
            <section class="projects--details" data-aos="fade-down" data-aos-delay="50">
            <div className="container  mx-5 px-4">
                    <div className="row">
                        <div className="col-md">
                                <h7>STRATEGY</h7>
                                <h2 className="mt-2"><span className="text-dark">Gamify</span> inherently imaginative <span className="text-dark">air-travel wonders</span></h2>
                        </div>
                        <div className="projects--details--col col-md container mt-3">
                        <div>To hack into a crowded ride hailing space, we set focus on the relatively untouched air travel space in the first stage of development. We believe this will get Ride Buddy an elegant entry and gain traction, user familiarity of our interface and brand speedily. Version 1.0 and our eventual carpool game and targeting exact same group of audience.</div><br/>
                        <div>We have created a gamified social network that presents clear incentive for users to connect for networking, socialising or romance in-flight (we will not define or limit their imagination!).</div><br/>
                        <div>Users will be able to find a Ridy Buddy before boarding or selecting their seats. They can scan the QR code all over the airport to access our app, entering their flight details and then locating other users who are also looking for a Ride Buddy.</div><br/>
                        <div>For users already boarded and be seated, they enjoy the liberty to connect with a Ride Buddy only when mutual liking is confirmed.</div>

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
                        <source src="videos/Journey.mp4" type="video/mp4"/>
                </video>
            </section>
            {/* *********************** Results ***********************  */}
            <section class="projects--details" data-aos="fade-down" data-aos-delay="50">
            <div className="container  mx-5 px-4">
                    <div className="row">
                        <div className="col-md">
                                <h7>RESULTS</h7>
                                <h2 className="mt-2"><span className="text-dark">Everybody</span> can be a <span className="text-dark">Ride Buddy</span></h2>
                        </div>
                        <div className="projects--details--col col-md container mt-3">
                            <div>We have built Ride Buddy 1.0 with PHP, MySQL and plain JavaScript, giving rise to a fully functioning in-flight social network that allows users to connect and communicate with contacts who are boarding on to the same flight. The level of completion allows us to present this appealing UX idea persuasively to potential partners and investors.</div><br/>
                            <div>The prototype actualised sophisticated functionalities, albeit being built with plain vanilla coding tools. In hindsight, our well-planned schema of the relational database was a key success factor.</div><br/>
                            <div>The team came up with coding solution for each landmark functionality one by one. The core function achieved is to let users registered to the same flight, as well as request, confirm and remove connections. We are particularly proud to have made live chat work by designing two ID (personID and profileID) for each user such that the dynamic combination of the two ID can create a unique link that are private to the users in the chatroom.</div><br/>
                        
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
            <section id="rBRS" className="projects" data-aos="fade-down" data-aos-delay="50">
            </section>
              
        </main>
        <Contact />
        </div>
    )
}

export default RideBuddy
