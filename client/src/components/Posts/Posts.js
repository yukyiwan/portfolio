import React from 'react';
import {useSelector} from 'react-redux';
import Post from './Post/Post.js';
import {Container, Row, Col} from 'react-bootstrap'; 
import NavCMS from '../Navbar/NavCMS';

const Posts = ()=> {

    const posts = useSelector ((state)=>state.posts); 

    return (
    <div>
        <NavCMS />
        <div id="mBoard">
        <Container className="m-0 p-0 d-flex justify-content-center">
            {/* <h1 className="text-center bg"></h1> */}
            <Row className="m-5 p-5">

            {posts.map((post) => (
                <Col>
                <Post key={post._id} post={post}/>
                </Col>
            ))} 
            </Row>
        </Container>
        </div>
    </div>
    )
}

export default Posts;