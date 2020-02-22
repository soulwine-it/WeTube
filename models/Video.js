//Video들의 형태를 정의
import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        //fileUrl값이 없는 Video를 생성하려 한다면 이 error message를 받음
        required: 'File URL is required'
    },
    title: {
        type: String,
        required: "Title is required"
    },
    description: String,
    views: {
        type: Number,
        //처음 video가 생성되면 views를 0이 되게 함
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]

});

const model = mongoose.model("Video", VideoSchema);
export default model;