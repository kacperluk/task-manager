require('../src/db/mongoose')
const User = require('../src/models/user')

// 5f1972b3ff55aa2f19fdbf31

// User.findByIdAndUpdate('5f1972b3ff55aa2f19fdbf31', { age: 2312 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 2312 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (_id, age) => {
    const user = await User.findByIdAndUpdate(_id, { age })
    console.log(user)
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5f19894b887a8e4cf64d2ada', 1232131).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log('e', e)
})