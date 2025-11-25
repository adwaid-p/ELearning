import './App.css'
import 'remixicon/fonts/remixicon.css';
import CoursePage from '../Pages/CoursePage'
import CourseCreationPage from '../Pages/CourseCreationPage'
import TestPage from '../Pages/TestPage'
import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AuthLayout from '../Components/AuthLayout';

function App() {

  return (
    <>
    <Routes>
        <Route element={<AuthLayout/>}>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
        </Route>
        <Route path="/CourseCreationPage" element={<CourseCreationPage />} />
        <Route path="/CoursePage" element={<CoursePage />} />
      </Routes>
      {/* <TestPage/> */}
      {/* <CoursePage/> */}
      {/* <CourseCreationPage/> */}
    </>
  )
}

export default App
