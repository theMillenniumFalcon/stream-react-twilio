const { connect } = require('getstram')
const bcrypt = require('bcrypt')
const StreamChat = require('stream-chat')
const crypto = require('crypto')

const api_key = process.env.STREAM_API_KEY
const api_secret = process.env.STREAM_API_SECRET
const api_id = process.env.STREAM_API_ID


const signup = (req, res) => {
    try {
        const { fullName, username, password, phoneNumber } = req.body
        const userId = crypto.randomBytes(16).toString('hex')
        const serverClient = connect(api_key, api_secret, api_id)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error})
    }
}

const login = () => {

}

module.exports = {
    signup, login
}

