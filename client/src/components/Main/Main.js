import React, {useEffect} from 'react'
import Typewriter from 'typewriter-effect';
import About from '../About/About';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../Navbar/Navbar';
// import zim from 'zimjs'

const Main = () => {

    useEffect (()=>{
        Aos.init({duration:2000})
    }, []);

    // var scaling = "header"; // use the ID of a tag to place the canvas in the tag
    // var frame = new Frame({scaling, retina:true}); // see docs for more options and info
    // frame.on("ready", function() {
    //     zog("ready from ZIM Frame");

    //     var stage = frame.stage;
    //     var stageW = frame.width;
    //     var stageH = frame.height;
    //     frame.color = pink; // ZIM colors now available globally

    //     // put your code here (you can delete this code)

    //     new Circle();

    //     // put resizing code in here
    //     frame.on("resize", resize);
    //     function resize(e) {
    //         stageW = frame.width;
    //         stageH = frame.height;
    //         button.scaleTo(stage, 30); // also see zim.Layout() for more complex scaling
    //         button.center(); // centers on stage - addTo() and others as well!
    //         stage.update();
    //     }

    // }); 

    return (
        <div>

        <Navbar/>
        <div id="header">    
                <div id="home" className="text-center" data-aos="fade-down" data-aos-delay="50">
                    <div>
                        <video autoPlay loop>
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
                                <div>a problem solver and more so a storyteller.</div>
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
