const express=require('express')
const router=express.Router()
const userControler=require('../controllers/usersControler')


router.get('/profile',userControler.user)


module.exports=router;