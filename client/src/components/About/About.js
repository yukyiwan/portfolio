import React, {useState , useEffect} from 'react';
import Typewriter from 'typewriter-effect';
import Aos from 'aos';
import 'aos/dist/aos.css'; 

const About = () => {

    const [showMore1, setShowMore1] = useState(false);
    const [showMore2, setShowMore2] = useState(false);
    const [showMore3, setShowMore3] = useState(false);
    const [showeMore1, setShoweMore1] = useState(false);
    const [showeMore2, setShoweMore2] = useState(false);
    const [showeMore3, setShoweMore3] = useState(false);

    useEffect (()=>{
        Aos.init({duration:2000})
    }, []);

    return (
        <div>
       
            <main>
                <section id="about" data-aos="fade-down" data-aos-delay="50">
                    <div className="text-center container px-4">
                    <div className="row">
                        <div className="col-md"></div>
                        <div className="col-md container px-4 m-0">
                        <h1>About</h1><br/>
                        <p>I have more than 10 years of experience in helping business engage audience over trending media. I am a brand professional with full-stack web development skills, problem solver and more so a storyteller, seeking to engage audience in today’s purpose-driven, digital transformation era.
                        </p>
                        <p> A creative coder with strong logic, I enjoy creating imaginative user experience through writing out-of-the-box codes. My ideas and solutions reflect my passion as a geopolitics, law & economics graduate and a strategic brand professional for a decade, who sees today's world through the lens of multiple stakeholders, issues and norms.
                        </p><br/>


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
                
             {/* ***********************  WORK EXPERIENCE  ***********************  */}
                
                <section id="work" data-aos="fade-down" data-aos-delay="50">
                    <div className="text-center container px-4">
                        <div className="row">
                            <div className="col-md container px-4 m-0">
                                    <h1 id="wBlock">Experience</h1><br/><br/>
                                    <div>
                                        <section id="work1" onClick={()=>setShowMore1(!showMore1)}>
                                            <h5><div>Senior Advisor</div>
                                            <div>Osmanthus Associates | 2017-2020</div></h5>

                                            {showMore1?<div id="more1" className="text-info">
                                                <div>Developed solutions to support client to sustain success</div>
                                                <div>Managed teams, contracts, profit and loss of agency business</div>
                                                <div>Communication advisor for brands and financial institutions</div>
                                                <div>Branding, crisis and communication trainer</div>
                                            </div>:null}
                                        </section> <br/><br/>

                                        <section id="work2" onClick={()=>setShowMore2(!showMore2)}>
                                            <h5><div>Director</div>
                                            <div>FTI Consulting | 2013-2017</div></h5>
                                            {showMore2?<div id="more2" className="text-info">
                                                {/* <!-- <p>As a team lead driving multiple complex communication projects,</p> --> */}
                                                <div>Managed teams, contracts, profit and loss of multiple accounts</div>
                                                <div>Originated creative growth-oriented brand communication, thought-leadership, and crisis communication plans</div>
                                                <div>Communication advisor for brands and financial institutions</div>
                                            </div>:null}
                                        </section><br/><br/>

                                        <section id="work3" onClick={()=>setShowMore3(!showMore3)}>
                                        <h5><div>Manager, External Relations</div>
                                        <div>Securities and Futures Commission | 2009-2012</div></h5>
                                        {/* <!-- <p>A versatile communications professional, having job rotations in different teams spanning stakeholder relations, publications, press relations and investor education:</p> --> */}
                                        {showMore3?<div id="more3" className="text-info">
                                            <div>Led corporate website revamp</div>
                                            <div>Produced corporate videos and publications</div>
                                            <div>Drafted stakeholder relations policy</div>
                                            <div>Organized investor/financial product education campaigns</div>
                                        </div>:null}
                                        </section>

                                    </div><br/><br/>
                                    
                                    <small><Typewriter
                                            options={{
                                                strings: ['TAP TO UNVEIL DETAILS', 'SCROLL FOR MORE'],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                    /></small>
                                </div>
                        
                    <div className="col-md"></div>
                    </div>
                    </div>
                </section>

                {/* <!-- ******************  EDUCATION & CERTIFICATIONS ****************** --> */}
                
                <section id="education"  data-aos="fade-down" data-aos-delay="50">
                    <div className="text-center container px-4"> 
                    <h1>Education</h1>
                    <br/><br/>

                    <section id="edu1" onClick={()=>setShoweMore1(!showeMore1)}>
                    <h5><div>Postgraduate, Interactive Media Management</div>
                    <div>Sheridan College | 2020-21</div></h5>
                    
                    {showeMore1?<div id="eMore1" className="text-info">
                    <div>Peer Tutor | guard.me Scholarship Awardee | GPA 4.0</div>
                    <div> UX | Web Dev | Interaction Design | Motion Graphics | AR </div>
                    <div> JavaScript, Node, Mongodb, React | PHP, MySQL | Html, CSS, Bootstrap, SASS | ZIM, Canvas </div>
                    </div>:null}

                    </section>

                    <section id="edu2" onClick={()=>setShoweMore2(!showeMore2)}>
                    <br/><br/><h5><div>Master of Int'l & Public Affairs</div>
                    <div>The University of Hong Kong | 2016-18</div></h5>
                    
                    {showeMore2?<div id="eMore2" className="text-info"><div>Global Issues | International Organizations | US-China Relations </div></div>:null}
                    
                    </section>

                    <section id="edu3" onClick={()=>setShoweMore3(!showeMore3)}>
                    <br/><br/><h5><div>Bachelor of Laws</div>
                    <div>University of London | 2010-13</div></h5>
                    
                    {showeMore3?<div id="eMore3" className="text-info">Distinction in: Company Law | Civil and Criminal Procedures | Merger Control </div>:null}

                    </section>


                    </div><br/><br/>

                    <small><Typewriter
                                            options={{
                                                strings: ['TAP TO UNVEIL DETAILS', 'SCROLL TO CONTACT CORA!'],
                                                autoStart: true,
                                                loop: true,
                                            }}
                            /></small>

                </section>



        </main>

        </div>
    )
}

export default About
