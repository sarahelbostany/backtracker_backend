const models = require('../models')

const userController = {}

//signup
userController.createUser = async (req, res) => {
    try {
      const user = await models.user.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        babyName: req.body.babyName,
        birthday: req.body.birthday
      })
      res.json({message: 'New user created', user})

    } catch (error) {
        res.status(400)
        res.json({error: 'Email already exists'})
      }
}

  //login

userController.login = async (req, res) => {
    try {
      const user = await models.user.findOne({
        where:{
          email: req.body.email
        }
      })

      if(user.password === req.body.password){
        res.json({message: 'login successful', user: user})
      }else{
        res.status(401)
        res.json({error:'incorrect password'})
      }

    } catch (error) {
      res.status(400)
      res.json({error: 'login failed'})
    }
  }

// user info
userController.getUser = async (req, res) => {
  try {
    let user = await models.user.findOne({
      where:{
        id: req.params.id
      }
    })
      res.json({user})

  } catch (error) {
    res.json({error})
  }
}

// Find saved baby data
userController.getBabyTracker = async (req, res) => {
  try {
    let user = await models.user.findOne({
      where:{
        id: req.params.userId
      }
    })
    let babyTracker = await user.getBabyTracker()
    res.json(babyTracker)
  } catch (error) {
    res.json({error})
  }
}

//update
userController.update = async (req, res) => {
  try {
    let updates = req.body
    let user = await models.user.findOne({
      where:{
        id: req.params.id
      }
    })
    let updateBaby = await user.update(updates)
    res.json({updateBaby})
  } catch (error) {
    res.json.error
  }
}


//Delete user account
userController.delete = async (req, res) => {
  try {
    let user = await models.user.findOne({
      where: {
        id: req.params.id
      }
    })
    await user.destroy()
    res.json({user, message: 'Your account has been deleted'})

  } catch (error) {
    res.json({error})
  }
}


//Delete saved baby data
userController.deletebabyTracker = async (req, res) => {
  try {
    let user = await models.user.findOne({
      where:{
        id: req.params.id
      }
    })
    let data = await user.getBabyTracker()
    await user.removeData(data)
    res.json({user, data})
  } catch (error) {
    res.json({error})
  }
}

  module.exports = userController;
