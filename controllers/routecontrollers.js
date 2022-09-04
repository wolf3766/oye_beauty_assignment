const movie=require('../models/movies');

module.exports.addMovie=async(req,res)=>{
    console.log(req.body);
    await movie.create(req.body).then(function(movies){
        res.send(movies);
    }).catch(e=>{
        res.send(e);
        console.log(e);
    })
};

module.exports.getAll=(req,res)=>{
    console.log("finding all movies...");
    movie.find({}).then(function(movies){
        res.send(movies);
    }).catch(e=>console.log(`Error occured ${e}`));
} 

module.exports.getSingle=(req,res)=>{
    console.log("finding single movie...");
    movie.find({ID:req.query.ID}).then(function(movies){
        res.send(movies);
    }).catch(e=>console.log(`Error occured ${e}`));
}

module.exports.getPaginated=(req,res)=>{
        console.log("getpaginated");
        let page=req.query.page;
        let size=req.query.size;
        movie.find({ID: {$gte: (page-1)*size,$lte:(page)*size}}).then(function(movies){
            res.send(movies); 
        }).catch(e=>console.log(`Error occured ${e}`));
}
