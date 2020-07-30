const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('5f22c8be309c361f06ff5c12')
    // await task.populate('owner').execPopulate()
    // console.log(task)

    const user = await User.findById('5f22c88d309c361f06ff5c0f')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()  