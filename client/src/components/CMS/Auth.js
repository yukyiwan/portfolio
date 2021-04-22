import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { useHistory } from 'react-router-dom';
import { signin } from '../../actions/auth';

const Auth = () => {
    const [personData, setPersonData] = useState({ 
        email:'', 
        password:''
     }); 

    const history = useHistory();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signin(personData, history))
    }
    return ( 
        
        <div id="cms">
            
            <a href="/"><img src="/images/logoSDS.png" id="logo" className="logo" alt="logo" /></a>

            <h1 className="m-3">Sign in</h1>

            <form className="form--position"  onSubmit={handleSubmit}>

                <div className="mb-2 text-left">
                <small><label for="email" className="form-label my-0 py-0">Email address</label></small>
                <input type="email" className="form-control" id="email" placeholder="corawan@corawan.com" value={personData.email} onChange={e=> setPersonData({...personData, email: e.target.value})} required/>
                </div>

                <div className="mb-2 text-left">
                <small><label for="password" className="form-label my-0 py-0">Password</label></small>
                <input type="password" className="form-control" id="password" placeholder="password" value={personData.password} onChange={e=> setPersonData({...personData, password: e.target.value})} required/>
                </div>

                <div className="mx-auto mb-3">
                <button className="btn btn-secondary btn--width" type="submit" >Sign in</button>
                </div>

                <div className="text-muted px-5 mt-3">
                    Not yet signed up? <a href="/Reg">Register</a>
                </div>

            </form>
 
        </div>
    );
}
 
export default Auth;