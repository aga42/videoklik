import { connectToDB } from "../../../../utils/database";
import User from "../../../../models/user";

export const PATCH = async (
    request: Request,
    { params }: { params: { id: string } }
) => {

    const { 
        email, 
        name,
        phone_number,
        credits,
        is_pro_member
    } = await request.json();

    try {
        await connectToDB();

        const existingUser = await User.findById(params.id);

        if (!existingUser) return new Response("User not found", { status: 404 });

        existingUser.email = email
        existingUser.name = name
        existingUser.phone_number = phone_number
        existingUser.credits = credits
        existingUser.is_pro_member = is_pro_member

        await existingUser.save()

        return new Response(JSON.stringify(existingUser), { status: 200 });

    } catch (error) {
        console.log(error)
        return new Response("Failed to update user profile", { status: 500 });
    }

}

export const GET = async (
    request: Request,
    { params }: { params: { id: string } }
) => {

    try {
        await connectToDB();

        const user = await User.findById(params.id)
        if (!user) return new Response("User not found");

        return new Response(JSON.stringify(user));

    } catch (error) {
        console.log(error)
        return new Response("Failed to get profile");
    }

}
