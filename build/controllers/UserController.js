
import User from '../schemas/User'

class UserController {
     async index (req, res) {
        const users = await User.find()
        return res.json(users)
    }

     async create (req, res) {
        const user = await User.create(req.body)
        return res.json(user)
    }
}

export default new UserController()
