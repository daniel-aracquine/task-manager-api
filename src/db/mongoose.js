const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URL,{})


// const tasks = mongoose.model('tasks',{
//     description: {
//         type: String,
//         trim: true,
//         required:true
//     },
//     completed: {
//         type: Boolean,
//         default:false
//     }
// })
