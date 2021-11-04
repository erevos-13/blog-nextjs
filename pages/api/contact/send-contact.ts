import { connectToDatabase } from "../../../lib/db";

async function handler(req: any, res: any) {
    const client = await connectToDatabase();
    const db = client.db();

    if (req.method === "POST") {
        const { email, title, message } = req.body;
        if (
            !email ||
            !email.includes("@")
        ) {
            res.status(422).json({
                message: "Invalid input - password should also be least 7 characters",
            });
        }



        const insertUser = await db.collection("contacts").insertOne({
            email,
            title,
            message
        });
        console.log(insertUser);
        res.status(201).json({ message: "Message send created" });
    }
}


export default handler;