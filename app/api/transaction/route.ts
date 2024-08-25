import Transaction from "../../../models/transaction";
import { connectToDB } from "../../../utils/database";


export const POST = async (request: any) => {
    const { 
        order_id, 
        user_id, 
        email, 
        name, 
        transaction_status,
        fraud_status,
        transaction_time,
        payment_type,
        gross_amount,
        currency,
        package_name
    } = await request.json();

    try {
        await connectToDB();

        const transaction = new Transaction({ 
            order_id: order_id,
            user_id: user_id,
            email: email,
            name: name,
            transaction_status: transaction_status,
            fraud_status: fraud_status,
            transaction_time: transaction_time,
            payment_type: payment_type,
            gross_amount: gross_amount,
            currency: currency,
            package_name: package_name
         });

        await transaction.save();

        return new Response(JSON.stringify(transaction), { status: 201 });

    } catch (error) {
        return new Response(`Failed to create new transaction ${error}`, {status: 500});
    }

}