import React from 'react';
import {useSelector} from 'react-redux';
import Post from './Post/Post.js';
import {Container, Row, Col} from 'react-bootstrap'; 
import NavCMS from '../Navbar/NavCMS';

const Posts = ()=> {

    const posts = useSelector ((state)=>state.posts); 

    return (
    <>
        <NavCMS />
        <div className="p-5">
        <Container className="m-0 p-0">
            <h1 className="text-center"></h1>
            <Row className="p-5">

            {posts.map((post) => (
                <Col>
                <Post key={post._id} post={post}/>
                </Col>
            ))} 
            </Row>
        </Container>
        </div>
    </>
    )
}

export default Posts;