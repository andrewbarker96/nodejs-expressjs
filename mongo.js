import {db_pw} from './secrets'

const { MongoClient, ServerApiVersion } = require('mongodb');
const URI = `mongodb+srv://andrewbarker96:${db_pw}@cluster0.5646wb0.mongodb.net/?retryWrites=true&w=majority&ssl=true`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);