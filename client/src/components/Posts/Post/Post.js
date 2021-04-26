import React, {useState} from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { updatePost,  deletePost } from '../../../actions/posts';

import {Card, Button, Form} from 'react-bootstrap';

const Post = ({post})=> {
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({
        name:post.name,
        email:post.email,
        message:post.message,
        image:post.image,
        replied: post.replied,
        remarks: post.remarks,
        createdAt: post.createdAt,
        lastUpdate: post.lastUpdate
    });


    const timeStamp = moment(post.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a");
    const lastUpdate = moment(post.lastUpdate).format("dddd, MMMM Do YYYY, h:mm:ss a");
    const handleUpdate = (e)=>{
        e.preventDefault();
        dispatch(updatePost(post._id, postData))
    }

    const handleDelete = (e)=>{
        e.preventDefault();
        dispatch(deletePost(post._id));
    }

    return (

        <Card style={{ width: '18rem' }} className="my-3">
        
        <Card.Img variant="top" src={postData.image} />
        <Card.Body className="text-left">
            <Card.Text className="text-muted"><small> {timeStamp}</small></Card.Text>
            <Card.Title className="py-0 my-1">{postData.name}</Card.Title>
            
            <Card.Text className="py-0 my-1"> {postData.email}</Card.Text>
            <Card.Text className="py-0 my-1"> {postData.message}</Card.Text>
            <hr/>
            <Form>

                <div key="checkbox" className="py-0 my-1">
                {postData.replied? 
                <Form.Check type="checkbox" id="replied" label="replied" checked onChange={()=> {
                    if (postData.replied) setPostData({...postData, replied: false, lastUpdate: new Date()})
                    else setPostData({...postData, replied: true})
                    }}/>
                : <Form.Check type="checkbox" id="replied" label="replied" onChange={()=> {
                    if (postData.replied) setPostData({...postData, replied: false, lastUpdate: new Date()})
                    else setPostData({...postData, replied: true})
                    }}/>}
                </div>

            <Form.Group controlId="formBasicTitle">
                        <Form.Control as="textarea" rows={3}  className="py-0 my-1" name="remarks" placeholder="remarks..." value={postData.remarks} onChange={(e) => setPostData({ ...postData, remarks: e.target.value, lastUpdate: new Date()})}/>
            </Form.Group>
            </Form>

            <Button variant="primary" onClick={handleUpdate} block>Update</Button>
            <Button variant="primary" onClick={handleDelete} block>Delete</Button>

            <Card.Text className="text-muted mt-3 pb-0 mb-0"><small>Last update:</small></Card.Text>
            <Card.Text className="text-muted py-0 my-0"><small>{lastUpdate}</small></Card.Text>
        </Card.Body>
        </Card>
    )

}

export default Post;