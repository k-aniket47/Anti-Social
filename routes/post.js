const express=require('express');
const router=express.Router()
const postController=require('../controllers/postcontroller')

router.post('/create',postController.create)

module.exports= router;