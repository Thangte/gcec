import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import TeacherRoute from "./components/Routes/TeacherRoute";
import StudentRoute from "./components/Routes/StudentRoute";
import TeacherDashboard from "./pages/Teacher/TeacherDashboard";
import Login from "./pages/Auth/Login";
import StudentDashboard from "./pages/Student/StudentDashboard";
import PageNotFound from "./pages/PageNotFound";
import StudentProfile from "./pages/Student/StudentProfile";
import StudentResult from "./pages/Student/StudentResult";
import TeacherProfile from "./pages/Teacher/TeacherProfile";
import ImageFile from "./pages/ImageFile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/imageFile/:slug" element={<ImageFile />} />
        <Route path="/*" element={<PageNotFound />} />
        {/* Teacher */}
        <Route path="/dashboard" element={<TeacherRoute />}>
          <Route path="teacher" element={<TeacherDashboard />} />
          <Route path="teacher/profile" element={<TeacherProfile />} />
        </Route>

        {/* Student */}
        <Route path="/dashboard" element={<StudentRoute />}>
          <Route path="student" element={<StudentDashboard />} />
          <Route path="student/profile" element={<StudentProfile />} />
          <Route path="student/result" element={<StudentResult />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
