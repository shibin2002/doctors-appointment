import mongoose from "mongoose";

const connectDB = async () => {
    if (!process.env.MONGODB_URI) {
        console.error('❌ ERROR: MONGODB_URI environment variable is not set!');
        console.error('Please set MONGODB_URI in your Render environment variables.');
        console.error('Get a free MongoDB at: https://www.mongodb.com/cloud/atlas');
        process.exit(1);
    }

    mongoose.connection.on('connected', () => console.log("✅ Database Connected"))
    mongoose.connection.on('error', (err) => {
        console.error('❌ Database Connection Error:', err.message);
        process.exit(1);
    })
    
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`);
    } catch (error) {
        console.error('❌ Failed to connect to MongoDB:', error.message);
        process.exit(1);
    }
}

export default connectDB;

// Do not use '@' symbol in your database user's password else it will show an error.