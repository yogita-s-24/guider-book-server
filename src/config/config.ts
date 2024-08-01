import { config as conf } from 'dotenv';
             
conf();

const _config = {
    port: process.env.PORT,

    databaseUrl: process.env.MONGODB_CONNECTION,

    env:process.env.NODE_ENV,

    jwtSecret: process.env.JWT_SECRET,

    cloudinaryCloud: process.env.CLOUDINARY_CLOUD ,

    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY , 

    cloudinarySecret: process.env.CLOUDINARY_API_SECRETE
};

export const config = Object.freeze(_config);