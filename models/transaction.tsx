import { Schema, model, models } from "mongoose";

const TransactionSchema = new Schema({
    order_id: {
        type: String,
        unique: [true, 'invalid order_id exist!'],
        required: [true, 'order_id is required!']
    },
    user_id: {
        type: String,
        required: [true, 'user_id is required!']
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    transaction_status: {
        type: String
    },
    fraud_status: {
        type: String,
    },
    transaction_time: {
        type: String
    },
    payment_type: {
        type: String
    },
    gross_amount: {
        type: Number
    },
    currency: {
        type: String
    },
    package_name: {
        type: String
    }
});

const Transaction = models.Transaction || model("Transaction", TransactionSchema);

export default Transaction;