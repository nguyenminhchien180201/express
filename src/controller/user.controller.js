import status from 'statuses';
import { HTTP_STATUS } from '../enum.js';
import { register, login } from '../service/user.service.js'
import { BaseResponse } from '../utils/util.js';
import { User } from '../models/user.model.js';
export const userRegister = async (req, res) => {
    const data = await register(req, res)
    return res.status(HTTP_STATUS.SUCCESS).send(new BaseResponse({ data }));

}
export const userLogin = async (req, res) => {
    const data = await login(req.body, res);
    return res.status(HTTP_STATUS.SUCCESS).send(new BaseResponse({ data }))

}