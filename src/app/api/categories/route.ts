import { client } from "@/lib/db"

export async function GET() {
   try {
      const myClient = await client.connect();
      const myDb = myClient.db('notes');
      const category = await myDb
         .collection('categories')
         .find({})
         .toArray()

      return new Response(JSON.stringify(category));
   } catch (error) {
      throw error
   }
}