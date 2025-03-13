// Go to MongoDB Atlas
// Create a free M0 cluster
// Create a username and password
// Get the connection string from the cluster
// Use the connection string to connect to the database
//Install Mongodb Compass [UI to interact with the database]

//Connection String for connection to the database
// const URL = "mongodb+srv://90360saurabh:3kksF8f9oLrMNKhM@namastenodejs.sxhgp.mongodb.net/";


const { MongoClient } = require('mongodb');
require('dotenv').config();

// Connection URL
const url = process.env.DATABASE_URL;
const client = new MongoClient(url);

// Database Name
const dbName = process.env.DATABASE_NAME;

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection(process.env.COLLECTION_NAME);

//   Add a query that returns all the documents.
const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

