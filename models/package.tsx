import { Schema, model, models } from "mongoose";

const PackageSchema = new Schema({
    name:{
        type: String
    },
    desc: {
        type: String
    },
    price: {
        type: Number
    },
    amount: {
        type: Number
    },
    isMostPop: {
        type: Boolean
    },
    features: {
        type: Array<String>
    }
});

export const Package = models.Package || model('Package', PackageSchema);

export default Package;