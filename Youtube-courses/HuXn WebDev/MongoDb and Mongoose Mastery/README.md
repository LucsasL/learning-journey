# MongoDB and Mongoose Mastery Course

## Content

### So, what is MongoDb?

MongoDB is a popular open-source *NoSQL* database based on the JavaScript Language.

- Popular open-source document-oriented database;
- It is one of the most powerful NoSQL system and database;
- Uses document storage format called BSON *(Binary Style JSON Document)*
- Able to handle large amounts of unstructured data in real-time Apps.
- Can be used in web and mobile applications.

#### **`Code Example:`**

The code below represents two separate documents with it's own fields (that being the declaration of the properties with their respective value).

The combination of all the documents make a collection. And gathering multiple collections will make a database.

```js
// All of the code represents a collection

// Document 1
{
  _id: ObjectId("df123asdfwer3"), // Field 1
  name: "Irineu", // Field 2
  age: 18 // Field 3
}

// Document 2
{
  _id: ObjectId("df123asdfwer3"), // Field 1
  name: "Alex", // Field 2
  age: 24 // Field 3
}
```

#### Key Points 🔑

- A document is a set of key-value pairs that represent a **single record** within a collection.
- A field is a specific **piece of data** within a document that holds a value.
- A collection is a group of **related documents** that share a common structure and are stored in the same database.
- Database is a **container** for collections of JSON-like documents.

### What is Mongoose?

