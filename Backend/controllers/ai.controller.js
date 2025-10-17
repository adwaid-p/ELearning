const createContent = require('../services/ai.service')

module.exports.GetCourse = async(req, res)=>{
    const course = req.body.course;
    const response = await createContent(course)
    console.log(response)
    res.send(response)
}