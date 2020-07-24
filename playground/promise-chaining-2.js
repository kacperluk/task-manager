require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5f1971e8126fb92e97746527').then((task) => {
//     console.log(task)
//     return Task.find({ completed: true })
// }).then((tasks) => {
//     console.log('Tasks to complete:', tasks)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (_id, completed) => {
    const deletedTask = await Task.findByIdAndDelete(_id)
    console.log('Deleted Task:', deletedTask)
    const tasks = await Task.find({ completed })
    return tasks
}

deleteTaskAndCount('5f197219b2604b2eb575b299', true).then((count) => {
    console.log('taskCount: ', count)
}).catch((e) => {
    throw new Error('Somthing went wrong')
})