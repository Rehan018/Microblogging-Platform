const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController.js');
const checkAuth=require('../middleware/auth.js');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.patch('/update', checkAuth, userController.updatedUser);
router.delete('/delete', checkAuth, userController.deleteUser);
module.exports=router;