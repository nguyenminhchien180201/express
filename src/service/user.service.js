import { HTTP_STATUS } from '../enum.js';
import { User } from '../models/user.model.js'
import { ExceptionResponse } from '../utils/util.js';
export const register = async (req, res) => {
    try {
        const { username, password, fullName, avatar, role } = req.body;

        //check exits user
        const exitUser = await User.findOne({ username })
        if (exitUser) {
            return res.status(HTTP_STATUS.BAD_REQUEST).send('User is exit, please login')
        }

        const user = await User.create({
            username, password, fullName, avatar, role
        });
        return user
    } catch (error) {
        console.log("🚀 ~ error:", error)

    }

}
export const login = (req, res) => {

}