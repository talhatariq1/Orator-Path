// Script to check MongoDB collections and their structure
const { MongoClient } = require('mongodb');

// Connection URI from mcp-config.json
const uri = "mongodb+srv://oratorpath:eHOwaW3T5lHHNdbG@cluster0.1ri6u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = "orator-path";

async function main() {
  console.log("Connecting to MongoDB...");
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    
    // List all collections
    const collections = await db.listCollections().toArray();
    console.log("\nCollections in the database:");
    collections.forEach(collection => {
      console.log(`- ${collection.name}`);
    });

    // For each collection, get a sample document to understand the structure
    console.log("\nExamining collection structures:");
    for (const collection of collections) {
      const collectionName = collection.name;
      console.log(`\n${collectionName} collection:`);
      
      // Get document count
      const count = await db.collection(collectionName).countDocuments();
      console.log(`Document count: ${count}`);
      
      if (count > 0) {
        // Get a sample document
        const sampleDoc = await db.collection(collectionName).findOne();
        console.log("Sample document structure:");
        console.log(JSON.stringify(sampleDoc, null, 2));
      } else {
        console.log("Collection is empty");
      }
    }

  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  } finally {
    await client.close();
    console.log("\nClosed MongoDB connection");
  }
}

main().catch(console.error);
