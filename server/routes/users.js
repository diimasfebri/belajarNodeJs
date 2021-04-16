const express = require('express')

const UserModel = require('../models/UserModel')

const { generateID } = require('../plugins/helpers')

const router = express.Router()

router.get('/', async  (req, res) => {
  const {
    query: { id }
  } = req
  try {
    const users = await UserModel.find({}).exec()
    if (id) {
      const user = users.find((a) => a.id === parseInt(id))
      if (!user) throw new Error('USER_NOT_FOUND')
      res.send({ users: [user] })
    } else res.send({ users })
  } catch (e) {
    const { message } = e
    if (message === 'USER_NOT_FOUND') res.status(404).send({ message })
    else res.status(500).send({ message })    
  }
})

router.post('/create-user', async (req, res) => {
  const {
    body: {
      name, pass
    }
  } = req
  try {
    if (
      typeof name !== 'string' || name.length < 3 ||
      typeof pass !== 'string' || pass.length < 3
    ) throw new Error('INVALID_REQUEST')
    const newUser = new UserModel({ name, pass, create_date: new Date() })
    await newUser.save()
    return res.send({ message: 'SUCCESS' })
  } catch (e) {
    const { message } = e
    if (message === 'INVALID_REQUEST') res.status(400).send({ message })
    else res.status(500).send({ message })
  }
})


router.delete('/delete', (req, res) => {
  const {
    query: {id} 
  } = req
  try {
    if (id){
      const user = users.find((a) => a.id === parseInt(id))
      if (!user) throw new Error('USER_NOT_FOUND')
      const index = users.findIndex((a) => a.id === parseInt(id))
      users.splice(index, 1) 
      return res.send({ message: 'SUCCESS' })
      
    }throw new Error('INVALID_REQUEST')
  } catch (e) {
    const {message} = e
    if (message === 'USER_NOT_FOUND') res.status(404).send({ message })
    else res.status(500).send({ message }) 
  }

})

module.exports = router