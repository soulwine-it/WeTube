import routes from "../routes.js";
//element를 받는 통로
import Video from "../models/Video";


export const home = async (req, res) => {
    try {
        //await: 해당 과정이 끝날때까지 기다리게 하는 것 async랑 같이 쓰임
        const videos = await Video.find({});
        res.render("home", {
            pageTitle: "Home",
            videos
        });
    } catch (error) {
        console.log(error);
        res.render("home", {
            pageTitle: "Home",
            videos: []
        });
    }
};
export const search = (req, res) => {
    //es6 (req.query.term)
    const {
        query: {
            term: searchingBy
        }
    } = req;

    res.render("search", {
        pageTitle: "Search",
        searchingBy: searchingBy,
        videos
    });
};


export const getUpload = (req, res) => res.render("upload", {
    pageTitle: "Upload"
});

export const postUpload = async(req, res) => {
    const {
        body: {
            title,
            description
        },
        file: {path}
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description

    });
    console.log(newVideo);
    // To Do Upload and save video
   res.redirect(routes.videoDetail(newVideo.id));
    // res.redirect(routes.videoDetail(31));
};

export const videoDetail = async(req, res) =>{
    
    const {
        params: {
            id
        } 
    } = req;
    try{
        const video = await Video.findById(id);
    console.log(video);
    res.render("videoDetail", {

        pageTitle: "VideoDetail", video
    });
    }catch{
        
        res.redirect(routes.home);
    }
    
}
export const getEditVideo = async(req, res) => {
    const {
        params :{id}
    } = req;
    //video를 가져오자
    try{
        const video = await Video.findById(id);
        //비디오가 있다면?
        res.render("eiditVideo", {pageTitle: `Edit ${video.title}`, video});
    }catch{
    //비디오를 못찾으면? 집으로 보내버리자
    res.redirect(routes.home);
    }
}
export const postEditVideo = (req, res) => {
   const {
       params: {id}
   } = req;
};
export const deleteVideo = (req, res) => res.render("deleteVideo", {

    pageTitle: "DeleteVideo"
});