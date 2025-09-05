import { client } from "@/lib/db";
import { ObjectId } from "mongodb";

export async function addNote({title, description, type}: {title: string, description: string, type: string}) {
   try {
      const myClient = await client.connect();
      const myDb = myClient.db('notes');
      const data = await myDb
         .collection('note')
         .insertOne({title: title, description: description, type: type})

      return data;
   } catch (error) {
      console.error(error);
   }
}

export async function addCategory({type}: {type: string}) {
  try {
    const myClient = await client.connect();
    const myDb = myClient.db("notes");
    const data = await myDb
      .collection("categories")
      .insertOne({type: type})
    
    return data;
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

export async function deleteNote({_id}: {_id: ObjectId}) {
   try {
      const myClient = await client.connect();
      const myDb = myClient.db('notes');
      const deleteOneNote = await myDb
         .collection('note')
         .deleteOne({_id})

      return deleteOneNote;

   } catch (error) {
      console.error(error);
      throw error; 
   }
}

export async function getNoteById(id: string) {
   try {
      const myClient = await client.connect();
      const myDb = myClient.db('notes');
      const getOneNote = await myDb
         .collection('note')
         .findOne({_id: new ObjectId(id)});

      return getOneNote;
   } catch (error) {
      console.error(error);
      throw error; 
   }
}

export async function updateNote({_id, title, description}: {_id: ObjectId, title: string, description: string}) {
   try {
      const myClient = await client.connect();
      const myDb = myClient.db('notes');
      const updateOneNote = await myDb
         .collection('note')
         .findOneAndUpdate({ _id: new ObjectId(_id) }, { $set: { title: title, description: description } })
   
      return updateOneNote
   } catch (error) {
      console.error(error);
      throw error;
   }
}