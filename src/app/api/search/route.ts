import { client } from "@/lib/db";

export async function GET(request: Request) {
   const { searchParams } = new URL(request.url);
   const searchValue = searchParams.get('searchValue');

   try {
      const mongoClient = await client.connect();
      const db = mongoClient.db('notes');
      const data = await db
         .collection('note')
         .find({
            $or: [
               { title: { $regex: searchValue, $options: 'i' } },
            ],
         }).toArray()

      console.log('found by input successful')

      if (data && data.length > 0) {
         const transformedData = data.map((el) => ({
            ...el,
            _id: el._id.toString(),
         }));
         return new Response(JSON.stringify(transformedData));
      } else {
         return new Response(JSON.stringify([]));
      }
   } catch (error) {
      alert(error)
   }
}