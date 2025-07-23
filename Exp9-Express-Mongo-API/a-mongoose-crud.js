// Experiment 9(a): Connect MongoDB with Mongoose and Perform CRUD Operations
// This program demonstrates connecting to MongoDB using Mongoose and performing CRUD operations.

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3009;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/exp9db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const itemSchema = new mongoose.Schema({ name: String });
const Item = mongoose.model('Item', itemSchema);

// Create
app.post('/items', async (req, res) => {
  const item = new Item({ name: req.body.name });
  await item.save();
  res.send('Item created');
});

// Read
app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Update
app.put('/items/:id', async (req, res) => {
  await Item.findByIdAndUpdate(req.params.id, { name: req.body.name });
  res.send('Item updated');
});

// Delete
app.delete('/items/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.send('Item deleted');
});

app.listen(port, () => {
  console.log(`Express-Mongo CRUD app listening at http://localhost:${port}`);
});
