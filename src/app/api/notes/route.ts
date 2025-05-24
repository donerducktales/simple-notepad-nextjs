import { client } from "@/lib/db";
import { addNote } from "../actions";

export async function GET() {
   try {
      const myClient = await client.connect();
      const myDb = myClient.db("notes");
      const myData = await myDb.collection("note").find().toArray();

      return new Response(JSON.stringify(myData));
   } catch (error) {
      console.error("Error fetching notes:", error);
   }
}

export async function POST(request: Request) {
   const body = await request.json()
   const {title, description}: {title: string, description: string} = body;

   const addData = await addNote({title, description})

   return new Response(JSON.stringify(addData))
}
