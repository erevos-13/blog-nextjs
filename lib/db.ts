import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://erevos:Erev0s13@kronos.omk7p.mongodb.net/blog?retryWrites=true&w=majority"
  );
  return client;
}
