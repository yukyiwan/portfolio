import React, {useState} from 'react';
import FileBase from 'react-file-base64';
import {createPost} from '../../actions/posts';
import {useDispatch} from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Formm = ()=> {
    const [postData, setPostData] = useState({
        creator:'',
        title:'',
        message:'',
        tags:'',
        selectedFile:''
    });
    
    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        // console.log(postData);
        e.preventDefault();
        dispatch(createPost(postData))
    }


    return (
        <div className="mt-5 mb-5">
        <h1>Cora's message board - leave me a message!</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Creator</Form.Label>
                <Form.Control type="text" placeholder="Creator" value={postData.creator} onChange={e=> setPostData({...postData, creator: e.target.value})} required/>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" value={postData.title} onChange={e=> setPostData({...postData, title: e.target.value})} required/>
                <Form.Label>Message</Form.Label>
                <Form.Control type="textfield" placeholder="Message" value={postData.message} onChange={e=> setPostData({...postData, message: e.target.value})} required/>
                <Form.Label>Tags</Form.Label>
                <Form.Control type="text" placeholder="Tags" value={postData.tags} onChange={e=> setPostData({...postData, tags: e.target.value})} required/>
            </Form.Group>
            <FileBase type="file" multiple={false} onDone={(base64)=> setPostData({...postData, selectedFile:base64})} required/>
            <Button className= "mt-4" variant="primary" type="submit" block >Submit</Button>
        </Form>
        </div>
    )
}

export default Formm;