import { connectToDB } from "../../../../../utils/database";
import User from "../../../../../models/user";

export const PATCH = async (
    request: Request,
    { params }: { params: { id: string } }
) => {

    const { 
        credits
    } = await request.json();

    try {
        await connectToDB();

        const existingUser = await User.findById(params.id);

        if (!existingUser) return new Response("User not found", { status: 404 });

        existingUser.credits = credits

        await existingUser.save()

        return new Response(JSON.stringify(existingUser), { status: 200 });

    } catch (error) {
        console.log(error)
        return new Response("Failed to update user profile", { status: 500 });
    }

}
