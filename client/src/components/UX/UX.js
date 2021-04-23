import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Contact from '../Contact/Contact'
import {PlayCircleFill, X} from 'react-bootstrap-icons';
import Typewriter from 'typewriter-effect';
import Aos from 'aos';
import 'aos/dist/aos.css'; 

const UX = () => {
    
    const [showVideo, setShowVideo] = useState(false);
    const [showCover, setShowCover] = useState(true);


    useEffect (()=>{
        Aos.init({duration:2000})
    }, []);

    return (
        <div>
        {showCover? <Navbar />:null}
        <main>
                <section class="projects text-white" id="UX" data-aos="fade-down" data-aos-delay="50">
                
                    {showCover? 
                    <div className="container mx-5 px-5">
                    <div className="row">
                        <div className="col-md container">
                        <h7>INTERFACE CASE STUDY</h7>

                        <h1>H&M | ZARA</h1>
                        <i><PlayCircleFill onClick={()=>{
                                        setShowVideo(true)
                                        setShowCover(false)
                                        }}/></i> 
                        
                        <div className="mt-4 mb-5"> 
                            <div>When users visit H&M or Zara's apps,</div>
                            <div>can they find the latest collection?</div>
                            <div>Check out our UX comparison results!</div>
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
                <i className="x--position"><X  onClick={()=>{
                                        setShowVideo(false)
                                        setShowCover(true)
                                        }}/></i> 
                <video controls autoPlay>
                        <source src="videos/UX.mp4" type="video/mp4"/>
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
                            <h2 className="mt-2">Is the e-shop's <span className="text-dark">profit margin </span>optimised by <span className="text-dark">UX design?</span></h2>
                        </div>
                        <div className="projects--details--col col-md container">
                            <div>Our case study is based on the job story of a fast fashion customer's situation, motivation and espectation. "When I go to H&M / Zara, I want to be showed to the latest collection, so I can add a few latest trending pieces to my wardrobe."</div><br/>
                            <div>We have set up a live user test to observe whether a user can move from screen to screen smoothly to buy an outfit from the latest collection, where the highest profit margin is. </div><br/>
                            <div>The user test has yeilded interesting findings and takeaways on the strength of the e-commerce platform's UI/UX and what enhancements may potentially change the game.</div><br/>
                            
                            <div><b>UX Research Team</b></div>
                            <div>Cora Wan | Disha Shah | Fiona Ho | Victoria You</div>
                        
                            
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

                
             {/* ***********************  H&M Winning case  ***********************  */}

            <section id="HM" className="projects" data-aos="fade-down" data-aos-delay="50">
            </section>


             {/* ***********************  Challenges  ***********************  */}
            
             <section class="projects--details" data-aos="fade-down" data-aos-delay="50">
             <div className="container  mx-5 px-4">
                    <div className="row">
                        <div className="col-md">
                                <h7>FINDINGS</h7>
                                <h2 className="mt-2">Delicate <span className="text-dark">balance </span>between <span className="text-dark">UX</span> & specific sense of <span className="text-dark">aesthetics</span></h2>
                        </div>
                        <div className="projects--details--col col-md container">
                            <div>H&M’s interface design has clearly gained upper hand, in terms of getting the specific tasks done in the user test– directing our user to latest collection and facilitate payment smoothly.</div><br/>
                            <div>In our user test, the user faced various problems reaching Zara’s latest collection, although the user can make payment smoothly after eventually locating the latest collection.</div><br/>
                            <div>Our team found that the main factor affecting Zara’s UX performance of Zara is its high fashion, aloof and unique style that adopts miniature text description and no call-to-action banners or buttons. This contrasts to H&M’s friendly, down to earth and common e-commerce platform style.</div><br/>                        
                            <div>While H&M provides a smoother user experience, the platform is not without room of improvement. We found that providing add-to-chat function earlier, in the product listing view, can boost sales and enhance user experience.</div><br/>
                    
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
                                                    
             {/* ***********************  Zara's UI  ***********************  */}

            <section id="ZR" className="projects" data-aos="fade-down" data-aos-delay="50">
            </section>

            {/* ***********************  Strategy  ***********************  */}  
            <section class="projects--details" data-aos="fade-down" data-aos-delay="50">
            <div className="container  mx-5 px-4">
                    <div className="row">
                        <div className="col-md">
                                <h7>SOLUTION</h7>
                                <h2 className="mt-2"><span className="text-dark">Connect</span> the<span className="text-dark"> dots</span></h2>
                        </div>
                        <div className="projects--details--col col-md container mt-3">
                        <div>Having high-fashion aesthetics is, in Zara’s case, important for attracting customers who are willing to pay more for the brand. However, competition for attention span in the digital space is brutal.</div><br/>
                        <div>Therefore, the solution, we believe, is not to make Zara look like H&M or Gap, but making subtle improvements to drastically improve the user flow and experience such that users can be clearly and directly guided to reach and buy the latest collections.</div><br/>
                        <div>Our solution sees collection names appear on the image itself in bigger and bolder font, so that users will not miss them. Also, we have designed a "shop now" call-to-action button to connect users to the entire suite of products carried by the model in the image to encourage buying.</div><br/>
                        <div>In terms of product display, Zara is showing a number of products on a model shot. To improve clarity, our recommended product showcase will involve functionalities that users can toggle between model and product views.</div>

                        <div className="my-5 text-right">
                                <small><Typewriter
                                        options={{
                                            strings: ['SCROLL TO VIEW SOLUTION'],
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
            <section id="UXRS" className="projects" data-aos="fade-down" data-aos-delay="50">
            </section>
              
        </main>
        <Contact />
        </div>
    )
}

export default UX
