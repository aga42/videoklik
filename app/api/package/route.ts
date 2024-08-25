import Package from "../../../models/package";
import { connectToDB } from "../../../utils/database";


//GET
export const GET = async () => {

    try {
        await connectToDB();

        const packages = await Package.find().limit(5)
        if (!packages) return new Response("Package not found");
        return new Response(JSON.stringify(packages));

    } catch (error) {
        console.log(error)
        return new Response("Failed to get Package");
    }

}