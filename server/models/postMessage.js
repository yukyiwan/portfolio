import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String,
    image: String,
    replied: {
        type: Boolean,
        default: false
    },
    remarks: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    lastUpdate: {
        type: Date,
        default: new Date()
    },
})

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;