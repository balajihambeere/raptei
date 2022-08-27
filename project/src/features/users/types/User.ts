
export type comparePasswordFunction = (requestedPassword: string, password: string | null) => boolean;

export interface UserType {
    email: string;
    password: string | null;
    firstName: string;
    lastName: string;
    website?: string;
    bioInfo?: string;
    allowExtraEmails?: boolean;
    image?: string;
    createdDate: Date;
    comparePassword: comparePasswordFunction;

}
