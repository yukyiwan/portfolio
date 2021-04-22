export default (posts=[], action)=>{ //state replaced by posts=[]
    switch (action.type){ //if conditionals to be added
        case 'FETCH_ALL':
            return action.payload; //state replaced by posts 
        case 'CREATE':
            return [...posts, action.payload];
        case 'UPDATE':
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case 'DELETE':
        return posts.filter((post) => post._id !== action.payload);

        default:
            return posts;
    }
}