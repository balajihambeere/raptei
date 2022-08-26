import bcrypt from 'bcrypt';
import { UserDocument } from './UsersSchema';
import { UsersType } from './UsersTypes';

export async function getUsers(): Promise<UsersType[]> {
    const result: UsersType[] = await UserDocument.find({});
    return JSON.parse(JSON.stringify(result));
}

export async function signUpAction(email: string, password: string): Promise<UsersType> {
    const userFound: UsersType | null = await UserDocument.findOne({ email });
    if (userFound) {
        return JSON.parse(JSON.stringify(userFound));
    }
    const newUser: UsersType = new UserDocument({ email, password });
    newUser.password = bcrypt.hashSync(password, 10);
    const user: UsersType = await newUser.save();
    user.password = null;
    return JSON.parse(JSON.stringify(user));
}

export async function signInAction(email: string, password: string): Promise<UsersType> {
    let user = await UserDocument.findOne({ email });
    const validate = user && user.comparePassword(password, user.password);
    if (!validate) {
        user = null;
    }
    return JSON.parse(JSON.stringify(user));
}