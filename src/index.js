const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// Maitenance mode
app.use((req, res, next) => {
    res.status(503).send('Site is under maintenance')
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const jwt = require('jsonwebtoken')

// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'asdsdv123' }, 'thisisrandomsentence', { expiresIn: '7 days' })
//     console.log(token)

//     const data = jwt.verify(token, 'thisisrandomsentence')
//     console.log(data)
// }

// myFunction()