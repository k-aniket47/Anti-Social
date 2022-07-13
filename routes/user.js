const express=require('express');
const passport = require('passport');
const router=express.Router()
const userController=require('../controllers/usersController')


router.get('/profile',passport.checkAuthentication,userController.profile)

router.get('/sign-up', userController.signUp);
router.get('/sign-in', userController.signIn);


router.post('/create', userController.create);
router.post('/create-Session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'},
),userController.createSession);

router.get('/sign-out', userController.destroySession);

module.exports=router;