import { addNote } from "../actions";

export async function POST(request: Request) {
   const body = await request.json()
   const {title, description}: {title: string, description: string} = body;

   const addData = await addNote({title, description})

   return new Response(JSON.stringify(addData))
}
