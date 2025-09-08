import { client } from "@/lib/db";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");

    if (!type) {
      return new Response(
        JSON.stringify({ error: "Missing 'type' parameter" }),
        { status: 400 }
      );
    }

    const myClient = await client.connect();
    const myDb = myClient.db("notes");
    const category = await myDb
      .collection("note")
      .countDocuments({ type: type });

    return new Response(JSON.stringify(category));
  } catch (error) {
    console.error("Error in GET /api/count:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
