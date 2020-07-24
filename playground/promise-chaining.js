require('../src/db/mongoose')
const User = require('../src/models/user')

// 5f1972b3ff55aa2f19fdbf31

User.findByIdAndUpdate('5f1972b3ff55aa2f19fdbf31', { age: 2312 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 2312 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})