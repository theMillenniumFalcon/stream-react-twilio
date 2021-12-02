const express = require('express')
const router = express.Router()
const {signup, login} = require('../controllers/auth')

router.route("/signup").post(signup)
router.route("/login").post(login)

// router.post('/signup', signup)

module.exports = router