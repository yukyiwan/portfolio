import * as api from '../api';

//Action Creators
export const getPosts = ()=>async(dispatch)=>{

    try {
        const {data} = await api.fetchPosts(); //{data} is part of the response
        dispatch({type: 'FETCH_ALL', payload:data}); // this is the action
        
    }catch (error){
        console.log(error.message);
    }
}

export const createPost = (post, router)=>async(dispatch)=>{

    try {
        const {data} = await api.createPost(post); //{data} is part of the response
        dispatch({type: 'CREATE', payload:data}); // this is the action
        router.push('/');
    }catch (error){
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
  
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
      await api.deletePost(id);
  
      dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };