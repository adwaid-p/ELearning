import axios from "axios"
import { useState } from "react"

const CourseCreationPage = () => {
    const [courseName, setCourseName] = useState("");
    const [courseList, setCourseList] = useState(null);
    
    const generateCourse = async(event)=>{
        event.preventDefault()
        try {
            const response = await axios.post('http://localhost:3000/ai/getCourse', {course: courseName});
            setCourseList(response.data)
        } catch (error) {
            console.log(error)
        }
    }
        return (
          <div className="bg-[#181515] text-white min-h-[100dvh] flex flex-col justify-center items-center">
              <form onSubmit={generateCourse} className="relative">
                  <input value={courseName} onChange={(event)=> setCourseName(event.target.value)} className="bg-[#2a2929] w-2xl h-20 p-2 border-2 border-[#535151] rounded-md" type="text" placeholder="Enter the course"/>
                  <button type="submit" className="absolute bottom-0 right-0 cursor-pointer">Create</button>
              </form>
              <div>
                  <h1>{courseList?.course_title}</h1>
                  <p>{courseList?.course_description}</p>
                  <br />
                  {
                      courseList?.modules.map((module)=>{
                          return(
                              <div>
                                  <h1 className="text-2xl font-bold">{module?.module_title}</h1>
                                  {/* <h1>{module?.topics[0]?.topic_title}</h1> */}
                                  {/* {module?.topics[0] && console.log(module?.topics[0])} */}
                                  {
                                      module.topics.map((topic)=>{
                                          return(
                                              <div>
                                                  <h4 className="text-xl font-semibold ml-4">{topic?.topic_title}</h4>
                                                  {
                                                      topic?.subtopics.map((subtopic)=>{
                                                          return(
                                                              <div>
                                                                  <p className="ml-8">{subtopic}</p>
                                                              </div>
                                                          )
                                                      })
                                                  }
                                              </div>
                                          )
                                      })
                                  }
                              </div>
                          )
                      })
                  }
              </div>
          </div>
        )
}

export default CourseCreationPage