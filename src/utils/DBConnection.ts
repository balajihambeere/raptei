import mongoose from 'mongoose';

export default async function dbConnection(): Promise<any> {
    console.log(process.env.MONGODB_URI);
    // check if we have a connection to the database or if it's currently
    // connecting or disconnecting (readyState 1, 2 and 3)
    if (mongoose.connection.readyState >= 1) {
        return
    }

    return mongoose.connect(process.env.MONGODB_URI as string);
}

