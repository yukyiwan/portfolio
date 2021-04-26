import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux';
import FileBase from 'react-file-base64';
import {createPost} from '../../actions/posts';
import { Linkedin, Twitter, Github, Facebook, Instagram } from 'react-bootstrap-icons';
import Aos from 'aos';
import 'aos/dist/aos.css'; 

const Contact = () => {
    const [postData, setPostData] = useState({
        name:'',
        email:'',
        message:'',
        image:''
    });

    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        dispatch(createPost(postData))
    }

    useEffect (()=>{
        Aos.init({duration:2000})
    }, []);

    return (
        <div>
            <div id="contact" className="mt-3 pt-5" data-aos="fade-up"  data-aos-delay="50">
                <h1></h1>
                <h1 className="mt-5 pt-5 pb-3">Contact me</h1>

                <form className="form--position"  onSubmit={handleSubmit}>

                    <div className="mb-2 text-left">
                    <small><label for="name" className="form-label my-0 py-0">Name</label></small>
                    <input type="text" className="form-control" id="name" placeholder="Chris Noth" value={postData.name} onChange={e=> setPostData({...postData, name: e.target.value})} required/>
                    </div>

                    <div className="mb-2 text-left">
                    <small><label for="email" className="form-label my-0 py-0">Email address</label></small>
                    <input type="email" className="form-control" id="email" placeholder="me@chrisnoth.com" value={postData.email} onChange={e=> setPostData({...postData, email: e.target.value})} required/>
                    </div>

                    <div className="mb-2 text-left">
                    <small><label for="message" className="form-label my-0 py-0">Leave me a message</label></small>
                    <textarea className="form-control" id="message" rows="3" placeholder="Cora..." value={postData.message} onChange={e=> setPostData({...postData, message: e.target.value})} required></textarea>
                    </div>

                    <div className="mb-4 text-left">
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, image: base64 })} required/>
                    </div>

                    <div className="mx-auto mb-3">
                    <button className="btn btn-secondary btn--width" type="submit" >Post</button>
                    </div>

                </form>

            </div>

            <div id="footer" className="pt-1 pb-3 footer bg-secondary text-success" data-aos="fade-up"  data-aos-delay="50">
                
                <div className="container text-center">
                
                    <div>

                        <ul className="container nav justify-content-center">

                        <li className="nav-item linkedin">
                            <a className="nav-link linkedin" href="https://www.linkedin.com/in/corawan" target="_blank"
                            rel="noopener noreferrer"><i><Linkedin /></i></a>
                        </li>

                        <li className="nav-item twitter">
                            <a className="nav-link" href="https://twitter.com/uxDetective1314" target="_blank"
                            rel="noopener noreferrer"><i><Twitter /></i></a>
                        </li>

                        <li className="nav-item github">
                            <a className="nav-link" href="https://github.com/yukyiwan" target="_blank"
                            rel="noopener noreferrer"><i><Github /></i></a>
                        </li>

                        <li className="nav-item facebook">
                            <a className="nav-link" href="https://www.facebook.com/yuki.wan.71697/" target="_blank"
                            rel="noopener noreferrer"><i><Facebook /></i></a>
                        </li>
                        <li className="nav-item instagram">
                            <a className="nav-link instagram" href="https://www.instagram.com/corawan.oakville/" target="_blank"
                            rel="noopener noreferrer"><i><Instagram /></i></a>
                        </li>

                        </ul>

                    </div>
                
                    <div>1430 Trafamdar Road, Oakville, Ontario, L6H 2L1 | <a href="tel:+1-905-815-4150">+1-905-815-4150 (ext.: 72628)</a> | <a href="mailto:wanyuk@sheridancollege.ca">wanyuk@sheridancollege.ca</a></div>
                    
                    <small className="text-success-50"><a href="/CMS">© 2021 All Rights Reserved</a></small><br/>

                    {/* <small><a href="#top">Back to top</a></small> */}

                </div>

            </div>


        </div>
    )
}

export default Contact
