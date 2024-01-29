import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || email === '' || password === '') {
        next(errorHandler(400,'All field required.'))
    }

const hashpasswords = bcryptjs.hashSync(password,10);
const newUser = new User({
    username,
    email,
    password:hashpasswords,
});

try{
    await newUser.save();
    res.json('User saved');
} catch(err) {
    next(err);
}
}