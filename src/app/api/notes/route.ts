import { client } from "@/lib/db";
import { addNote, deleteNote, updateNote } from "../actions";
import { ObjectId } from "mongodb";

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
   const {title, description, type}: {title: string, description: string, type: string} = body;

   const addData = await addNote({title, description, type})

   return new Response(JSON.stringify(addData))
}

export async function PUT(request: Request) {
   const body = await request.json()
   const {_id, title, description, type} = body;

   const updateOneNote = await updateNote({_id, title, description, type});
   
   return new Response(JSON.stringify(updateOneNote));
}

export async function DELETE(request: Request) {
   const body = await request.json()
   const {_id} = body;

   const deleteOneNote = await deleteNote({ _id: new ObjectId(String(_id)) });

   return new Response(JSON.stringify(deleteOneNote));
}
