const mongoose = require('mongoose')
const validator = require('validator')
const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api'

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         validate(value) {
//             if (value.includes('password') || value.length <= 6) {
//                 throw new Error('Password too weak')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error('Age must be positive number')
//             }
//         }
//     }
// })

// const me = new User({
//     name: 'Rick',
//     age: 37,
//     password: 'sasdsdgfhrtqwe132',
//     email: 'rick.sanchez@ecorp.com'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const sometask = new Task({
    description: 'walk teh doggo',
    completed: false
})

sometask.save().then(() => {
    console.log(sometask)
}).catch((error) => {
    console.log(error)
})

