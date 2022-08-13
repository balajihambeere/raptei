import bcrypt from 'bcrypt';
import { UserDocument } from '../users/UsersSchema';
import { UsersType } from '../users/UsersTypes';

const registerAction = async (firstName: string, lastName: string, email: string, password: string):
    Promise<UsersType> => {
    const userFound: UsersType | null = await UserDocument.findOne({ email });
    if (userFound) {
        return JSON.parse(JSON.stringify(userFound));
    }
    const newUser: UsersType = new UserDocument({ firstName, lastName, email, password });
    newUser.password = bcrypt.hashSync(password, 10);
    const user: UsersType = await newUser.save();
    user.password = null;
    return JSON.parse(JSON.stringify(user));
};

export { registerAction }