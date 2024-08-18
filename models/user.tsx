import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exist!'],
        required: [true, 'Email is required!']
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    name: {
        type: String
    },
    image_profile: {
        //url image profile
        type: String,
        required: [true, 'imgprof is required!']
    },
    phone_number: {
        //0812900909
        type: String
    },
    latest_purchase: {
        type: String
    },
    date_join: {
        type: String
    },
    is_pro_member: {
        type: Boolean
    },
    credits: {
        type: Number
    }
});

const User = models.User || model("User", UserSchema);

export default User;