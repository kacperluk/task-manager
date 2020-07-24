require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5f1971e8126fb92e97746527').then((task) => {
    console.log(task)
    return Task.find({ completed: true })
}).then((tasks) => {
    console.log('Tasks to complete:', tasks)
}).catch((e) => {
    console.log(e)
})