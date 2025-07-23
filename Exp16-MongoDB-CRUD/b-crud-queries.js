// Experiment 16(b): MongoDB CRUD Operations using Queries
// This file contains example queries for performing CRUD operations in MongoDB shell and a Node.js program.

/*
Theory:
CRUD stands for Create, Read, Update, and Delete. These are the basic operations for managing data in a database.

- insert(): Adds new documents to a collection.
- find(): Retrieves documents from a collection.
- update(): Modifies existing documents.
- remove(): Deletes documents from a collection.
*/

// --- MongoDB Shell Queries ---
// Insert a document
// db.students.insert({ name: 'Alice', age: 21, branch: 'CSE' })

// Find all documents
// db.students.find()

// Update a document
// db.students.update({ name: 'Alice' }, { $set: { age: 22 } })

// Remove a document
// db.students.remove({ name: 'Alice' })

// --- Node.js Program for CRUD using MongoDB Native Driver ---
// To run this, install mongodb package: npm install mongodb
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'exp16db';

async function main() {
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db(dbName);
  const students = db.collection('students');

  // Create
  await students.insertOne({ name: 'Bob', age: 23, branch: 'ECE' });

  // Read
  const all = await students.find().toArray();
  console.log('All students:', all);

  // Update
  await students.updateOne({ name: 'Bob' }, { $set: { age: 24 } });

  // Delete
  await students.deleteOne({ name: 'Bob' });

  await client.close();
}
main();
