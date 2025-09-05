import { client } from "@/lib/db";
import { addCategory } from "../actions";

export async function GET() {
  try {
    const myClient = await client.connect();
    const myDb = myClient.db("notes");
    const category = await myDb.collection("categories").find({}).toArray();

    return new Response(JSON.stringify(category));
  } catch (error) {
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type }: { type: string } = body;
    const addNewCategory = await addCategory({ type });

    return new Response(JSON.stringify(addNewCategory));
  } catch (error) {
    console.error("route.ts categories", error);
  }
}
