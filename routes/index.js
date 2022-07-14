const express=require('express')

const router=express.Router()
const homeController=require('../controllers/homecontroller')

router.get('/',homeController.home)
router.use('/users',require('./user'))
router.use('/posts',require('./post'))
router.use('/comments',require('./comment'))


module.exports=router;