import { register } from '../service/user.service.js'
export const userRegister = async (req, res) => {
    await register(1)
    console.log(3524);
}
