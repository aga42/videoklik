import mongoose from "mongoose";

let isConnected = false; //track the connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect("mongodb+srv://ituaga42:sMCAxebh8uBptbFy@cluster0.wwecvcn.mongodb.net/?retryWrites=true&w=majority", {
            dbName: "videoklik",
        })

        isConnected = true;
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
}