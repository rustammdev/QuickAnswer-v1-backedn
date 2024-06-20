import express from 'express';
import userController from '../controllers/user.controller.js';
const route = express.Router();

//@desc Register user
//@route POST /api/users/register
//@access public
route.post('/register', userController);

export default route;
