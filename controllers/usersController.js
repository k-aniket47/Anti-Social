const User = require('../models/User');

module.exports.profile= function(req,res){
    User.findById(req.params.id, function(err, user){
        return res.render('profile',{
            'title':'profile',
            profile_user: user
        })
    })
}

module.exports.update = function(req, res){
    if(req.user.id == req.params.id){
        User.findByIdAndUpdate(req.params.id, req.body, function(err, user){
            return res.redirect('/');
        });
    }else{
        return res.status(401).send('Unauthorized');
    }
}

module.exports.signUp = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('sign_up', {
        title: "Anti Social | Sign Up"
    })
}

module.exports.signIn = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('sign_in', {
        title: "Anti Social | Sign In"
    })
}
module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        console.log("Password not matched")
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }

    });
}


module.exports.createSession = function(req, res){
    return res.redirect('/') 
} 

module.exports.destroySession = function(req, res){
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
}

