# Basic Commands in REPL

The main commands used for the MongoDB REPL.

## Content

This markdown file has the main goal of registering the main given points in the initial sections of the MongoDB course. Due to it's theorical nature, this specific part doesn't have any *JS document* to replicate the code, since it's used in a **REPL.**

#### Commands

`show dbs`

Shows how many databases you have in the connected port.

`show collections`

Shows how many collections you have in a certain database.

### Methods for documents

`db.collectionName.insertOne()`

Inserts 1 document to the collection. If the specified collection doesn't exist, it will create one and add the document (object) to the collection.

`db.collectionName.insertMany(docsArray[])`

Inserts multiple documents to the collection. If the specified collection doesn't exist, it will create one and add the document (object) to the collection.

`db.collectionName.find({}, { name: 1 }).sort({ name: 1 })`

Sorts the collection in alphabetical order. If the parameter is set as -1, it will return a collection in the reverse order.

`db.collectionName.find({}, { name: 1 }).sort({ name: 1 }).skip(intNum)`

It receives an integer number and returns the collections skiping the first *intNum* of documents, *intNum* being that number you specified in the method call.

`db.collectionName.find({rating: { $gt: 5 }})`

You can pass operators to filter the documents you want to show when executing the command.

