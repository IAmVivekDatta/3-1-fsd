// Experiment 17(b): Working with Records in MongoDB
// This file contains example queries for working with records using find(), limit(), sort(), createIndex(), and aggregate(), and a Node.js program.

/*
Theory:
- find(): Retrieves documents from a collection.
- limit(): Limits the number of documents returned.
- sort(): Sorts the documents.
- createIndex(): Creates an index on a field.
- aggregate(): Performs aggregation operations like grouping, filtering, etc.
*/

// --- MongoDB Shell Queries ---
// Find all records
// db.students.find()

// Limit the number of records
// db.students.find().limit(2)

// Sort records by age
// db.students.find().sort({ age: 1 })

// Create an index on the 'name' field
// db.students.createIndex({ name: 1 })

// Aggregate example: Group by branch and count
// db.students.aggregate([
//   { $group: { _id: '$branch', count: { $sum: 1 } } }
// ])

// --- Node.js Program for Querying and Aggregating Records ---
// To run this, install mongodb package: npm install mongodb
/*
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'exp17db';

async function main() {
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db(dbName);
  const students = db.collection('students');

  // Find all
  const all = await students.find().toArray();
  console.log('All:', all);

  // Limit
  const limited = await students.find().limit(2).toArray();
  console.log('Limited:', limited);

  // Sort
  const sorted = await students.find().sort({ age: 1 }).toArray();
  console.log('Sorted:', sorted);

  // Create index
  await students.createIndex({ name: 1 });
  console.log('Index created on name');

  // Aggregate: group by branch and count
  const agg = await students.aggregate([
    { $group: { _id: '$branch', count: { $sum: 1 } } }
  ]).toArray();
  console.log('Aggregate:', agg);

  await client.close();
}
main();
*/
