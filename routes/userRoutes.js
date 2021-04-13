const userController = require('../controllers/userController')

const express = require('express')
const userRoutes = express.Router()



userRoutes.get('/:id', userController.getUser)
userRoutes.get('/:userId/getfood', userController.getBabyTracker)

userRoutes.post('/', userController.createUser)
userRoutes.post('/login', userController.login)

userRoutes.put('/:id/edit', userController.update)

userRoutes.delete('/:id', userController.delete)
userRoutes.delete('/:userId/delete', userController.deletebabyTracker)




module.exports = userRoutes;
