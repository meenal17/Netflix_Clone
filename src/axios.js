import  axios from "axios";

const instance =axios.create({
    // base url to request with the databse
    baseURL :"https://api.themoviedb.org/3",
    //baseURL:"https://api.themoviedb.org/3/movie/550?",
});

export  default instance;