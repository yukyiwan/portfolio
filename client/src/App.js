import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'; //a hook to dispatch an action
import {getPosts} from './actions/posts';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Main from './components/Main/Main';
import CMS from './components/CMS/CMS';
import Reg from './components/CMS/Reg';
import ZOFFICE from './components/ZOFFICE/ZOFFICE';
import UX from './components/UX/UX';
import RideBuddy from './components/RideBuddy/RideBuddy';

const App = ()=>{
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <>         
        <BrowserRouter>
        <Switch>
                <Route path="/RideBuddy" component={RideBuddy} />   
                <Route path="/UX" component={UX} />   
                <Route path="/ZOFFICE" component={ZOFFICE} />  
                <Route path="/Reg" component={Reg} />  
                <Route path="/CMS" component={CMS} />   
                <Route path="/" component={Main} />  
            </Switch>
        </BrowserRouter>

        {/* <Footer /> */}
    </>

    );
}

export default App;