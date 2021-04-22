import React from 'react'
import Posts from '../Posts/Posts'
import Auth from '../CMS/Auth'

const CMS = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    
    return (
        <div id="messageB" className="mt-0 p-0">
            {user && user?.result.userType=="admin" ? <Posts />:
            <Auth />}
        </div>
    )
}

export default CMS
