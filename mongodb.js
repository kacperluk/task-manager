// CRUD creater read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-menager'

const id = new ObjectID()
console.log(id.id)
console.log(id.id.length)
console.log(id.toHexString())
console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Vikram',
    //     age: 22
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([{
    //     name: 'Jen',
    //     age: 1232
    // }, {
    //     name: 'Gunther',
    //     age: 1111
    // }], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })
    // db.collection('tasks').insertMany([{
    //     description: 'Learn mongodb',
    //     completed: true
    // }, {
    //     description: 'Walk the doggo',
    //     completed: false
    // }, {
    //     description: 'Sleep',
    //     completed: true
    // }], (error, result) => {
    //     if (error) {
    //         return console.log('error')
    //     }
    //     console.log(result.ops)
    //     console.log(result.result)
    // })
})