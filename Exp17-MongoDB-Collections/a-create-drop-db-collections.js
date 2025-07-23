// Experiment 17(a): Create and Drop Databases and Collections in MongoDB
// This file contains example queries for creating and dropping databases and collections in MongoDB shell and a Node.js program.

/*
Theory:
A database is a container for collections. A collection is a group of MongoDB documents.
*/

// --- MongoDB Shell Queries ---
// Create a new database (switches to it)
// use mydatabase

// Create a new collection
// db.createCollection('students')

// Drop a collection
// db.students.drop()

// Drop a database
// db.dropDatabase()

// --- Node.js Program for Creating/Dropping Collections ---
// To run this, install mongodb package: npm install mongodb
/*
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'exp17db';

async function main() {
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db(dbName);

  // Create collection
  await db.createCollection('students');
  console.log('Collection created');

  // List collections
  const collections = await db.listCollections().toArray();
  console.log('Collections:', collections.map(c => c.name));

  // Drop collection
  await db.collection('students').drop();
  console.log('Collection dropped');

  await client.close();
}
main();
*/
