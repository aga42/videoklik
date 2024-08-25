import Transaction from "../../../../../models/transaction";
import { connectToDB } from "../../../../../utils/database";


//GET
export const GET = async (request: Request,
    { params }: { params: { package_name: string }}) => {

    try {
        await connectToDB();

        const total = await Transaction.countDocuments()
        const order_id = `VIDEOKLIK-6100917-${params.package_name}-${total + 1}`

        return new Response(JSON.stringify(`${order_id}`));

    } catch (error) {
        console.log(error)
        return new Response("Failed to get berita");
    }

}