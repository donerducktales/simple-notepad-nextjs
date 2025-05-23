import { client } from "@/lib/db";

export async function addNote({title, description}: {title: string, description: string}) {
   try {
      const myClient = await client.connect();
      const myDb = myClient.db('notes');
      const data = await myDb
         .collection('note')
         .insertOne({title: title, description: description})

      return data;
   } catch (error) {
      console.error(error);
   }
}