# Basic Commands in REPL

The main commands used for the MongoDB REPL.

## Content

This markdown file has the main goal of registering the main given points in the initial sections of the MongoDB course. Due to it's theorical nature, this specific part doesn't have any *JS document* to replicate the code, since it's used in a **REPL.**

`show dbs`

Shows how many databases you have in the connected port.

`show collections`

Shows how many collections you have in a certain database.

### Methods for documents

`db.collectionName.insertOne()`

Inserts 1 document to the collection. If the specified collection doesn't exist, it will create one and add the document (object) to the collection.

`db.collectionName.insertMany(docsArray[])`

Inserts multiple documents to the collection. If the specified collection doesn't exist, it will create one and add the document (object) to the collection.
