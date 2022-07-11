const express=require('express')

const router=express.Router()
const homeControler=require('../controllers/homecontroler')

router.get('/',homeControler.home)
router.use('/users',require('./user'))


module.exports=router;