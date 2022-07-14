const Post =require('../models/post')
const User = require('../models/User');
module.exports.home= function(req,res){
    // Post.find({},function(err, posts){
    //     return res.render('home', {
    //         title: "Codeial | Home",
    //         posts:  posts
    //     });
    // })

    Post.find({})
    .populate('user')
    .populate({
        path:'comments',
        populate:{
            path:'user'
        }
    })
    .exec(function(err, posts){
        if (err) {
            console.log("error in populating")
            return
        }
        User.find({}, function(err, users){
            return res.render('home', {
                title: "Anti Social | Home",
                posts:  posts,
                all_users: users
            });

        })
        
    })
}
